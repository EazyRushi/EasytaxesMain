import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowRight, FileText, ClipboardCheck, ShieldCheck, BarChart3, FileCheck, Users, Clock, DollarSign } from "lucide-react";
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
            title: "Compilation",
            bestFor: "Internal use, basic financial reporting needs",
            price: "From $3,500",
            whatItIs: "We present your financial information in the form of financial statements without providing any assurance on the accuracy.",
            features: [
                "Financial statement preparation",
                "Management representation letter",
                "Compilation report (no assurance provided)",
                "Basic financial statement formatting",
                "References to accounting framework used"
            ],
            whoNeeds: [
                "Early-stage companies",
                "Businesses with basic reporting requirements",
                "Organizations needing formatted financials without audit requirement"
            ],
            cta: "Start Compilation",
            variant: "compilation"
        },
        {
            title: "Review",
            bestFor: "Lenders, investors requiring moderate assurance",
            price: "From $8,500",
            whatItIs: "We perform analytical procedures and inquiries to provide limited assurance that no material modifications are needed to your financial statements.",
            featured: true,
            features: [
                "Financial statement review procedures",
                "Analytical procedures and inquiries",
                "Review report with limited assurance",
                "Management representation letter",
                "Discussion of any required adjustments"
            ],
            whoNeeds: [
                "Companies seeking bank financing",
                "Private equity portfolio companies",
                "Businesses with investor reporting requirements",
                "Organizations transitioning from compilation to audit"
            ],
            cta: "Start Review",
            variant: "review"
        },
        {
            title: "Audit",
            bestFor: "Highest level of assurance, regulatory requirements",
            price: "From $15,000",
            whatItIs: "We perform extensive testing and verification procedures to provide reasonable assurance that financial statements are free from material misstatement.",
            features: [
                "Comprehensive audit procedures and testing",
                "Internal control evaluation",
                "Third-party confirmations",
                "Substantive testing of account balances",
                "Audit opinion on financial statements",
                "Management letter with recommendations"
            ],
            whoNeeds: [
                "Companies with debt covenants requiring audits",
                "Businesses preparing for sale or acquisition",
                "Organizations with regulatory audit requirements",
                "Companies seeking significant outside investment"
            ],
            cta: "Request Audit Proposal",
            variant: "audit"
        }
    ];

    const deliverables = [
        { icon: <FileText />, title: "Engagement Planning", desc: "Upfront scoping and timeline discussion to align expectations and deliverables" },
        { icon: <ShieldCheck />, title: "Fieldwork Execution", desc: "Efficient testing procedures with minimal disruption to your daily operations" },
        { icon: <Users />, title: "Direct Communication", desc: "Regular updates throughout the engagement with a dedicated engagement manager" },
        { icon: <FileCheck />, title: "Draft Review", desc: "Collaborative review of draft financial statements before finalization" },
        { icon: <Check />, title: "Final Deliverables", desc: "Formal report with opinion/conclusion and professionally formatted financial statements" },
        { icon: <BarChart3 />, title: "Management Insights", desc: "Recommendations for improving controls, processes, or financial reporting (audit only)" }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* 1. HERO */}
            <section className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] py-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5 pattern-grid-lg opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                    >
                        Financial Statement Assurance You Can Trust
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto mb-10 font-light"
                    >
                        Independent audits, reviews, and compilations for businesses seeking credibility with lenders, investors, and stakeholders.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a href="#pricing">
                            <Button size="lg" className="bg-white text-[#1e3a8a] hover:bg-blue-50 border-0 font-bold px-8 h-14 rounded-xl text-lg shadow-lg">
                                Get Started
                            </Button>
                        </a>
                        <Link href="/contact?service=Assurance#form">
                            <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 h-14 rounded-xl text-lg">
                                Schedule a Consultation
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 2. TRUST BAR */}
            <section className="py-16 bg-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold text-[#3b82f6] mb-2">200+</div>
                            <div className="text-slate-600 font-medium">Audits & Reviews Completed</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-[#3b82f6] mb-2">15 Years</div>
                            <div className="text-slate-600 font-medium">Combined Team Experience</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-[#3b82f6] mb-2">Zero</div>
                            <div className="text-slate-600 font-medium">Qualified Opinions Issued</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. PRICING */}
            <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Assurance Engagement Options</h2>
                    <p className="text-slate-600 mt-2">Choose the level of assurance appropriate for your stakeholders' requirements</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {pricingOptions.map((opt, i) => (
                        <motion.div
                            key={opt.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative bg-white rounded-2xl p-8 border ${opt.featured ? 'border-[#3b82f6] ring-2 ring-[#3b82f6]/20 shadow-xl scale-105 z-10' : 'border-slate-100 shadow-md'} flex flex-col`}
                        >
                            {opt.featured && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                                    Most Common
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{opt.title}</h3>
                            <p className="text-sm text-slate-500 mb-4">{opt.bestFor}</p>

                            <div className="text-3xl font-bold text-slate-900 mb-4">
                                {opt.price}
                            </div>

                            <div className="mb-6">
                                <p className="text-sm font-semibold text-slate-700 mb-2">What it is:</p>
                                <p className="text-sm text-slate-600">{opt.whatItIs}</p>
                            </div>

                            <div className="mb-6">
                                <p className="text-sm font-semibold text-slate-700 mb-3">Includes:</p>
                                <ul className="space-y-2">
                                    {opt.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                            <Check className="w-4 h-4 text-[#3b82f6] flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-8 flex-grow">
                                <p className="text-sm font-semibold text-slate-700 mb-3">Who needs this:</p>
                                <ul className="space-y-1 text-sm text-slate-600">
                                    {opt.whoNeeds.map((need, idx) => (
                                        <li key={idx}>• {need}</li>
                                    ))}
                                </ul>
                            </div>

                            <Link href={`/contact?service=Assurance&plan=${opt.title}#form`}>
                                <Button className={`w-full h-12 rounded-xl font-semibold text-base shadow-lg transition-all hover:-translate-y-1 ${opt.featured ? 'bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] hover:brightness-110' : 'bg-slate-900 hover:bg-slate-800'}`}>
                                    {opt.cta}
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 4. WHAT'S INCLUDED */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">What to Expect from Our Assurance Engagements</h2>
                    <p className="text-center text-slate-600 mb-12">Professional, efficient engagements designed to minimize disruption to your business</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {deliverables.map((item, i) => (
                            <div key={i} className="text-center p-6">
                                <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center text-[#3b82f6] mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. PROCESS */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">How Our Assurance Process Works</h2>
                    <p className="text-center text-slate-600 mb-16">Transparent, collaborative approach from start to finish</p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-slate-300 z-0"></div>

                        {[
                            { title: "Engagement Planning", desc: "We discuss scope, timing, materiality levels, and information needs. You receive a detailed engagement letter outlining deliverables." },
                            { title: "Information Request", desc: "We provide a comprehensive PBC (Provided by Client) list. You gather supporting documentation and financial records." },
                            { title: "Fieldwork & Testing", desc: "We perform procedures appropriate to the engagement type (compilation/review/audit) and communicate any questions or findings in real-time." },
                            { title: "Report Delivery", desc: "You receive the final assurance report, formatted financial statements, and management letter (if applicable)." }
                        ].map((step, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] flex items-center justify-center text-2xl font-bold shadow-lg text-white mb-6 border-4 border-white">
                                    {i + 1}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-sm text-slate-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. COMPARISON TABLE */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Compilation vs. Review vs. Audit</h2>
                    <p className="text-center text-slate-600 mb-12">Understanding the differences in scope and assurance level</p>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
                            <thead>
                                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white">
                                    <th className="p-4 text-left font-bold">Feature</th>
                                    <th className="p-4 text-center font-bold">Compilation</th>
                                    <th className="p-4 text-center font-bold">Review</th>
                                    <th className="p-4 text-center font-bold">Audit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Assurance Level", "None", "Limited", "Reasonable"],
                                    ["Testing Procedures", "None", "Analytical + Inquiries", "Extensive Testing"],
                                    ["Internal Control Review", "No", "No", "Yes"],
                                    ["Third-Party Confirmations", "No", "No", "Yes"],
                                    ["Management Letter", "No", "Optional", "Yes"],
                                    ["Typical Timeline", "2-3 weeks", "3-5 weeks", "6-10 weeks"],
                                    ["Starting Price", "$3,500", "$8,500", "$15,000"],
                                    ["Common Use Cases", "Basic reporting", "Lender requirements", "Regulatory/Investor requirements"]
                                ].map((row, i) => (
                                    <tr key={i} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                                        <td className="p-4 font-semibold text-slate-700 border-t border-slate-200">{row[0]}</td>
                                        <td className="p-4 text-center text-slate-600 border-t border-slate-200">{row[1]}</td>
                                        <td className="p-4 text-center text-slate-600 border-t border-slate-200">{row[2]}</td>
                                        <td className="p-4 text-center text-slate-600 border-t border-slate-200">{row[3]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 7. WHO NEEDS ASSURANCE */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Who Needs Assurance Services?</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Common Scenarios:</h3>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#3b82f6] shrink-0 mt-1" />
                                    <span>Businesses seeking bank loans or lines of credit</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#3b82f6] shrink-0 mt-1" />
                                    <span>Companies with investor reporting obligations</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#3b82f6] shrink-0 mt-1" />
                                    <span>Organizations preparing for sale or acquisition</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#3b82f6] shrink-0 mt-1" />
                                    <span>Entities with debt covenants requiring financial statement audits</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#3b82f6] shrink-0 mt-1" />
                                    <span>Nonprofits with grant requirements or donor expectations</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Industry Applications:</h3>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#3b82f6] shrink-0 mt-1" />
                                    <span>Private equity portfolio companies</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#3b82f6] shrink-0 mt-1" />
                                    <span>SaaS and technology businesses</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#3b82f6] shrink-0 mt-1" />
                                    <span>Manufacturing and distribution companies</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#3b82f6] shrink-0 mt-1" />
                                    <span>Professional services firms</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#3b82f6] shrink-0 mt-1" />
                                    <span>Real estate holding companies</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FAQ */}
            <section className="py-24 max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How do I know which service I need?</AccordionTrigger>
                        <AccordionContent>
                            It depends on your stakeholders' requirements. Banks typically require reviews or audits. Early-stage companies often start with compilations. If you're unsure, <a href="#" className="text-[#3b82f6] hover:underline">schedule a consultation</a> and we'll help you determine the appropriate engagement level based on your specific situation.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How long does an assurance engagement take?</AccordionTrigger>
                        <AccordionContent>
                            Compilations typically take 2-3 weeks, reviews 3-5 weeks, and audits 6-10 weeks from information request to final report delivery. Timeline depends on your responsiveness to information requests and complexity of your financials.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What financial statements are included?</AccordionTrigger>
                        <AccordionContent>
                            Standard engagements include Balance Sheet, Income Statement, Statement of Cash Flows, and footnote disclosures. We prepare statements in accordance with US GAAP or other applicable accounting frameworks.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Do you handle nonprofit audits or single audits?</AccordionTrigger>
                        <AccordionContent>
                            Yes. We perform audits for nonprofit organizations, including single audits (Uniform Guidance) for entities with federal grant expenditures over $750,000. Pricing varies based on grant complexity.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Can you audit our internal controls (SOX compliance)?</AccordionTrigger>
                        <AccordionContent>
                            While we don't perform SOX 404 attestations (public company requirement), we do evaluate internal controls as part of financial statement audits and can provide management letters with control recommendations. For SOC 2 compliance, see our <Link href="/risk-advisory" className="text-[#3b82f6] hover:underline">Risk Advisory services</Link>.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>What if we have complex accounting issues?</AccordionTrigger>
                        <AccordionContent>
                            We handle revenue recognition (ASC 606), lease accounting (ASC 842), stock-based compensation, and other technical areas. Complex situations may require additional scoping, which we discuss during engagement planning.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>Do you work with our existing accounting team?</AccordionTrigger>
                        <AccordionContent>
                            Yes. We collaborate directly with your CFO, controller, or accounting staff throughout the engagement. We aim to be an extension of your team, not a disruption.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            {/* 9. FINAL CTA */}
            <section className="py-24 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-4">Ready to Begin Your Assurance Engagement?</h2>
                    <p className="text-blue-100 text-lg mb-8">Get the credibility and confidence your stakeholders expect.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#pricing">
                            <Button size="lg" className="bg-white text-[#1e3a8a] hover:bg-blue-50 border-0 font-bold px-10 h-14 rounded-xl text-lg shadow-xl hover:-translate-y-1 transition-all">
                                Get Started
                            </Button>
                        </a>
                        <Link href="/contact?service=Assurance#form">
                            <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-10 h-14 rounded-xl text-lg backdrop-blur-sm">
                                Schedule Consultation
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
