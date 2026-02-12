import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function TaxComplianceNavbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(10px)',
                borderBottom: scrolled ? '1px solid #E2E8F0' : '1px solid transparent'
            }}
        >
            {/* Add section-inner max-width */}
            <style>{`
                .nav-section-inner {
                    max-width: 1100px;
                    margin-left: auto;
                    margin-right: auto;
                }
            `}</style>

            <div className="nav-section-inner px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="/"
                    className="text-xl md:text-2xl font-medium"
                    style={{
                        fontFamily: "'DM Serif Display', Georgia, serif",
                        letterSpacing: '-0.02em',
                        textDecoration: 'none',
                        fontWeight: '500'
                    }}
                >
                    <span style={{ color: '#0D9488' }}>eazy</span>
                    <span style={{ color: '#0F172A' }}>taxes</span>
                    <span style={{ color: '#0F172A', marginLeft: '4px' }}>Inc.</span>
                </a>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a
                        href="#process"
                        className="text-sm font-medium hover:opacity-70 transition-opacity"
                        style={{ color: '#475569' }}
                    >
                        How It Works
                    </a>
                    <a
                        href="#pricing"
                        className="text-sm font-medium hover:opacity-70 transition-opacity"
                        style={{ color: '#475569' }}
                    >
                        Pricing
                    </a>
                    <a
                        href="#faq"
                        className="text-sm font-medium hover:opacity-70 transition-opacity"
                        style={{ color: '#475569' }}
                    >
                        FAQ
                    </a>
                    <a
                        href="https://app.cpa.octondata.com/org/4S064E/register"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                        style={{ background: '#0D9488' }}
                    >
                        Get Started Free →
                    </a>
                </div>

                {/* Mobile CTA */}
                <a
                    href="https://app.cpa.octondata.com/org/4S064E/register"
                    className="md:hidden inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold text-white"
                    style={{ background: '#0D9488' }}
                >
                    Get Started
                </a>
            </div>
        </motion.nav>
    );
}
