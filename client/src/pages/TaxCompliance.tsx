import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowRight, FileText, Shield, User, Building, Globe, Clock, AlertTriangle, Layers, HelpCircle, CheckCircle2, Upload, Eye, Lock, Smartphone, ChevronDown } from "lucide-react";
import { TaxComplianceNavbar } from "@/components/TaxComplianceNavbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TaxCompliance() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif" }}>
      {/* Custom styles for this page only */}
      <style>{`
        .section-inner {
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>

      <TaxComplianceNavbar />

      {/* HERO - Exact copy from HTML */}
      <section className="relative overflow-hidden pb-24 px-8" style={{ paddingTop: '140px', background: 'linear-gradient(170deg, #FFF 0%, #F0FDFA 45%, #FFF 100%)' }}>
        <div className="absolute top-[-300px] right-[-200px] w-[800px] h-[800px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(13,148,136,0.05) 0%, transparent 60%)' }}></div>

        <div className="section-inner grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-sm"
              style={{ color: '#0D9488' }}
            >
              <Check className="w-4 h-4" />
              Trusted by 2,400+ taxpayers last season
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-5"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: 'clamp(34px, 4.2vw, 52px)',
                lineHeight: '1.12',
                fontWeight: '700',
                letterSpacing: '-0.025em',
                color: '#0F172A'
              }}
            >
              Expert tax filing,<br />without the <em className="italic" style={{ color: '#0D9488' }}>confusion</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg mb-8 max-w-xl leading-relaxed"
              style={{ color: '#64748B' }}
            >
              Answer a few questions, upload your documents, and a dedicated CPA or Enrolled Agent handles the rest — from review to filing. Track every step in your personal dashboard.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="https://app.cpa.octondata.com/org/4S064E/register"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-white transition-all hover:-translate-y-0.5 shadow-md hover:shadow-xl"
                style={{ background: '#0D9488', border: '2px solid #0D9488' }}
              >
                Start Your Free Profile <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold bg-white border-2 transition-all hover:-translate-y-0.5"
                style={{ color: '#374151', borderColor: '#E2E8F0' }}
              >
                See How It Works <ChevronDown className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6 text-sm font-medium"
              style={{ color: '#94A3B8' }}
            >
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" style={{ color: '#0D9488' }} />
                Bank-level encryption
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" style={{ color: '#0D9488' }} />
                IRS-authorized e-file
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" style={{ color: '#0D9488' }} />
                Avg. 3-day turnaround
              </div>
            </motion.div>
          </div>

          {/* Right - Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl border shadow-2xl overflow-hidden" style={{ borderColor: '#E2E8F0' }}>
              {/* Card Header */}
              <div className="px-6 pt-5 pb-0 flex items-center justify-between">
                <h3 className="text-lg" style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: '#0F172A' }}>Welcome back, Sarah</h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: '#F0FDFA', color: '#0D9488' }}>In Progress</span>
              </div>

              {/* Card Body */}
              <div className="px-6 py-4">
                {/* Progress Steps */}
                <div className="flex gap-1.5 mb-4">
                  <div className="flex-1 h-1.5 rounded-full" style={{ background: '#0D9488' }}></div>
                  <div className="flex-1 h-1.5 rounded-full relative overflow-hidden" style={{ background: '#F1F5F9' }}>
                    <div className="absolute left-0 top-0 bottom-0 w-[55%] rounded-full" style={{ background: 'linear-gradient(90deg, #0D9488, #2DD4BF)' }}></div>
                  </div>
                  <div className="flex-1 h-1.5 rounded-full" style={{ background: '#F1F5F9' }}></div>
                  <div className="flex-1 h-1.5 rounded-full" style={{ background: '#F1F5F9' }}></div>
                </div>

                {/* Items */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg" style={{ background: '#F0FDFA', border: '1px solid #CCFBF1' }}>
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: '#0D9488' }}>
                      <Check className="w-3 h-3 text-white stroke-[3]" />
                    </div>
                    <span className="flex-1 text-sm font-medium" style={{ color: '#475569' }}>Quick Profile</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: '#F0FDFA', color: '#0D9488' }}>Done</span>
                  </div>

                  <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg" style={{ background: '#F0FDFA', border: '1px solid #CCFBF1' }}>
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: '#0D9488' }}>
                      <Check className="w-3 h-3 text-white stroke-[3]" />
                    </div>
                    <span className="flex-1 text-sm font-medium" style={{ color: '#475569' }}>Detailed Questionnaire</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: '#FFFBEB', color: '#F59E0B' }}>In Progress</span>
                  </div>

                  <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border" style={{ borderColor: '#F1F5F9' }}>
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: '#F1F5F9' }}>
                      <div className="w-2.5 h-2.5 rounded-full border-2" style={{ borderColor: '#94A3B8' }}></div>
                    </div>
                    <span className="flex-1 text-sm font-medium" style={{ color: '#475569' }}>Expert Review</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: '#F1F5F9', color: '#94A3B8' }}>Upcoming</span>
                  </div>

                  <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border" style={{ borderColor: '#F1F5F9' }}>
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: '#F1F5F9' }}>
                      <div className="w-2.5 h-2.5 rounded-full border-2" style={{ borderColor: '#94A3B8' }}></div>
                    </div>
                    <span className="flex-1 text-sm font-medium" style={{ color: '#475569' }}>Review & File</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: '#F1F5F9', color: '#94A3B8' }}>Upcoming</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="absolute -bottom-4 -left-6 bg-white border rounded-xl px-3.5 py-2.5 shadow-lg flex items-center gap-2.5 text-xs"
              style={{ borderColor: '#E2E8F0' }}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, #0D9488, #0A7A70)' }}>MR</div>
              <div>
                <div className="font-medium" style={{ color: '#475569' }}>Michael R., CPA</div>
                <div className="text-[10px]" style={{ color: '#94A3B8' }}>Your assigned expert</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="absolute top-8 -right-5 bg-white border rounded-xl px-3 py-2 shadow-lg flex items-center gap-1.5 text-xs font-semibold"
              style={{ borderColor: '#E2E8F0', color: '#22C55E' }}
            >
              <Lock className="w-3.5 h-3.5" />
              256-bit encrypted
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR - Exact copy from HTML */}
      <section className="bg-white border-b py-14 px-8" style={{ borderColor: '#F1F5F9' }}>
        <div className="section-inner grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '2,400', suffix: '+', label: 'Returns filed last season' },
            { value: '$1,847', label: 'Avg. refund secured' },
            { value: '4.9/5', label: 'Client satisfaction rating' },
            { value: '3 days', label: 'Avg. turnaround time' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl mb-1.5" style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: '#0F172A' }}>
                {stat.value.startsWith('$') ? (
                  <><span style={{ color: '#0D9488' }}>$</span>{stat.value.replace('$', '')}</>
                ) : stat.value.includes('/') ? (
                  <>{stat.value.split('/')[0]}<span style={{ color: '#0D9488' }}>/{stat.value.split('/')[1]}</span></>
                ) : stat.value.includes(' ') ? (
                  <>{stat.value.split(' ')[0]} <span style={{ color: '#0D9488' }}>{stat.value.split(' ')[1]}</span></>
                ) : (
                  <>{stat.value}</>
                )}
                {stat.suffix && <span style={{ color: '#0D9488' }}>{stat.suffix}</span>}
              </div>
              <div className="text-sm font-medium" style={{ color: '#94A3B8' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHO IT'S FOR - Exact copy from HTML */}
      <section className="py-24 px-8" style={{ background: '#F8FAFC' }}>
        <div className="section-inner">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#0D9488', letterSpacing: '0.12em' }}>Who It's For</div>
            <h2 className="text-4xl mb-4" style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: '#0F172A', letterSpacing: '-0.02em' }}>Tax situations we handle every day</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748B' }}>Whether your taxes are simple or complex, our experts have seen it before.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {[
              { icon: Building, title: 'W-2 Employees', desc: 'Standard employment income with potential deductions for home office, education, or charitable donations. Simple does not mean you should leave money on the table.', tags: ['W-2 Income', 'Standard Deductions', 'Single or Joint'] },
              { icon: Layers, title: 'Freelancers & Self-Employed', desc: '1099 income, business expenses, quarterly estimated payments, home office deductions, and self-employment tax. We help you keep more of what you earn.', tags: ['1099 Income', 'Schedule C', 'Business Expenses'] },
              { icon: Globe, title: 'Investors & Multiple Income', desc: 'Stock trades, rental properties, crypto, multi-state filings, RSUs, and more. Complex returns are where expert review makes the biggest difference.', tags: ['Capital Gains', 'Rental Income', 'Multi-State'] }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border rounded-2xl px-7 py-8 hover:-translate-y-1 transition-all"
                style={{ borderColor: '#E2E8F0' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: '#F0FDFA', color: '#0D9488' }}>
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl mb-2.5" style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: '#0F172A' }}>{card.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748B' }}>{card.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {card.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-semibold px-2.5 py-1 rounded border" style={{ background: '#F8FAFC', color: '#64748B', borderColor: '#E2E8F0' }}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - Exact copy from HTML */}
      <section id="process" className="py-24 px-8 bg-white">
        <div className="section-inner">
          <div className="text-center mb-16">
            <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#0D9488', letterSpacing: '0.12em' }}>How It Works</div>
            <h2 className="text-4xl mb-4" style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: '#0F172A', letterSpacing: '-0.02em' }}>Four simple steps. That's it.</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748B' }}>No tax jargon. No guessing. Your dashboard walks you through every step and shows you exactly what's happening with your return.</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-12 left-[60px] right-[60px] h-0.5" style={{ background: '#E2E8F0' }}></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { num: 1, title: 'Quick Profile', desc: 'Answer a short set of questions about your filing status, income types, and tax situation. This helps us match you with the right expert.', time: '~ 5 minutes' },
                { num: 2, title: 'Detailed Questionnaire', desc: 'Work through a guided questionnaire covering income, deductions, credits, and life events. Upload documents right where they are relevant.', time: '~ 15–30 min' },
                { num: 3, title: 'Expert Review', desc: 'A dedicated CPA or Enrolled Agent reviews every detail. They will reach out through your dashboard if they need anything.', time: '1–3 business days' },
                { num: 4, title: 'Review & File', desc: 'Your completed return appears in your dashboard. Approve it, and we e-file directly with the IRS. Confirmation the moment it is accepted.', time: 'Same-day filing' }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border rounded-2xl p-6 text-center hover:shadow-lg transition-all"
                  style={{ borderColor: '#E2E8F0' }}
                >
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-lg" style={{ background: '#0D9488' }}>
                    {step.num}
                  </div>
                  <h3 className="text-lg mb-3" style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: '#0F172A' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748B' }}>{step.desc}</p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md" style={{ background: '#F0FDFA', color: '#0D9488' }}>
                    <Clock className="w-3.5 h-3.5" />
                    {step.time}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW - Exact copy from HTML */}
      <section id="dashboard" className="py-24 px-8" style={{ background: '#F8FAFC' }}>
        <div className="section-inner">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#0D9488', letterSpacing: '0.12em' }}>Your Dashboard</div>
            <h2 className="text-4xl mb-4" style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: '#0F172A', letterSpacing: '-0.02em' }}>Everything in one place. Nothing lost in email.</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748B' }}>Your dashboard is your home base. See progress, upload documents, message your expert, and track your return — all in one screen.</p>
          </div>

          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border shadow-2xl max-w-5xl mx-auto"
            style={{ borderColor: '#E2E8F0', background: '#FFF' }}
          >
            {/* Browser Top Bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }}></div>
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }}></div>
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }}></div>
              </div>
              <div className="flex-1 text-center text-xs" style={{ color: '#94A3B8' }}>dashboard.eazytaxes.com</div>
            </div>

            {/* Dashboard Content */}
            <div className="grid grid-cols-5" style={{ background: '#FAFAFA' }}>
              {/* Sidebar */}
              <div className="col-span-1 py-6 px-4" style={{ background: '#0F172A' }}>
                <div className="mb-6 px-2" style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '15px', color: 'white' }}>
                  eazy<span style={{ color: '#5EEAD4' }}>taxes</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg font-medium" style={{ background: 'rgba(13,148,136,0.15)', color: '#5EEAD4' }}>
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
                    Dashboard
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg" style={{ color: '#94A3B8' }}>
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                    Questionnaire
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg" style={{ color: '#94A3B8' }}>
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /></svg>
                    Documents
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg" style={{ color: '#94A3B8' }}>
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
                    Messages
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="col-span-4 p-6">
                <div className="text-2xl mb-1" style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: '#0F172A' }}>Welcome back, Sarah</div>
                <div className="text-sm mb-5" style={{ color: '#94A3B8' }}>Tax Year 2025 · Federal + California</div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span style={{ color: '#64748B' }}>Overall Progress</span>
                    <span className="font-semibold" style={{ color: '#0D9488' }}>45% complete</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: '#F1F5F9' }}>
                    <div className="h-full rounded-full" style={{ width: '45%', background: 'linear-gradient(90deg, #0D9488, #2DD4BF)' }}></div>
                  </div>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-xl border" style={{ borderColor: '#E2E8F0', background: '#FFF' }}>
                    <div className="text-xs mb-1" style={{ color: '#94A3B8' }}>Status</div>
                    <div className="text-sm font-semibold mb-0.5" style={{ color: '#0D9488' }}>Questionnaire In Progress</div>
                    <div className="text-xs" style={{ color: '#94A3B8' }}>5 of 12 sections completed</div>
                  </div>
                  <div className="p-4 rounded-xl border" style={{ borderColor: '#E2E8F0', background: '#FFF' }}>
                    <div className="text-xs mb-1" style={{ color: '#94A3B8' }}>Your Expert</div>
                    <div className="text-sm font-semibold mb-0.5" style={{ color: '#0F172A' }}>Michael R., CPA</div>
                    <div className="text-xs" style={{ color: '#94A3B8' }}>Assigned · 8 years experience</div>
                  </div>
                  <div className="p-4 rounded-xl border" style={{ borderColor: '#E2E8F0', background: '#FFF' }}>
                    <div className="text-xs mb-1" style={{ color: '#94A3B8' }}>Expected Completion</div>
                    <div className="text-sm font-semibold mb-0.5" style={{ color: '#0F172A' }}>Feb 10, 2026</div>
                    <div className="text-xs" style={{ color: '#94A3B8' }}>Based on current pace</div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="text-sm font-semibold mb-3" style={{ color: '#374151' }}>Recent Activity</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 rounded-lg border" style={{ borderColor: '#E2E8F0', background: '#FFF' }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: '#0D9488' }}></div>
                    <div className="flex-1 text-sm" style={{ color: '#475569' }}>You uploaded W-2_2025.pdf</div>
                    <div className="text-xs" style={{ color: '#94A3B8' }}>2 hours ago</div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border" style={{ borderColor: '#E2E8F0', background: '#FFF' }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: '#0D9488' }}></div>
                    <div className="flex-1 text-sm" style={{ color: '#475569' }}>Completed section: Income & Wages</div>
                    <div className="text-xs" style={{ color: '#94A3B8' }}>Yesterday</div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border" style={{ borderColor: '#E2E8F0', background: '#FFF' }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: '#E2E8F0' }}></div>
                    <div className="flex-1 text-sm" style={{ color: '#475569' }}>Michael R. was assigned to your return</div>
                    <div className="text-xs" style={{ color: '#94A3B8' }}>Feb 3</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dashboard Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {[
              { icon: FileText, title: 'Guided Questionnaire', desc: 'Plain-English questions that adapt to your answers. Only see what applies to you.' },
              { icon: Upload, title: 'Inline Document Uploads', desc: 'Upload W-2s and 1099s right where they are asked for. More uploads = less manual entry.' },
              { icon: AlertTriangle, title: 'Direct Expert Messaging', desc: 'Message your CPA anytime. No phone tag, no waiting on hold. Responses within hours.' }
            ].map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#F0FDFA', color: '#0D9488' }}>
                  <feat.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-1" style={{ color: '#0F172A' }}>{feat.title}</h4>
                  <p className="text-sm" style={{ color: '#64748B' }}>{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES DEEP DIVE - Exact copy from HTML */}
      <section id="features" className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Feature 1: Guided Questionnaire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: '#F0FDFA', color: '#0D9488' }}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /><path d="M9 14l2 2 4-4" /></svg>
              </div>
              <h3 className="text-3xl mb-4" style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: '#0F172A', letterSpacing: '-0.02em' }}>A guided questionnaire that does the thinking for you</h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#64748B' }}>No more staring at a blank tax form. Our step-by-step questionnaire asks plain-English questions grouped by topic — income, housing, family, investments. It only shows what applies to you.</p>
              <ul className="space-y-3">
                {[
                  'Questions in plain language — no tax codes',
                  'Sections dynamically adjust based on your answers',
                  'Save and resume anytime — progress always saved',
                  'Upload documents inline where they are relevant'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#475569' }}>
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5 stroke-[2.5]" style={{ color: '#0D9488' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border rounded-2xl p-6 shadow-lg" style={{ borderColor: '#E2E8F0' }}>
              <div className="flex items-center gap-3 mb-4 pb-4 border-b" style={{ borderColor: '#F1F5F9' }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" /></svg>
                <span className="font-semibold" style={{ color: '#0F172A' }}>Income & Employment</span>
              </div>
              <div className="h-2 rounded-full mb-5" style={{ background: '#F1F5F9' }}>
                <div className="h-full rounded-full" style={{ width: '50%', background: 'linear-gradient(90deg, #0D9488, #2DD4BF)' }}></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded flex items-center justify-center" style={{ background: '#0D9488' }}>
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                  </div>
                  <span style={{ color: '#475569' }}>W-2 wages & salary information</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded flex items-center justify-center" style={{ background: '#0D9488' }}>
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                  </div>
                  <span style={{ color: '#475569' }}>Freelance & self-employment income</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded border-2" style={{ borderColor: '#E2E8F0' }}></div>
                  <span style={{ color: '#94A3B8' }}>Interest & dividend income</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded border-2" style={{ borderColor: '#E2E8F0' }}></div>
                  <span style={{ color: '#94A3B8' }}>Investment gains & losses</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2: Upload Documents (Reversed) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="lg:order-2">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: '#F0FDFA', color: '#0D9488' }}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M12 18v-6M9 15l3-3 3 3" /></svg>
              </div>
              <h3 className="text-3xl mb-4" style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: '#0F172A', letterSpacing: '-0.02em' }}>Upload documents, reduce your typing</h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#64748B' }}>The more documents you upload, the less you have to manually enter. When you reach a section about your W-2, you will see an upload prompt right there. Drop the file in, and your expert has exactly what they need.</p>
              <ul className="space-y-3">
                {[
                  'Upload W-2s, 1099s, receipts, and supporting docs',
                  'Drag-and-drop or upload from your phone camera',
                  'Every file is encrypted and stored securely',
                  'More uploads = less manual entry for you'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#475569' }}>
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5 stroke-[2.5]" style={{ color: '#0D9488' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:order-1 bg-white border rounded-2xl p-6 shadow-lg" style={{ borderColor: '#E2E8F0' }}>
              <div className="border-2 border-dashed rounded-xl p-8 mb-4 text-center" style={{ borderColor: '#CBD5E1', background: '#F8FAFC' }}>
                <svg className="mx-auto mb-3" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ color: '#94A3B8' }}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" /></svg>
                <p className="text-sm" style={{ color: '#64748B' }}>Drop your files here or <strong style={{ color: '#0D9488' }}>browse</strong></p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded-lg border" style={{ borderColor: '#E2E8F0', background: '#F8FAFC' }}>
                  <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#F0FDFA' }}>
                    <FileText className="w-4 h-4" style={{ color: '#0D9488' }} />
                  </div>
                  <span className="flex-1 text-sm" style={{ color: '#475569' }}>W2_2025_Employer.pdf</span>
                  <span className="text-xs font-semibold" style={{ color: '#10B981' }}>✓ Uploaded</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border" style={{ borderColor: '#E2E8F0', background: '#F8FAFC' }}>
                  <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#F0FDFA' }}>
                    <FileText className="w-4 h-4" style={{ color: '#0D9488' }} />
                  </div>
                  <span className="flex-1 text-sm" style={{ color: '#475569' }}>1099-INT_BankOfAmerica.pdf</span>
                  <span className="text-xs font-semibold" style={{ color: '#10B981' }}>✓ Uploaded</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 3: Expert Review */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: '#F0FDFA', color: '#0D9488' }}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
              </div>
              <h3 className="text-3xl mb-4" style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: '#0F172A', letterSpacing: '-0.02em' }}>A real expert reviews every line of your return</h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#64748B' }}>This is not DIY tax software. Once you complete the questionnaire, a licensed CPA or Enrolled Agent is assigned to your case. They review your documents, check for missed deductions, and prepare your return with professional accuracy.</p>
              <ul className="space-y-3">
                {[
                  'Dedicated expert assigned to your return',
                  'Direct messaging — ask questions anytime',
                  'Multi-point accuracy check before filing',
                  'You always review and approve before anything is filed'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#475569' }}>
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5 stroke-[2.5]" style={{ color: '#0D9488' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border rounded-2xl p-6 shadow-lg" style={{ borderColor: '#E2E8F0' }}>
              <div className="flex items-center gap-4 mb-5 pb-5 border-b" style={{ borderColor: '#F1F5F9' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ background: 'linear-gradient(135deg, #0D9488, #0A7A70)' }}>MR</div>
                <div>
                  <div className="font-semibold" style={{ color: '#0F172A' }}>Michael Rodriguez, CPA</div>
                  <div className="text-xs" style={{ color: '#94A3B8' }}>Senior Tax Preparer · 8 years experience</div>
                  <div className="flex items-center gap-1 text-xs font-semibold mt-1" style={{ color: '#10B981' }}>
                    <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg>
                    Verified & Licensed
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ background: '#0D9488' }}></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm" style={{ color: '#475569' }}>Expert assigned to your return</span>
                      <span className="text-xs" style={{ color: '#94A3B8' }}>Feb 3</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ background: '#0D9488' }}></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm" style={{ color: '#475569' }}>Initial review completed</span>
                      <span className="text-xs" style={{ color: '#94A3B8' }}>Feb 4</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ background: '#0D9488' }}></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm" style={{ color: '#475569' }}>Follow-up question sent</span>
                      <span className="text-xs" style={{ color: '#94A3B8' }}>Feb 4</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 border-2" style={{ borderColor: '#E2E8F0' }}></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm" style={{ color: '#94A3B8' }}>Final review & preparation</span>
                      <span className="text-xs" style={{ color: '#94A3B8' }}>Pending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRICING - Exact copy from HTML */}
      <section id="pricing" className="py-24 px-8" style={{ background: '#F8FAFC' }}>
        <div className="section-inner">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#0D9488', letterSpacing: '0.12em' }}>Transparent Pricing</div>
            <h2 className="text-4xl mb-4" style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: '#0F172A', letterSpacing: '-0.02em' }}>Simple pricing, no surprises</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748B' }}>Your exact price is confirmed after your free profile — based on your specific tax situation. Here's what to expect.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-7">
            {[
              { tier: 'SIMPLE', price: 149, ideal: 'Ideal for straightforward returns', features: ['W-2 employment income', 'Standard or itemized deductions', 'Federal + one state filing', 'Dedicated CPA review', 'Dashboard & direct messaging'] },
              { tier: 'STANDARD', price: 249, featured: true, ideal: 'Ideal for mixed income sources', features: ['Everything in Simple, plus:', '1099 & freelance income', 'Investment income & capital gains', 'Home office & business expenses', 'Multi-state filing support', 'Priority expert review'] },
              { tier: 'COMPLEX', price: 399, ideal: 'Ideal for complex financial situations', features: ['Everything in Standard, plus:', 'Rental property income', 'RSUs, stock options & crypto', 'Schedule K-1 partnerships', 'Senior CPA assignment', 'Tax planning recommendations'] }
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white rounded-2xl px-7 py-9 hover:-translate-y-1 transition-all hover:shadow-2xl"
                style={{ border: plan.featured ? '2px solid #0D9488' : '1px solid #E2E8F0', boxShadow: plan.featured ? '0 16px 40px rgba(13,148,136,0.12)' : 'none' }}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide" style={{ background: '#0D9488', letterSpacing: '0.05em' }}>
                    Most Popular
                  </div>
                )}
                <div className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: '#94A3B8', letterSpacing: '0.06em' }}>{plan.tier}</div>
                <div className="flex items-start mb-0.5">
                  <span className="text-xl mt-1" style={{ color: '#0F172A' }}>$</span>
                  <span className="text-5xl" style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: '#0F172A', lineHeight: '1' }}>{plan.price}</span>
                </div>
                <div className="text-sm font-semibold mb-1.5" style={{ color: '#0D9488' }}>Starting from</div>
                <div className="text-sm mb-5" style={{ color: '#94A3B8' }}>Final price confirmed after profiling</div>
                <div className="h-px mb-5" style={{ background: '#F1F5F9' }}></div>
                <div className="text-sm font-semibold mb-3.5" style={{ color: '#374151' }}>{plan.ideal}</div>
                <ul className="space-y-2.5 mb-7">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm" style={{ color: '#475569' }}>
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5 stroke-[2.5]" style={{ color: '#0D9488' }} />
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://app.cpa.octondata.com/org/4S064E/register"
                  className="block w-full text-center py-3.5 rounded-lg font-semibold text-sm transition-all hover:-translate-y-0.5"
                  style={{
                    background: plan.featured ? '#0D9488' : '#FFF',
                    color: plan.featured ? '#FFF' : '#374151',
                    border: plan.featured ? '2px solid #0D9488' : '2px solid #E2E8F0'
                  }}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>

          <div className="text-center max-w-2xl mx-auto mt-7">
            <p className="text-sm leading-relaxed flex items-start gap-2 justify-center" style={{ color: '#94A3B8' }}>
              <HelpCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#0D9488' }} />
              <span>Prices shown are starting points. Your exact price is determined after the free 5-minute profiling step, based on the complexity of your specific situation. No payment is required until your return is prepared and you have approved it.</span>
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE - Exact copy from HTML */}
      <section className="py-24 px-8 bg-white">
        <div className="section-inner">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#0D9488', letterSpacing: '0.12em' }}>Why eazytaxes</div>
            <h2 className="text-4xl mb-4" style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: '#0F172A', letterSpacing: '-0.02em' }}>How we compare</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748B' }}>The convenience of online filing with the expertise of a dedicated tax professional.</p>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl border overflow-x-auto shadow-lg" style={{ borderColor: '#E2E8F0' }}>
            {/* Table Header */}
            <div className="grid grid-cols-4 border-b" style={{ background: '#F8FAFC', borderColor: '#E2E8F0', minWidth: '600px' }}>
              <div className="p-4 text-sm font-semibold" style={{ color: '#475569' }}>Feature</div>
              <div className="p-4 text-center text-sm font-semibold" style={{ color: '#64748B' }}>DIY Software</div>
              <div className="p-4 text-center text-sm font-semibold text-white relative" style={{ background: '#0D9488' }}>EazyTaxes</div>
              <div className="p-4 text-center text-sm font-semibold" style={{ color: '#64748B' }}>Traditional CPA</div>
            </div>

            {/* Table Rows */}
            {[
              { label: 'Dedicated tax expert', diy: false, us: true, trad: true },
              { label: 'Real-time progress dashboard', diy: false, us: true, trad: false },
              { label: 'No tax knowledge needed', diy: false, us: true, trad: true },
              { label: 'Direct expert messaging', diy: false, us: true, trad: 'Phone/email only' },
              { label: 'Transparent, upfront pricing', diy: true, us: true, trad: 'Often unclear' },
              { label: 'Secure document upload', diy: true, us: true, trad: 'Email/in-person' },
              { label: 'Accuracy guarantee', diy: 'Limited', us: '✓ Full', trad: 'Varies' },
              { label: 'Average cost', diy: '$50–$200', us: '$149–$399+', trad: '$300–$800+' },
              { label: 'Average turnaround', diy: 'Immediate', us: '3 days', trad: '7-14 days' }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-4 border-b last:border-0" style={{ borderColor: '#F1F5F9', minWidth: '600px' }}>
                <div className="p-3.5 text-sm font-medium" style={{ color: '#374151' }}>{row.label}</div>

                {/* DIY Column */}
                <div className="p-3.5 flex items-center justify-center">
                  {row.diy === true ? (
                    <span className="text-xl" style={{ color: '#0D9488' }}>✓</span>
                  ) : row.diy === false ? (
                    <span className="text-xl" style={{ color: '#CBD5E1' }}>✕</span>
                  ) : (
                    <span className="text-sm" style={{ color: '#475569' }}>{row.diy}</span>
                  )}
                </div>

                {/* EazyTaxes Column (Highlighted) */}
                <div className="p-3.5 flex items-center justify-center" style={{ background: '#F0FDFA' }}>
                  {row.us === true ? (
                    <span className="text-xl font-semibold" style={{ color: '#0D9488' }}>✓</span>
                  ) : row.us === false ? (
                    <span className="text-xl" style={{ color: '#CBD5E1' }}>✕</span>
                  ) : (
                    <span className="text-sm font-semibold" style={{ color: '#0D9488' }}>{row.us}</span>
                  )}
                </div>

                {/* Traditional CPA Column */}
                <div className="p-3.5 flex items-center justify-center">
                  {row.trad === true ? (
                    <span className="text-xl" style={{ color: '#0D9488' }}>✓</span>
                  ) : row.trad === false ? (
                    <span className="text-xl" style={{ color: '#CBD5E1' }}>✕</span>
                  ) : (
                    <span className="text-sm" style={{ color: '#475569' }}>{row.trad}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Exact copy from HTML */}
      <section className="py-24 px-8" style={{ background: '#F8FAFC' }}>
        <div className="section-inner">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#0D9488', letterSpacing: '0.12em' }}>Client Stories</div>
            <h2 className="text-4xl mb-4" style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: '#0F172A', letterSpacing: '-0.02em' }}>Don't just take our word for it</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748B' }}>Here's what real clients have to say about their experience with EazyTaxes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah M.', role: 'Freelance Designer', text: 'I used to dread tax season. Now I just answer questions, upload my 1099s, and let my CPA handle the rest. Got my return filed in 3 days and found deductions I did not even know existed.' },
              { name: 'James K.', role: 'Software Engineer', text: 'Having RSUs and multi-state income made my taxes complicated. My assigned CPA walked me through everything via the dashboard. So much easier than doing it myself.' },
              { name: 'Maria L.', role: 'Small Business Owner', text: 'Best tax experience I have ever had. The questionnaire made it simple to report all my business expenses, and my CPA caught a mistake from my previous year that saved me $1,200.' }
            ].map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border rounded-2xl px-7 py-8 flex flex-col hover:-translate-y-1 transition-all hover:shadow-lg"
                style={{ borderColor: '#E2E8F0' }}
              >
                <div className="flex gap-0.5 mb-4" style={{ color: '#F59E0B' }}>
                  {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
                </div>
                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: '#475569' }}>{test.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: '#F1F5F9' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: 'linear-gradient(135deg, #CCFBF1, #F0FDFA)', color: '#0D9488' }}>
                    {test.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#1E293B' }}>{test.name}</div>
                    <div className="text-xs" style={{ color: '#94A3B8' }}>{test.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY - Exact copy from HTML */}
      <section className="py-24 px-8 text-white" style={{ background: '#0F172A' }}>
        <div className="section-inner">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#5EEAD4', letterSpacing: '0.12em' }}>Security & Privacy</div>
            <h2 className="text-4xl mb-4" style={{ fontFamily: "'DM Serif Display', Georgia, serif", letterSpacing: '-0.02em' }}>Your data is protected at every step</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>We take security seriously. Bank-level encryption, SOC 2 compliance, and strict access controls keep your information safe.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Lock, title: '256-bit encryption', desc: 'All data encrypted in transit and at rest using industry-standard AES-256 encryption.' },
              { icon: Shield, title: 'SOC 2 compliant', desc: 'Audited security controls meeting the highest standards for data protection.' },
              { icon: Eye, title: 'Limited access', desc: 'Only your assigned expert can view your return. No shared pools or outsourcing.' },
              { icon: CheckCircle2, title: 'Secure infrastructure', desc: 'Hosted on AWS with automatic backups and disaster recovery protocols.' },
              { icon: Smartphone, title: 'Two-factor auth', desc: 'Optional 2FA for an extra layer of account protection.' },
              { icon: FileText, title: 'Audit trail', desc: 'Every action logged and reviewable. Full transparency on who accessed what.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl px-6 py-7 transition-all hover:border-opacity-30"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <item.icon className="w-6 h-6 mb-3.5" style={{ color: '#5EEAD4' }} />
                <h4 className="text-base font-semibold mb-2">{item.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Exact copy from HTML */}
      <section id="faq" className="py-24 px-8" style={{ background: '#F8FAFC' }}>
        <div className="section-inner">
          <div className="text-center mb-16">
            <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#0D9488', letterSpacing: '0.12em' }}>Common Questions</div>
            <h2 className="text-4xl mb-4" style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: '#0F172A', letterSpacing: '-0.02em' }}>Everything you want to know</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748B' }}>Clear, honest answers to the questions we hear most.</p>
          </div>

          {/* FAQ Grid with exact 800px width and premium card styling */}
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Accordion type="single" collapsible className="flex flex-col gap-4">
              {[
                {
                  q: 'How long does the whole process take?',
                  a: 'Most clients complete their profiling in about 5 minutes and the detailed questionnaire in 15-30 minutes. After that, your expert typically reviews and prepares your return within 1-3 business days. Average total turnaround is 3-5 days.'
                },
                {
                  q: 'What if I don\'t have all my documents ready?',
                  a: 'No problem. Your dashboard saves progress automatically, so you can start the questionnaire, upload what you have, and come back anytime. Your expert won\'t begin the final review until you\'ve marked it complete.'
                },
                {
                  q: 'Can I talk to my tax expert directly?',
                  a: 'Yes. Your dashboard includes secure messaging that connects you directly with your assigned CPA or Enrolled Agent. They typically respond within a few hours during business days. No phone tag, no waiting on hold.'
                },
                {
                  q: 'When do I pay, and how is my price determined?',
                  a: 'After your free 5-minute profile, we\'ll confirm your exact price based on the complexity of your tax situation. No payment is required until your return has been fully prepared and you\'ve had the chance to review and approve it.'
                },
                {
                  q: 'What types of tax returns do you handle?',
                  a: 'We handle a wide range of individual tax situations including W-2 employment, freelance and self-employment income (1099s), rental income, investment gains and losses, stock options, multi-state filings, and major life events like marriage, home purchases, or having a child.'
                },
                {
                  q: 'What happens after my return is filed?',
                  a: 'Your dashboard continues as your record. You\'ll get confirmation the moment the IRS accepts your return. Download copies anytime. And if the IRS ever reaches out, your expert is available to help - your relationship doesn\'t end when you file.'
                }
              ].map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-white border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:border-gray-300"
                  style={{
                    borderColor: '#E2E8F0',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <AccordionTrigger
                    className="text-left font-semibold hover:no-underline text-[16px]"
                    style={{
                      color: '#1E293B',
                      padding: '20px 24px',
                      fontWeight: '600'
                    }}
                  >
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent
                    className="leading-relaxed text-[14px]"
                    style={{
                      color: '#64748B',
                      lineHeight: '1.7',
                      padding: '0 24px 20px 24px'
                    }}
                  >
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* FINAL CTA - Exact copy from HTML */}
      <section className="pt-24 pb-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl px-12 py-16 md:px-16 text-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #F0FDFA, #FFF)', border: '1px solid #CCFBF1' }}>
            <div className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(13,148,136,0.08), transparent 70%)' }}></div>
            <h2 className="text-4xl mb-4 relative" style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: '#0F172A', letterSpacing: '-0.02em' }}>Ready to file with confidence?</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto relative" style={{ color: '#64748B' }}>Start your free profile now. No credit card required. You only pay when you are ready to file.</p>
            <a
              href="https://app.cpa.octondata.com/org/4S064E/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-semibold text-white transition-all relative hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              style={{ background: '#0D9488', fontSize: '16px' }}
            >
              Start Your Free Profile <ArrowRight className="w-5 h-5" />
            </a>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm relative" style={{ color: '#64748B' }}>
              <Shield className="w-4 h-4" style={{ color: '#0D9488' }} />
              <span>100% satisfaction guarantee · Full refund if not completely happy</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
