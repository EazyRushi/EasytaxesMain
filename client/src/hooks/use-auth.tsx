import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/lib/supabase';
import { User, Session } from '@supabase/supabase-js';
import { useToast } from './use-toast';
import { useLocation } from 'wouter';

interface AuthContextType {
    user: User | null;
    session: Session | null;
    loading: boolean;
    signUp: (email: string, password: string) => Promise<void>;
    signIn: (email: string, password: string) => Promise<void>;
    signInWithGoogle: () => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();
    const [, setLocation] = useLocation();

    useEffect(() => {
        // Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(false);
        });

        // Listen for auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);

    const signUp = async (email: string, password: string) => {
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) throw error;

            if (data.user) {
                toast({
                    title: 'Success!',
                    description: 'Account created successfully. Please complete your tax profile.',
                });
                setLocation('/profile-onboarding');
            }
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to sign up',
                variant: 'destructive',
            });
            throw error;
        }
    };

    const signIn = async (email: string, password: string) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            if (data.user) {
                toast({
                    title: 'Welcome back!',
                    description: 'Successfully logged in',
                });

                // Check if user has completed profile
                const profileData = localStorage.getItem(`profile_${data.user.id}`);
                if (profileData) {
                    // Profile exists, go to dashboard
                    setLocation('/dashboard');
                } else {
                    // No profile, go to onboarding
                    setLocation('/profile-onboarding');
                }
            }
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Invalid email or password',
                variant: 'destructive',
            });
            throw error;
        }
    };

    const signInWithGoogle = async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: `${window.location.origin}/questionnaire`,
                },
            });

            if (error) throw error;
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to sign in with Google',
                variant: 'destructive',
            });
            throw error;
        }
    };

    const signOut = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;

            toast({
                title: 'Signed out',
                description: 'You have been successfully signed out',
            });
            setLocation('/auth');
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to sign out',
                variant: 'destructive',
            });
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                session,
                loading,
                signUp,
                signIn,
                signInWithGoogle,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
