import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceCard } from "@/components/ui/service-card";
import { ArrowRight, ShieldCheck, FileText, Calculator, Briefcase, Building2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StartHere() {
  const services = [
    {
      title: "Tax & Compliance",
      description: "US tax filing for individuals & businesses.",
      icon: <FileText className="w-6 h-6" />,
      href: "/tax-compliance",
      isExternal: false
    },
    {
      title: "Tax Resolution",
      description: "IRS audit representation & notice response.",
      icon: <ShieldCheck className="w-6 h-6" />,
      href: "/tax-resolution",
      isExternal: false
    },
    {
      title: "Assurance & SOC 2",
      description: "Audits, reviews, and compliance reports.",
      icon: <CheckCircle2 className="w-6 h-6" />,
      href: "/assurance-soc2",
      isExternal: false
    },
    {
      title: "CFO & Advisory",
      description: "Strategic planning and financial leadership.",
      icon: <Briefcase className="w-6 h-6" />,
      href: "/cfo-advisory",
      isExternal: false
    },
    {
      title: "Valuations",
      description: "409A valuations for equity compensation.",
      icon: <Calculator className="w-6 h-6" />,
      href: "/valuations",
      isExternal: false
    },
    {
      title: "Formation & Banking",
      description: "Launch your US entity and bank accounts.",
      icon: <Building2 className="w-6 h-6" />,
      href: "/us-formation",
      isExternal: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-grow py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
            >
              Start Here
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600"
            >
              Choose the area you need support with today.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Not sure where to start?</h3>
            <p className="text-slate-500 mb-6">Our team can help direct you to the right service for your specific situation.</p>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="rounded-full px-8 border-primary text-primary hover:bg-primary/5">
                Contact Support <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
