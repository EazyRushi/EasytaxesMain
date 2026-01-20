import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, FileText, Globe, Calculator, Briefcase, Building2, CheckCircle2, Quote, Award, Lock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceCard } from "@/components/ui/service-card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdfd] text-[#0f172a] font-sans selection:bg-emerald-500/10">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[65vh] md:min-h-screen flex items-center justify-center text-center pt-4 md:pt-0 bg-white relative overflow-hidden px-4">
        
        <div className="hero-wave-bg">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path className="wave-line" d="M0,160 C320,300 420,0 720,160 C1020,320 1120,20 1440,160" stroke="rgba(63, 185, 203, 0.08)" strokeWidth="1" fill="none"></path>
            <path className="wave-line" d="M0,170 C320,310 420,10 720,170 C1020,330 1120,30 1440,170" stroke="rgba(63, 185, 203, 0.08)" strokeWidth="1" fill="none"></path>
            <path className="wave-line" d="M0,180 C320,320 420,20 720,180 C1020,340 1120,40 1440,180" stroke="rgba(63, 185, 203, 0.08)" strokeWidth="1" fill="none"></path>
            <path className="wave-line" d="M0,190 C320,330 420,30 720,190 C1020,350 1120,50 1440,190" stroke="rgba(63, 185, 203, 0.08)" strokeWidth="1" fill="none"></path>
            <path className="wave-line" d="M0,200 C320,340 420,40 720,200 C1020,360 1120,60 1440,200" stroke="rgba(63, 185, 203, 0.08)" strokeWidth="1" fill="none"></path>
          </svg>
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto">
          <div className="hero-content-centered">
            <div className="flex justify-center items-center flex-wrap gap-x-3 sm:gap-x-5 gap-y-2 text-xs sm:text-[0.85rem] font-bold text-slate-400 uppercase tracking-widest mb-6">
              <span>IRS-certified professionals</span>
              <span className="text-[#3FB9CB] font-black">·</span>
              <span>5,000+ returns filed</span>
              <span className="text-[#3FB9CB] font-black">·</span>
              <span>US compliance expertise</span>
            </div>
            <h1 className="text-[2.5rem] leading-[1.1] sm:text-6xl md:text-7xl lg:text-[5rem] font-black tracking-tight text-slate-900 font-sans mb-6" style={{ fontWeight: 900, WebkitTextStroke: '0.5px currentColor' }}>
              Clarity. Control. <span className="font-serif text-[#3FB9CB] not-italic tracking-wide">Accountability.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-[1.4rem] text-slate-500 max-w-[650px] mx-auto leading-relaxed mb-8 md:mb-12">
              File U.S. taxes accurately. Maximize refunds. Zero stress.
            </p>
            <div className="flex flex-col items-center mt-8 md:mt-12">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-6 justify-center w-full sm:w-auto">
                <Link href="/start" className="btn btn-primary btn-xl btn-hero-main highlight-confidence w-full sm:w-auto">
                  Start Here
                </Link>
              </div>
              <p className="text-sm text-slate-400 font-medium">Takes only 2 minutes</p>

              <div className="scroll-down-container mt-12 mb-0 flex md:flex">
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl text-slate-600 leading-relaxed">
            Eazytaxes Inc. is a US-based professional services firm offering tax, compliance, assurance, and advisory services to businesses and individuals.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#f8fafc] dark:bg-black/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-[0.85rem] mb-4">Choose the area you need support with</h2>
          </div>

          <div className="services-grid">
            {[
              {
                title: "Tax & Compliance",
                description: "US tax filings and compliance matters for individuals and businesses.",
                icon: <FileText className="w-6 h-6" />,
                href: "/tax-compliance",
                isExternal: false,
                featured: true
              },
              {
                title: "Tax Resolution",
                description: "IRS and state notices, audits, and enforcement-related matters.",
                icon: <ShieldCheck className="w-6 h-6" />,
                href: "/tax-resolution",
                isExternal: false
              },
              {
                title: "Assurance & SOC 2",
                description: "SOC 2 engagements and related assurance requirements.",
                icon: <CheckCircle2 className="w-6 h-6" />,
                href: "/assurance-soc2",
                isExternal: false
              },
              {
                title: "CFO & Advisory",
                description: "Financial oversight and advisory support.",
                icon: <Briefcase className="w-6 h-6" />,
                href: "/cfo-advisory",
                isExternal: false
              },
              {
                title: "Valuations (409A)",
                description: "Equity and compliance-related valuations.",
                icon: <Calculator className="w-6 h-6" />,
                href: "/valuations",
                isExternal: false
              },
              {
                title: "US Formation & Banking",
                description: "US entity formation, EIN, and banking assistance.",
                icon: <Building2 className="w-6 h-6" />,
                href: "/us-formation",
                isExternal: false
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          {/* Global CTA under services grid */}
          <div className="text-center mt-16">
            <p className="text-lg text-slate-600 mb-4">Not sure which service applies?</p>
            <Link href="/start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8">
                Start Here
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Credentials / Positioning Strip */}
      <section className="py-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-slate-500">
            US-based professional services firm · Cross-border and domestic matters · Project-based and ongoing engagements
          </p>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Who we work with</h2>
          <ul className="space-y-4 text-lg text-slate-600">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span>Founders and owner-led businesses</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span>Growing companies with US operations</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span>Cross-border individuals and families</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span>Teams requiring ongoing compliance or advisory support</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Engagements</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">One-time engagements</h3>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Ongoing advisory relationships</h3>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Project-based and recurring work</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Jurisdiction / Scope Line */}
      <section className="py-8 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-slate-500">
            US regulatory and advisory work for domestic and international clients.
          </p>
        </div>
      </section>

      {/* Benefits / Why Us */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2072"
                alt="Professional Workspace"
                className="rounded-lg shadow-2xl w-full object-cover h-64 sm:h-96 lg:h-[600px]"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-8">
                Uncompromising Professionalism in Every Engagement
              </h2>
              <div className="space-y-10">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Maximum Security</h4>
                    <p className="text-slate-600">State-of-the-art document encryption and secure data handling for total peace of mind.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Global Perspective</h4>
                    <p className="text-slate-600">Specialized in cross-border tax issues and international corporate structures.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Clarity & Precision</h4>
                    <p className="text-slate-600">Detailed reporting and transparent communication throughout the entire process.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-12 h-12 text-primary/30 mx-auto mb-10" />
          <h2 className="text-3xl font-bold mb-16">Trusted by Forward-Thinking Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {[
              {
                text: "Eazytaxes has been instrumental in managing our US compliance while we focus on our global product launch. Their expertise is unmatched.",
                role: "Tech CEO",
                company: "Series B Startup",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100"
              },
              {
                text: "The strategic advisory services helped us navigate complex cross-border tax implications during our expansion. Highly recommended.",
                role: "Founder",
                company: "Fintech Scale-up",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100"
              },
              {
                text: "Reliable, precise, and proactive. They handled our multi-state nexus issues with ease. A true partner for growth.",
                role: "CFO",
                company: "E-commerce Brand",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 relative group hover:shadow-md transition-all">
                <div className="text-primary mb-6">
                  <Quote className="w-8 h-8 fill-current opacity-20" />
                </div>
                <p className="text-slate-600 mb-8 italic relative z-10">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.role} className="w-12 h-12 rounded-full object-cover border-2 border-slate-100" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{testimonial.role}</div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#0f172a] text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="relative max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to proceed?</h2>
          <div className="flex justify-center">
            <Link href="/start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-12 h-14 rounded-md text-lg">
                Start Here
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
