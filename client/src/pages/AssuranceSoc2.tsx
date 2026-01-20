import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, CheckCircle2, FileCheck, Lock, Layers } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function AssuranceSoc2() {
    const pricingOptions = [
        {
            title: "SOC 2 Type I",
            bestFor: "Startups needing immediate proof",
            features: [
                "Gap analysis",
                "Control design review",
                "Type I report issuance"
            ],
            cta: "Get Type I",
            variant: "type1"
        },
        {
            title: "SOC 2 Type II",
            bestFor: "Established enterprise sales",
            featured: true,
            features: [
                "Observation period testing",
                "Operating effectiveness",
                "Type II report issuance"
            ],
            cta: "Get Type II",
            variant: "type2"
        },
        {
            title: "Financial Review",
            bestFor: "Bank reporting / Investors",
            features: [
                "Analytical procedures",
                "Financial statement review",
                "Review report"
            ],
            cta: "Get Review",
            variant: "review"
        }
    ];

    const deliverables = [
        "AICPA accredited reports",
        "Detailed management letters",
        "System security descriptions",
        "Control gap assessments",
        "Readiness checklists",
        "Vendor risk support"
    ];

    const situations = [
        { title: "Need SOC 2 for a Enterprise Deal", case: "soc2" },
        { title: "Financial Audit Required", case: "audit" },
        { title: "Bank Requires Review", case: "review" },
        { title: "ISO 27001 Alignment", case: "iso" },
        { title: "Internal Controls Assessment", case: "controls" },
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
                        Assurance & SOC 2
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto mb-10 font-light"
                    >
                        Build trust with customers and investors through independent audits and SOC 2 attestation.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link href="/checkout?service=assurance-soc2">
                            <Button size="lg" className="bg-white text-[#059669] hover:bg-blue-50 border-0 font-bold px-8 h-14 rounded-xl text-lg shadow-lg">
                                Get Assured
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
                    <h2 className="text-3xl font-bold text-slate-900">Compliance Packages</h2>
                    <p className="text-slate-600 mt-2">Scalable assurance for growing companies.</p>
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

                            <Link href={`/checkout?service=assurance-soc2&variant=${opt.variant}`}>
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
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">What do you need?</h2>
                <p className="text-center text-slate-600 mb-12">Select your compliance requirement.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {situations.map((sit, i) => (
                        <Link key={i} href={sit.link || `/checkout?service=assurance-soc2&case=${sit.case}`}>
                            <div className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="font-bold text-slate-800 text-lg mb-2">{sit.title}</h3>
                                    <div className="h-1 w-12 bg-slate-100 group-hover:bg-primary transition-colors rounded-full mb-4"></div>
                                </div>
                                <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                                    Start Engagement <ArrowRight className="ml-2 w-4 h-4" />
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
                        <AccordionTrigger>How long does a SOC 2 audit take?</AccordionTrigger>
                        <AccordionContent>
                            A Type I report can be done in 4-6 weeks. A Type II requires an observation period (usually 3-12 months) plus reporting time.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Do I need a readiness assessment first?</AccordionTrigger>
                        <AccordionContent>
                            We highly recommend it. A readiness assessment identifies gaps before the actual audit begins, saving you from a qualified opinion.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What is the difference between an Audit and a Review?</AccordionTrigger>
                        <AccordionContent>
                            An audit provides "reasonable assurance" with extensive testing. A review provides "limited assurance" based on inquiry and analytics, often sufficient for banks.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            {/* 9. FINAL CTA */}
            <section className="py-24 bg-brand-gradient text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8">Secure your business today</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/checkout?service=assurance-soc2">
                            <Button size="lg" className="bg-white text-[#059669] hover:bg-blue-50 border-0 font-bold px-10 h-14 rounded-xl text-lg shadow-xl hover:-translate-y-1 transition-all">
                                Get Compliant
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
