import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowRight, FileText, Shield, User, Building, Globe, Clock, AlertTriangle, Layers, HelpCircle, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export default function TaxCompliance() {
  const pricingOptions = [
    {
      title: "Individual Filing",
      bestFor: "W-2, investment income, basic cross-border items",
      features: [
        "Federal return preparation and filing",
        "State filing (if applicable)",
        "Secure onboarding + document checklist"
      ],
      cta: "Start Individual Filing",
      variant: "individual"
    },
    {
      title: "Business Filing",
      bestFor: "LLCs, corporations, partnerships",
      features: [
        "Entity return preparation and filing",
        "State compliance (if applicable)",
        "Secure onboarding + document checklist"
      ],
      cta: "Start Business Filing",
      variant: "business"
    },
    {
      title: "Cross-border / International",
      bestFor: "Foreign income/assets, non-US entities",
      featured: true,
      features: [
        "Return + cross-border compliance intake",
        "Reporting scope confirmation",
        "Secure onboarding + checklist"
      ],
      cta: "Start Cross-border Filing",
      variant: "crossborder"
    }
  ];

  const deliverables = [
    "Prepared and filed returns (as applicable)",
    "Compliance requirement confirmation",
    "Secure client onboarding checklist",
    "Request list for missing items",
    "Final deliverables shared securely",
    "Support for follow-up questions"
  ];

  const situations = [
    { title: "Behind on filings (catch-up)", case: "catchup" },
    { title: "Foreign income or overseas assets", case: "foreign" },
    { title: "Multiple states involved", case: "multistate" },
    { title: "Self-employed / contractor income", case: "selfemployed" },
    { title: "New entity filing", case: "newentity" },
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
            US Tax & Compliance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto mb-10 font-light"
          >
            Buy, onboard, and get started immediately for US tax filings and compliance matters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/checkout?service=tax-compliance">
              <Button size="lg" className="bg-white text-[#059669] hover:bg-blue-50 border-0 font-bold px-8 h-14 rounded-xl text-lg shadow-lg">
                Get Started
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 h-14 rounded-xl text-lg">
              Book a Call
            </Button>
          </motion.div>
          <div className="mt-6">
            <Link href="/start" className="text-sm text-blue-100 hover:text-white underline underline-offset-4">
              Not sure which service applies?
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PRICING OPTIONS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Pricing options</h2>
          <p className="text-slate-600 mt-2">Transparent packages for every situation.</p>
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

              <Link href={`/checkout?service=tax-compliance&variant=${opt.variant}`}>
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
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">What you get</h2>
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
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Choose your situation</h2>
        <p className="text-center text-slate-600 mb-12">Fast paths to the right solution</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {situations.map((sit, i) => (
            <Link key={i} href={sit.link || `/checkout?service=tax-compliance&case=${sit.case}`}>
              <div className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">{sit.title}</h3>
                  <div className="h-1 w-12 bg-slate-100 group-hover:bg-primary transition-colors rounded-full mb-4"></div>
                </div>
                <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                  Start Now <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. WHAT WE COVER */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">What we cover</h2>
          <ul className="space-y-4 text-left inline-block">
            {[
              "US federal and state tax filings",
              "Individual, business, and entity compliance",
              "Cross-border filing obligations triggered by foreign activity",
              "Prior-year corrections and catch-up filings",
              "Ongoing compliance support where requirements evolve"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-lg text-slate-700">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. PROOF / TRUST */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Why clients choose Eazytaxes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Globe />, text: "US-based firm supporting domestic and cross-border clients" },
              { icon: <Layers />, text: "Work spanning tax, assurance, and advisory service lines" },
              { icon: <Clock />, text: "Experience with recurring compliance and multi-year catch-up matters" },
              { icon: <Shield />, text: "Structured onboarding designed to reduce back-and-forth" }
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center text-primary mb-6">
                  {item.icon}
                </div>
                <p className="text-slate-700 font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-slate-700 z-0"></div>

            {[
              "Purchase and create your account",
              "Complete onboarding and upload documents",
              "We review and proceed with the filing scope"
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-gradient flex items-center justify-center text-2xl font-bold shadow-lg shadow-blue-500/20 mb-6 border-4 border-slate-800">
                  {i + 1}
                </div>
                <p className="text-lg font-medium text-slate-200 max-w-xs">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-24 max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">FAQ</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What happens after I pay?</AccordionTrigger>
            <AccordionContent>
              You’ll be taken to onboarding immediately to confirm details and receive a document checklist.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What if I’m not sure which option applies?</AccordionTrigger>
            <AccordionContent>
              Use <Link href="/start" className="text-primary hover:underline">Start Here</Link> or book a call, and we’ll guide you to the right service.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you handle state filings?</AccordionTrigger>
            <AccordionContent>
              If your situation requires state filings, they are handled as part of the engagement based on scope.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can you handle prior-year filings?</AccordionTrigger>
            <AccordionContent>
              Yes. Choose “Behind on filings (catch-up)” to begin.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Do you handle cross-border compliance?</AccordionTrigger>
            <AccordionContent>
              Yes. Choose the Cross-border option or “Foreign income or overseas assets.”
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-24 bg-brand-gradient text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Get started now</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/checkout?service=tax-compliance">
              <Button size="lg" className="bg-white text-[#059669] hover:bg-blue-50 border-0 font-bold px-10 h-14 rounded-xl text-lg shadow-xl hover:-translate-y-1 transition-all">
                Get Started
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-10 h-14 rounded-xl text-lg backdrop-blur-sm">
              Book a Call
            </Button>
          </div>
          <div className="mt-8">
            <Link href="/start" className="text-blue-100 hover:text-white underline underline-offset-4 font-medium">
              Not sure? Start Here
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
