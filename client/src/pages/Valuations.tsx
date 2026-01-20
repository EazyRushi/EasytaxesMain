import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowRight, Calculator, PieChart, FileText, Layers } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function Valuations() {
    const pricingOptions = [
        {
            title: "409A Valuation",
            bestFor: "Issuing Equity Options",
            featured: true,
            features: [
                "Audit-defensible report",
                "Fast turnaround (5-7 days)",
                "Cap table integration"
            ],
            cta: "Get 409A",
            variant: "409a"
        },
        {
            title: "Business Valuation",
            bestFor: "M&A / Planning",
            features: [
                "Fair market value assessment",
                "Comparable analysis",
                "Detailed valuation report"
            ],
            cta: "Get Valuation",
            variant: "business"
        },
        {
            title: "Fairness Opinion",
            bestFor: "Transactions",
            features: [
                "Independent assessment",
                "Transaction fairness review",
                "Board presentation"
            ],
            cta: "Get Opinion",
            variant: "fairness"
        }
    ];

    const deliverables = [
        "Certified valuation report",
        "Methodology breakdown",
        "Cap table analysis",
        "Audit support included",
        "Market comparable data",
        "Secure digital delivery"
    ];

    const situations = [
        { title: "Issuing Stock Options", case: "options" },
        { title: "Raising Venture Capital", case: "fundraise" },
        { title: "Selling the Business", case: "exit" },
        { title: "Gift & Estate Planning", case: "estate" },
        { title: "Litigation Support", case: "litigation" },
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
                        Valuations & 409A
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto mb-10 font-light"
                    >
                        Audit-defensible valuations for startups and private companies issuing equity.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link href="/contact?service=Valuations#form">
                            <Button size="lg" className="bg-white text-[#059669] hover:bg-blue-50 border-0 font-bold px-8 h-14 rounded-xl text-lg shadow-lg">
                                Start Valuation
                            </Button>
                        </Link>
                        <Link href="/contact?service=Valuations#form">
                            <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 h-14 rounded-xl text-lg">
                                Book a Call
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 2. PRICING OPTIONS */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Valuation Types</h2>
                    <p className="text-slate-600 mt-2">Fast, accurate, and compliant reporting.</p>
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

                            <Link href={`/contact?service=Valuations&plan=${opt.title}#form`}>
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
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Deliverables</h2>
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
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Why now?</h2>
                <p className="text-center text-slate-600 mb-12">Trigger events for valuation.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {situations.map((sit, i) => (
                        <Link key={i} href={sit.link || `/contact?service=Valuations&plan=${sit.title}#form`}>
                            <div className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="font-bold text-slate-800 text-lg mb-2">{sit.title}</h3>
                                    <div className="h-1 w-12 bg-slate-100 group-hover:bg-primary transition-colors rounded-full mb-4"></div>
                                </div>
                                <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                                    Start Process <ArrowRight className="ml-2 w-4 h-4" />
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
                        <AccordionTrigger>What is a 409A valuation?</AccordionTrigger>
                        <AccordionContent>
                            A 409A valuation determines the Fair Market Value (FMV) of your common stock. You need it to issue stock options to employees tax-compliantly.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How often do I need a 409A?</AccordionTrigger>
                        <AccordionContent>
                            Generally every 12 months, or whenever you raise a new round of funding (material event).
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>How long does it take?</AccordionTrigger>
                        <AccordionContent>
                            Our process typically takes 5-7 business days from the time we receive all necessary data.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            {/* 9. FINAL CTA */}
            <section className="py-24 bg-brand-gradient text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8">Value with precision</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/contact?service=Valuations#form">
                            <Button size="lg" className="bg-white text-[#059669] hover:bg-blue-50 border-0 font-bold px-10 h-14 rounded-xl text-lg shadow-xl hover:-translate-y-1 transition-all">
                                Get Valuation
                            </Button>
                        </Link>
                        <Link href="/contact?service=Valuations#form">
                            <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-10 h-14 rounded-xl text-lg backdrop-blur-sm">
                                Book a Call
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
