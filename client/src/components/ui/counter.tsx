import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
    value: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
}

export function Counter({ value, prefix = "", suffix = "", duration = 2 }: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    const spring = useSpring(0, {
        duration: duration * 1000, // framer-motion useSpring duration is not in seconds for this implementation usually, but let's check basic spring config.
        // Actually useSpring takes stiffness/damping. Let's use useMotionValue + animate or just rely on a simpler approach.
        // Re-evaluating: easiest way for "count up" is standard animation value.
        bounce: 0
    });

    // Let's us useMotionValue and animate for linear control if needed, or stick to simple valid prop animation
    // A cleaner approach for exact duration control:
    const motionValue = useSpring(0, {
        duration: duration * 1000,
        // Setting stiffness/damping to simulate duration roughly or use framer-motion's animate function
        stiffness: 50,
        damping: 20
    });

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    const display = useTransform(motionValue, (latest) => {
        return `${prefix}${Math.round(latest)}${suffix}`;
    });

    return <motion.span ref={ref}>{display}</motion.span>;
}

// Improvement: useSpring is physics based. For a "Count UP" with specific duration, `animate` is better.
// Let's rewrite using `animate` from "framer-motion" for better duration control.

export function CounterV2({ value, prefix = "", suffix = "", duration = 2 }: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-10px" });

    // We can render just a span and animate its text content
    useEffect(() => {
        if (inView && ref.current) {
            const node = ref.current;
            const controls = { opacity: 1 }; // dummy

            // Manual animation frame loop or basic interval could work, but framer-motion `animate` is cleaner
            // However, since we are returning a motion component, let's use the React-friendly way
        }
    }, [inView, value]);

    // Let's stick to the simplest reliable method: standard motion value
    return (
        <CounterSimple value={value} prefix={prefix} suffix={suffix} duration={duration} />
    );
}

function CounterSimple({ value, prefix = "", suffix = "", duration = 2 }: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView || !ref.current) return;

        let startTime: number;
        let animationFrame: number;
        const node = ref.current;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            // Ease out function for smoother effect
            const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);
            const current = Math.floor(easeOutQuart(progress) * value);

            node.textContent = `${prefix}${current}${suffix}`;

            if (progress < 1) {
                animationFrame = requestAnimationFrame(step);
            } else {
                node.textContent = `${prefix}${value}${suffix}`; // Ensure final value
            }
        };

        animationFrame = requestAnimationFrame(step);

        return () => cancelAnimationFrame(animationFrame);
    }, [inView, value, duration, prefix, suffix]);

    return <span ref={ref} className="tabular-nums">{prefix}0{suffix}</span>;
}

export default CounterSimple;
