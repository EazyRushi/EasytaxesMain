import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Users, Target, Heart, Award } from "lucide-react";

export default function AboutUs() {
    const team = [
        { name: "Sarah Johnson", role: "Managing Partner", bio: "Former Big 4 Director with 15+ years in corporate tax." },
        { name: "Michael Chen", role: "Head of Advisory", bio: "Specializes in M&A due diligence and valuation services." },
        { name: "Elena Rodriguez", role: "Tax Resolution Lead", bio: "Expert in negotiating complex settlements with the IRS." }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* Hero */}
            <section className="bg-brand-gradient py-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5 pattern-grid-lg opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                    >
                        Our Mission & Team
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto mb-10 font-light">
                        Redefining the standard of tax and financial advisory through transparency and expertise.
                    </p>
                </div>
            </section>

            {/* Mission Values */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                        <Target className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Precision</h3>
                        <p className="text-slate-600">We believe in accuracy above all. Every number matters.</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                        <Heart className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Client-Centric</h3>
                        <p className="text-slate-600">Your financial health and peace of mind are our top priorities.</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                        <Award className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Excellence</h3>
                        <p className="text-slate-600">We strive for the highest standards in professional service.</p>
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Leadership Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {team.map((member, i) => (
                            <div key={i} className="group text-center">
                                <div className="w-48 h-48 mx-auto bg-slate-200 rounded-full mb-6 overflow-hidden">
                                    <Users className="w-full h-full p-12 text-slate-400" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
                                <div className="text-emerald-600 font-medium mb-3">{member.role}</div>
                                <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
