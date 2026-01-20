import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, Shield, User, Globe, Clock, Layers, HelpCircle, CheckCircle2, AlertTriangle, FileText, DollarSign, Scale, Handshake, ClipboardCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function TaxResolution() {
    const pricingOptions = [
        {
            title: "Notice Response",
            bestFor: "IRS letters, CP notices, state tax notices",
            price: "From $1,500",
            features: [
                "Notice analysis and account research",
                "Written response preparation",
                "Direct IRS/state correspondence",
                "Power of Attorney filing (Form 2848)",
                "Follow-up until matter is resolved"
            ],
            whoNeeds: [
                "Received a CP notice or IRS letter",
                "Balance due notices",
                "Proposed adjustments or audits",
                "Missing return notices"
            ],
            cta: "Get Started",
            variant: "notice"
        },
        {
            title: "Audit Representation",
            bestFor: "IRS or state audits, examinations",
            price: "From $3,500",
            featured: true,
            features: [
                "Audit defense strategy development",
                "Document preparation and organization",
                "Direct communication with auditor on your behalf",
                "In-person or virtual audit representation",
                "Appeals representation if needed",
                "Negotiation of audit findings"
            ],
            whoNeeds: [
                "Under IRS or state audit",
                "Document requests received",
                "Field audit scheduled",
                "Correspondence audit notice"
            ],
            cta: "Start Audit Defense",
            variant: "audit"
        },
        {
            title: "Back Tax Resolution",
            bestFor: "Multiple years unfiled, large balances, liens/levies",
            price: "Custom (typically $5,000+)",
            features: [
                "Complete account assessment",
                "Unfiled return preparation (if needed)",
                "Collection alternative analysis (OIC, installment agreement, CNC)",
                "Lien/levy release negotiation",
                "Penalty abatement requests",
                "Long-term compliance planning"
            ],
            whoNeeds: [
                "Years of unfiled returns",
                "Tax liens or levies in place",
                "Wage garnishment or bank levy",
                "Large balance owed (over $50,000)"
            ],
            cta: "Request Assessment",
            variant: "backtax"
        }
    ];

    const deliverables = [
        "Professional representation",
        "Correspondence management",
        "Penalty abatement assessment",
        "Resolution roadmap",
        "Secure document exchange",
        "Final case closure report"
    ];

    const situations = [
        { title: "Received an IRS Notice", case: "notice" },
        { title: "Being Audited", case: "audit" },
        { title: "Have Unfiled Returns", case: "unfiled" },
        { title: "Owe Back Taxes", case: "debt" },
        { title: "Payroll Tax Issues", case: "payroll" },
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
                        Resolve Your IRS Tax Problems
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto mb-10 font-light"
                    >
                        Expert representation for audits, notices, back taxes, and enforcement actions. We handle the IRS so you don't have to.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link href="/contact?service=Tax Resolution&plan=Get Help Now#form">
                            <Button size="lg" className="bg-white text-[#059669] hover:bg-blue-50 border-0 font-bold px-8 h-14 rounded-xl text-lg shadow-lg">
                                Get Help Now
                            </Button>
                        </Link>
                        <Link href="/contact?service=Tax Resolution&plan=Free Consultation#form">
                            <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 h-14 rounded-xl text-lg">
                                Free Consultation
                            </Button>
                        </Link>
                    </motion.div>
                    <div className="mt-6">
                        <Link href="/start" className="text-sm text-blue-100 hover:text-white underline underline-offset-4">
                            Not sure? Start Here
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. URGENT ALERT BAR */}
            <section className="py-6 bg-amber-50 border-y border-amber-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center gap-3 text-center">
                        <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                        <div>
                            <h3 className="font-bold text-amber-900 text-lg">Received an IRS Notice? Time Matters.</h3>
                            <p className="text-amber-700 text-sm">Response deadlines are strict. Don't wait until it's too late. We can help you understand your options and respond appropriately.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. TRUST BAR */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold text-primary mb-2">$2.5M+</div>
                            <div className="text-slate-600 font-medium">Tax Debt Resolved</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-primary mb-2">500+</div>
                            <div className="text-slate-600 font-medium">IRS Cases Handled</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-primary mb-2">98%</div>
                            <div className="text-slate-600 font-medium">Penalty Abatement Success Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PRICING OPTIONS */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">How We Can Help</h2>
                    <p className="text-slate-600 mt-2">Choose the service that matches your IRS situation</p>
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
                                {opt.price}
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {opt.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link href={`/contact?service=Tax Resolution&plan=${opt.title}#form`}>
                                <Button className={`w-full h-12 rounded-xl font-semibold text-base shadow-lg transition-all hover:-translate-y-1 ${opt.featured ? 'bg-brand-gradient hover:brightness-110' : 'bg-slate-900 hover:bg-slate-800'}`}>
                                    {opt.cta}
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 5. WHAT WE HANDLE */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Common IRS Problems We Solve</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-4">
                                <FileText className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">IRS Notices & Letters</h3>
                            <p className="text-slate-600 text-sm">CP2000, CP504, Letter 525, and all other IRS correspondence</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-4">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Audits & Examinations</h3>
                            <p className="text-slate-600 text-sm">Individual, business, and correspondence audits at federal and state levels</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-4">
                                <DollarSign className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Unpaid Taxes & Back Returns</h3>
                            <p className="text-slate-600 text-sm">Multiple years unfiled, late filing penalties, failure to pay penalties</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-4">
                                <AlertTriangle className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Levies & Liens</h3>
                            <p className="text-slate-600 text-sm">Bank levies, wage garnishments, federal tax liens, asset seizures</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-4">
                                <Handshake className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Payment Plans & Settlements</h3>
                            <p className="text-slate-600 text-sm">Installment agreements, offers in compromise, currently not collectible status</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-4">
                                <ClipboardCheck className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Penalty Abatement</h3>
                            <p className="text-slate-600 text-sm">First-time penalty abatement, reasonable cause requests, administrative waivers</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CHOOSE YOUR SITUATION */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Identify your issue</h2>
                <p className="text-center text-slate-600 mb-12">We handle everything from simple notices to complex audits.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {situations.map((sit, i) => (
                        <Link key={i} href={sit.link || `/checkout?service=tax-resolution&case=${sit.case}`}>
                            <div className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="font-bold text-slate-800 text-lg mb-2">{sit.title}</h3>
                                    <div className="h-1 w-12 bg-slate-100 group-hover:bg-primary transition-colors rounded-full mb-4"></div>
                                </div>
                                <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                                    Resolve Now <ArrowRight className="ml-2 w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* 6. PROCESS */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16">How Tax Resolution Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-slate-700 z-0"></div>

                        {[
                            { title: "Free Consultation", desc: "We review your situation, notices, and IRS account status at no cost or obligation." },
                            { title: "Case Strategy", desc: "We develop a resolution strategy and provide transparent pricing for your specific situation." },
                            { title: "Power of Attorney", desc: "We file Form 2848 to represent you directly with the IRS. You no longer have to deal with them." },
                            { title: "Resolution", desc: "We handle all communication, negotiate on your behalf, and work toward the best possible outcome." }
                        ].map((step, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-brand-gradient flex items-center justify-center text-2xl font-bold shadow-lg shadow-blue-500/20 mb-6 border-4 border-slate-800">
                                    {i + 1}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-sm text-slate-300 max-w-xs">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. FAQ */}
            <section className="py-24 max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">FAQ</h2>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What happens if I ignore an IRS notice?</AccordionTrigger>
                        <AccordionContent>
                            Ignoring IRS notices escalates the situation. The IRS can assess additional penalties, file liens, levy your bank accounts, or garnish wages. Every notice has a response deadline—it's critical to act quickly.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Can you stop a wage garnishment or bank levy?</AccordionTrigger>
                        <AccordionContent>
                            Yes. We can request levy releases and negotiate alternative collection methods like installment agreements. Time is critical—contact us immediately if you've received a levy notice.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What is an Offer in Compromise?</AccordionTrigger>
                        <AccordionContent>
                            An OIC allows you to settle your tax debt for less than the full amount owed if you meet specific financial hardship criteria. We evaluate your eligibility and prepare the application if appropriate.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>How long does tax resolution take?</AccordionTrigger>
                        <AccordionContent>
                            Simple notice responses: 2-4 weeks. Audits: 3-6 months. Complex resolution (OIC, multiple years): 6-12 months. Timeline varies based on IRS workload and case complexity.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Do I need to speak with the IRS myself?</AccordionTrigger>
                        <AccordionContent>
                            No. Once we file Power of Attorney (Form 2848), all IRS communication goes through us. You won't need to speak with IRS agents directly.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>What if I haven't filed taxes in years?</AccordionTrigger>
                        <AccordionContent>
                            We can prepare prior-year returns and negotiate resolution for both filing and payment obligations. The IRS typically requires 6 years of back returns before considering collection alternatives.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            {/* 8. FINAL CTA */}
            <section className="py-24 bg-brand-gradient text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-4">Don't Face the IRS Alone</h2>
                    <p className="text-blue-100 text-lg mb-8">Get expert representation and peace of mind. Free consultation, no obligation.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/contact?service=Tax Resolution&plan=Get Help Now#form">
                            <Button size="lg" className="bg-white text-[#059669] hover:bg-blue-50 border-0 font-bold px-10 h-14 rounded-xl text-lg shadow-xl hover:-translate-y-1 transition-all">
                                Get Help Now
                            </Button>
                        </Link>
                        <Link href="/contact?service=Tax Resolution&plan=Free Consultation#form">
                            <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-10 h-14 rounded-xl text-lg backdrop-blur-sm">
                                Free Consultation
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
