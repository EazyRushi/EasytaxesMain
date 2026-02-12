import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, FileText, Globe, Calculator, Briefcase, Building2, CheckCircle2, Award, Lock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceCard } from "@/components/ui/service-card";
import { HeroBackground } from "@/components/ui/hero-background";
import { WorldMap } from "@/components/ui/world-map";
import React from "react";

export default function Home() {
  const [currentTagline, setCurrentTagline] = React.useState(0);

  const taglines = [
    "Eazytaxes turned complexity into clarity. Their expertise is exceptional.",
    "Responsive, thoughtful, and extremely reliable — highly recommend.",
    "Professional, clear, and practical in every engagement."
  ];

  const testimonialAuthors = [
    "CEO, Growth Startup",
    "Finance Leader, Global Company",
    "CFO, Technology Firm"
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdfd] text-[#0f172a] font-sans selection:bg-emerald-500/10">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-0 md:min-h-screen flex items-center justify-center text-center pt-32 md:pt-0 pb-12 md:pb-0 relative overflow-hidden px-4">


        <HeroBackground />

        <div className="container relative z-10 max-w-7xl mx-auto">
          <div className="hero-content-centered flex flex-col items-center mt-6 md:-mt-16">
            <h1 className="text-[3rem] leading-[1.1] sm:text-6xl md:text-7xl lg:text-[5rem] font-black tracking-tight text-slate-900 font-sans mb-6 sm:mb-8" style={{ fontWeight: 900, WebkitTextStroke: '0.5px currentColor' }}>
              <span className="block sm:inline">Clarity. Control.</span>{' '}
              <span className="block sm:inline font-serif text-[#3FB9CB] not-italic tracking-wide">Accountability.</span>
            </h1>

            {/* Animation placeholder - visible on mobile between heading and description */}
            <div className="mt-2 mb-6 sm:hidden h-12 flex items-center justify-center">
              {/* The HeroBackground animation will be visible here */}
            </div>

            {/* Intro block */}
            <p className="text-lg md:text-xl text-slate-900 max-w-3xl mx-auto font-normal mt-6 sm:mt-8 mb-10 sm:mb-14">
              Eazytaxes Inc. is a US-based professional services firm offering tax, compliance, assurance, and advisory services to businesses and individuals.
            </p>

            <div className="flex flex-col items-center">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 justify-center w-full sm:w-auto">
                <a href="#start-here" className="btn btn-primary btn-xl btn-hero-main highlight-confidence w-full sm:w-auto">
                  Get Started
                </a>
              </div>

              <div className="scroll-down-container mt-6 mb-0 flex md:flex">
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Here Section - Premium Design */}
      <section id="start-here" className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>

        {/* Left Adidas Stripes */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 opacity-20">
          <div className="w-32 h-2 bg-[#3FB9CB] transform -rotate-45 origin-left"></div>
          <div className="w-40 h-2 bg-[#3FB9CB] transform -rotate-45 origin-left"></div>
          <div className="w-48 h-2 bg-[#3FB9CB] transform -rotate-45 origin-left"></div>
        </div>

        {/* Right Adidas Stripes */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 opacity-20 items-end">
          <div className="w-32 h-2 bg-[#3FB9CB] transform rotate-45 origin-right"></div>
          <div className="w-40 h-2 bg-[#3FB9CB] transform rotate-45 origin-right"></div>
          <div className="w-48 h-2 bg-[#3FB9CB] transform rotate-45 origin-right"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                Services
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light">
                Choose the service that fits your needs
              </p>
            </motion.div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10 max-w-4xl mx-auto px-2 sm:px-0">
            {[
              {
                title: "Tax & Compliance",
                description: "US tax filing for individuals & businesses.",
                icon: <FileText className="w-6 h-6" />,
                href: "/ustax",
              },
              {
                title: "Tax Resolution",
                description: "IRS audit representation & notice response.",
                icon: <ShieldCheck className="w-6 h-6" />,
                href: "/tax-resolution",
              },
              {
                title: "Assurance & SOC 2",
                description: "Audits, reviews, and compliance reports.",
                icon: <CheckCircle2 className="w-6 h-6" />,
                href: "/assurance-soc2",
              },
              {
                title: "CFO & Advisory",
                description: "Strategic planning and financial leadership.",
                icon: <Briefcase className="w-6 h-6" />,
                href: "/cfo-advisory",
              },
              {
                title: "Valuations",
                description: "409A valuations for equity compensation.",
                icon: <Calculator className="w-6 h-6" />,
                href: "/valuations",
              },
              {
                title: "Formation & Banking",
                description: "Launch your US entity and bank accounts.",
                icon: <Building2 className="w-6 h-6" />,
                href: "/us-formation",
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <div className="p-4 sm:p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all group cursor-pointer h-full flex flex-col items-center justify-center text-center aspect-auto sm:aspect-square">
                    <div className="text-[#3FB9CB] mb-3 sm:mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-sm sm:text-base md:text-xl font-bold text-slate-900 mb-1 sm:mb-2 group-hover:text-[#3FB9CB] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-xs md:text-base leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Section 6 — Credentials / Positioning Strip */}
          <div className="text-center mb-16">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-400/80 font-medium">
              US-based professional services firm <span className="mx-2 md:mx-4 opacity-30">·</span>
              Cross-border and domestic matters <span className="mx-2 md:mx-4 opacity-30">·</span>
              Project-based and ongoing engagements
            </p>
          </div>

          {/* Streamlined Help CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#3FB9CB]" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-slate-900">Not sure where to start?</h4>
                  <p className="text-slate-500 text-sm">Our expert team can direct you to the right service for your specific situation.</p>
                </div>
              </div>
              <Link href="/contact">
                <Button className="bg-[#3FB9CB] hover:bg-[#34a0b0] text-white font-bold px-8 py-5 rounded-full text-sm shadow-sm transition-all hover:scale-105 whitespace-nowrap">
                  Get Guidance <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          {/* Section Header */}
          <div className="mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-widest text-slate-400 mb-4">ABOUT US</p>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 md:mb-10 tracking-tight leading-tight max-w-3xl">
                A long-term partner, built around trust, clarity, and meaningful involvement.
              </h2>

              <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
                <div>
                  <div className="text-5xl md:text-6xl font-black text-slate-900 mb-2">50+</div>
                  <p className="text-sm text-slate-500">
                    professionals across tax, accounting, advisory, and client success.
                  </p>
                </div>
                <div>
                  <div className="mt-12 mb-6 min-h-[80px] flex items-center">
                    <div>
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-2 italic">
                        "{taglines[currentTagline]}"
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        — {testimonialAuthors[currentTagline]}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" alt="Executive" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover" />
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces" alt="Finance Leader" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover" />
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=faces" alt="CFO" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover" />
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setCurrentTagline((prev) => (prev - 1 + taglines.length) % taglines.length)}
                        className="text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        &lt;
                      </button>
                      <span className="text-xs text-slate-600">{currentTagline + 1}/3</span>
                      <button
                        onClick={() => setCurrentTagline((prev) => (prev + 1) % taglines.length)}
                        className="text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        &gt;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Who We Work With Section (Section 7 & 8) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 md:mb-32 mt-20 md:mt-28"
          >
            {/* Mobile: Show heading first */}
            <div className="md:hidden mb-8">
              <p className="text-xs uppercase tracking-widest text-[#3FB9CB] font-bold mb-4">WHO WE WORK WITH</p>
              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                Tailored support for every growth stage.
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              {/* Content - Shows second on mobile, first on desktop */}
              <div className="order-2 md:order-1">
                {/* Desktop: Show heading here */}
                <div className="hidden md:block">
                  <p className="text-xs uppercase tracking-widest text-[#3FB9CB] font-bold mb-4">WHO WE WORK WITH</p>
                  <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                    Tailored support for every growth stage.
                  </h3>
                </div>

                <div className="space-y-8">
                  {/* Section 7 - Client Types */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Clients</h4>
                    <ul className="space-y-3">
                      {[
                        "Founders and owner-led businesses",
                        "Growing companies with US operations",
                        "Cross-border individuals and families",
                        "Teams requiring ongoing compliance or advisory support"
                      ].map((text, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#3FB9CB]"></div>
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 8 - Engagement Types */}
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Engagements</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "One-time engagements",
                        "Ongoing advisory relationships",
                        "Project-based and recurring work",
                        "Retainer arrangements"
                      ].map((text, i) => (
                        <div key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100/50">
                          <CheckCircle2 className="w-4 h-4 text-[#3FB9CB]" />
                          <span className="text-xs md:text-sm text-slate-600 font-semibold">{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Image - Shows first on mobile (after heading), second on desktop */}
              <div className="relative order-1 md:order-2 max-w-lg mx-auto">
                <div
                  className="relative overflow-hidden shadow-2xl z-10"
                  style={{
                    borderRadius: '60% 40% 40% 60% / 60% 60% 40% 40%',
                    aspectRatio: '1/1'
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                    alt="Professional team working"
                    className="w-full h-full object-cover"
                  />
                  {/* Red line top */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                  {/* Red line bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                </div>
                {/* Decorative blob */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#3FB9CB]/10 rounded-full blur-2xl -z-10"></div>
              </div>
            </div>
          </motion.div>

          {/* Uncompromising Professionalism Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
              {/* Image */}
              <div
                className="order-2 md:order-1 relative overflow-hidden shadow-2xl z-10 w-full"
                style={{
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  aspectRatio: '1/1',
                  maxHeight: '350px'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
                  alt="Tax documents and calculator"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="order-1 md:order-2">
                <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                  Uncompromising Professionalism in Every Engagement
                </h3>

                <div className="space-y-4 md:space-y-5">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
                      <Lock className="w-5 h-5 md:w-6 md:h-6 text-[#3FB9CB]" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">Maximum Security</h4>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                        State-of-the-art document encryption and secure data handling for total peace of mind.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
                      <Globe className="w-5 h-5 md:w-6 md:h-6 text-[#3FB9CB]" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">Global Perspective</h4>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                        Specialized in cross-border tax issues and international corporate structures.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#3FB9CB]" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">Clarity & Precision</h4>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                        Detailed reporting and transparent communication throughout every engagement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* World Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 md:mt-24"
          >
            <WorldMap />
          </motion.div>
        </div>
      </section>



      {/* Final CTA */}
      <section className="py-20 bg-slate-50 text-slate-900 text-center relative overflow-hidden border-t border-slate-200">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-100/30 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[80px]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 z-10">
          {/* Section 9 - Jurisdiction / Scope Line */}
          <div className="mb-8">
            <p className="text-[10px] md:text-xs uppercase tracking-widest text-slate-400 font-bold">
              US regulatory and advisory work for domestic and international clients.
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Ready to <span className="text-[#3FB9CB]">scale your business?</span>
          </h2>
          <p className="text-xl text-slate-700 mb-10 max-w-2xl mx-auto font-light">
            Join the forward-thinking founders who trust Eazytaxes with their compliance and financial strategy.
          </p>
          <div className="flex justify-center">
            <Link href="/start">
              <Button size="lg" className="bg-[#3FB9CB] hover:bg-[#34a0b0] text-white font-bold px-12 h-16 rounded-full text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
