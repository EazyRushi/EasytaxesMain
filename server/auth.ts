
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { type Express } from "express";
import session from "express-session";
import { scrypt, randomBytes, timingSafeEqual } from "crypto";
import { promisify } from "util";
import { db } from "./db";
import { users } from "@shared/schema";
import { eq } from "drizzle-orm";

const scryptAsync = promisify(scrypt);

async function hashPassword(password: string) {
    const salt = randomBytes(16).toString("hex");
    const buf = (await scryptAsync(password, salt, 64)) as Buffer;
    return `${buf.toString("hex")}.${salt}`;
}

async function comparePassword(supplied: string, stored: string) {
    const [hashed, salt] = stored.split(".");
    const hashedBuf = Buffer.from(hashed, "hex");
    const suppliedBuf = (await scryptAsync(supplied, salt, 64)) as Buffer;
    return timingSafeEqual(hashedBuf, suppliedBuf);
}

export function setupAuth(app: Express) {
    const sessionSettings: session.SessionOptions = {
        secret: process.env.SESSION_SECRET || "super secret session secret",
        resave: false,
        saveUninitialized: false,
        store: new session.MemoryStore(),
        cookie: {
            secure: process.env.NODE_ENV === "production",
            maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        }
    };

    if (process.env.NODE_ENV === "production") {
        app.set("trust proxy", 1);
    }

    app.use(session(sessionSettings));
    app.use(passport.initialize());
    app.use(passport.session());

    // Local Strategy
    passport.use(
        new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
            try {
                const [user] = await db.select().from(users).where(eq(users.email, email)).limit(1);
                if (!user) {
                    return done(null, false, { message: "Invalid email or password" });
                }

                const isValid = await comparePassword(password, user.password);
                if (!isValid) {
                    return done(null, false, { message: "Invalid email or password" });
                }

                return done(null, user);
            } catch (err) {
                return done(err);
            }
        }),
    );

    // Google OAuth Strategy
    if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
        passport.use(
            new GoogleStrategy(
                {
                    clientID: process.env.GOOGLE_CLIENT_ID,
                    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                    callbackURL: `${process.env.BASE_URL || 'http://localhost:5000'}/api/auth/google/callback`,
                },
                async (_accessToken, _refreshToken, profile, done) => {
                    try {
                        const email = profile.emails?.[0]?.value;
                        if (!email) {
                            return done(new Error("No email found in Google profile"));
                        }

                        // Check if user exists
                        let [user] = await db.select().from(users).where(eq(users.email, email)).limit(1);

                        if (!user) {
                            // Create new user with a random password (won't be used for OAuth)
                            const randomPassword = await hashPassword(randomBytes(32).toString("hex"));
                            [user] = await db
                                .insert(users)
                                .values({
                                    email,
                                    password: randomPassword,
                                    role: "user"
                                })
                                .returning();
                        }

                        return done(null, user);
                    } catch (err) {
                        return done(err as Error);
                    }
                }
            )
        );
    }

    passport.serializeUser((user: any, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id: number, done) => {
        try {
            const [user] = await db.select().from(users).where(eq(users.id, id)).limit(1);
            done(null, user);
        } catch (err) {
            done(err);
        }
    });

    app.post("/api/register", async (req, res, next) => {
        try {
            const { email, password, confirmPassword } = req.body;

            if (!email || !password || !confirmPassword) {
                return res.status(400).send("Missing required fields");
            }

            if (password !== confirmPassword) {
                return res.status(400).send("Passwords do not match");
            }

            const [existingUser] = await db.select().from(users).where(eq(users.email, email)).limit(1);
            if (existingUser) {
                return res.status(400).send("Email already in use");
            }

            const hashedPassword = await hashPassword(password);
            const [newUser] = await db
                .insert(users)
                .values({
                    email,
                    password: hashedPassword,
                    role: "user"
                })
                .returning();

            req.login(newUser, (err) => {
                if (err) return next(err);
                return res.json({ id: newUser.id, email: newUser.email, role: newUser.role });
            });
        } catch (err) {
            next(err);
        }
    });

    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        const user = req.user as any;
        res.json({ id: user.id, email: user.email, role: user.role });
    });

    app.post("/api/logout", (req, res, next) => {
        req.logout((err) => {
            if (err) return next(err);
            res.sendStatus(200);
        });
    });

    app.get("/api/user", (req, res) => {
        if (!req.isAuthenticated()) return res.sendStatus(401);
        const user = req.user as any;
        res.json({ id: user.id, email: user.email, role: user.role });
    });

    // Google OAuth routes
    app.get(
        "/api/auth/google",
        passport.authenticate("google", { scope: ["profile", "email"] })
    );

    app.get(
        "/api/auth/google/callback",
        passport.authenticate("google", { failureRedirect: "/auth" }),
        (req, res) => {
            // Successful authentication, redirect to questionnaire
            res.redirect("/questionnaire");
        }
    );
}
