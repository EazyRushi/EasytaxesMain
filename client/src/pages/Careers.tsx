import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, ArrowRight, Zap } from "lucide-react";

export default function Careers() {
    const positions = [
        { title: "Senior Tax Manager", type: "Full-time", loc: "Remote (US)", dept: "Tax Compliance" },
        { title: "Audit Associate", type: "Full-time", loc: "New York, NY", dept: "Assurance" },
        { title: "Client Success Manager", type: "Full-time", loc: "Remote", dept: "Operations" },
        { title: "Marketing Specialist", type: "Contract", loc: "Remote", dept: "Growth" }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* Hero */}
            <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6"
                    >
                        <Zap className="w-4 h-4" /> We're Hiring!
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                    >
                        Join the Eazytaxes Team
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 font-light">
                        Help us build the future of financial services. Work with top talent on challenging problems.
                    </p>
                    <Button size="lg" className="bg-[#059669] hover:bg-[#047857] text-white font-bold px-8 h-14 rounded-full text-lg">
                        View Openings
                    </Button>
                </div>
            </section>

            {/* Values / Why Join */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                alt="Team working"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why work with us?</h2>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Remote-First Culture</h4>
                                    <p className="text-slate-600">Work from where you're most productive. We value output over hours.</p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Competitive Compensation</h4>
                                    <p className="text-slate-600">Top-tier salary, equity packages, and comprehensive benefits.</p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Growth & Learning</h4>
                                    <p className="text-slate-600">Annual stipends for courses, conferences, and professional development.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Roles */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Open Positions</h2>
                    <div className="space-y-4">
                        {positions.map((pos, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row justify-between items-center group cursor-pointer">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">{pos.title}</h3>
                                    <div className="flex gap-4 text-sm text-slate-500 mt-1">
                                        <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {pos.dept}</span>
                                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {pos.loc}</span>
                                        <span>{pos.type}</span>
                                    </div>
                                </div>
                                <div className="mt-4 sm:mt-0">
                                    <Button variant="outline" className="group-hover:bg-emerald-50 group-hover:text-emerald-700 group-hover:border-emerald-200">
                                        Apply <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
