import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowRight, TrendingUp, BarChart3, Briefcase, Globe, Layers } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function CfoAdvisory() {
    const pricingOptions = [
        {
            title: "Fractional CFO",
            bestFor: "Series A+ or Growth",
            featured: true,
            features: [
                "Financial strategy & modeling",
                "Board meeting prep",
                "Fundraising support"
            ],
            cta: "Hire CFO",
            variant: "fractional"
        },
        {
            title: "Controller Services",
            bestFor: "Seed / Early Stage",
            features: [
                "Month-end close oversight",
                "KPI dashboarding",
                "Audit readiness"
            ],
            cta: "Hire Controller",
            variant: "controller"
        },
        {
            title: "Project Advisory",
            bestFor: "Specific Initiatives",
            features: [
                "M&A Due Diligence",
                "System implementations",
                "Technical accounting memos"
            ],
            cta: "Get Advice",
            variant: "project"
        }
    ];

    const deliverables = [
        "5-year financial forecasts",
        "Investor deck financials",
        "Board reporting packages",
        "Cash flow management tools",
        "Unit economics analysis",
        "Technical accounting papers"
    ];

    const situations = [
        { title: "Raising Capital", case: "fundraising" },
        { title: "Preparing for Audit", case: "auditprep" },
        { title: "Need Board Reporting", case: "board" },
        { title: "Clean Up Financials", case: "cleanup" },
        { title: "M&A Transaction", case: "ma" },
        { title: "Not sure (Start Here)", link: "/start" }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* 1. HERO */}
            <section className="bg-brand-gradient py-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5 pattern-grid-lg opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                    >
                        CFO & Advisory Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto mb-10 font-light"
                    >
                        Strategic financial leadership to help you scale, raise capital, and exit.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link href="/checkout?service=cfo-advisory">
                            <Button size="lg" className="bg-white text-[#059669] hover:bg-blue-50 border-0 font-bold px-8 h-14 rounded-xl text-lg shadow-lg">
                                Engage Advisory
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 h-14 rounded-xl text-lg">
                            Book a Call
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* 2. PRICING OPTIONS */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Engagement Models</h2>
                    <p className="text-slate-600 mt-2">Flexible support matching your growth stage.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingOptions.map((opt, i) => (
                        <motion.div
                            key={opt.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative bg-white rounded-2xl p-8 border ${opt.featured ? 'border-primary ring-2 ring-primary/20 shadow-xl scale-105 z-10' : 'border-slate-100 shadow-md'} flex flex-col`}
                        >
                            {opt.featured && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-gradient text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{opt.title}</h3>
                            <p className="text-sm text-slate-500 mb-6 h-10">{opt.bestFor}</p>

                            <div className="text-3xl font-bold text-slate-900 mb-8">
                                From <span className="text-slate-400 text-lg font-normal">TBD</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {opt.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link href={`/checkout?service=cfo-advisory&variant=${opt.variant}`}>
                                <Button className={`w-full h-12 rounded-xl font-semibold text-base shadow-lg transition-all hover:-translate-y-1 ${opt.featured ? 'bg-brand-gradient hover:brightness-110' : 'bg-slate-900 hover:bg-slate-800'}`}>
                                    {opt.cta}
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 3. WHAT YOU GET */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Expertise Delivered</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {deliverables.map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary flex-shrink-0">
                                    <Check className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-slate-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CHOOSE YOUR SITUATION */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Focus areas</h2>
                <p className="text-center text-slate-600 mb-12">Where do you need leadership?</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {situations.map((sit, i) => (
                        <Link key={i} href={sit.link || `/checkout?service=cfo-advisory&case=${sit.case}`}>
                            <div className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="font-bold text-slate-800 text-lg mb-2">{sit.title}</h3>
                                    <div className="h-1 w-12 bg-slate-100 group-hover:bg-primary transition-colors rounded-full mb-4"></div>
                                </div>
                                <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                                    Get Support <ArrowRight className="ml-2 w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* 8. FAQ */}
            <section className="py-24 max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">FAQ</h2>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What does a Fractional CFO do?</AccordionTrigger>
                        <AccordionContent>
                            A Fractional CFO provides high-level financial strategy, board prep, and fundraising support on a part-time basis, giving you executive expertise without the full-time cost.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Why do I need a valuation or model?</AccordionTrigger>
                        <AccordionContent>
                            Investors need to see that you understand your unit economics and have a viable path to growth. A robust model is the foundation of any successful fundraise.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Can you help with M&A?</AccordionTrigger>
                        <AccordionContent>
                            Yes, we provide buy-side and sell-side diligence support, helping you assess targets or prepare your financials for sale.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            {/* 9. FINAL CTA */}
            <section className="py-24 bg-brand-gradient text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8">Scale with confidence</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/checkout?service=cfo-advisory">
                            <Button size="lg" className="bg-white text-[#059669] hover:bg-blue-50 border-0 font-bold px-10 h-14 rounded-xl text-lg shadow-xl hover:-translate-y-1 transition-all">
                                Start Advisory
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-10 h-14 rounded-xl text-lg backdrop-blur-sm">
                            Book a Call
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
