import { Link, useLocation } from "wouter";
import { Mail, Phone, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export function Footer() {
  const [location, setLocation] = useLocation();

  const handleScrollToSection = (sectionId: string) => {
    if (location !== '/') {
      setLocation('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-[#020617] border-t border-slate-900 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand & Mission */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-8">
              <div className="bg-white p-2.5 rounded-xl inline-block shadow-lg">
                <img src="/logo.jpg" alt="Eazytaxes Logo" className="h-11 w-auto object-contain" />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8 font-light">
              Redefining corporate financial services through precision, technology, and absolute transparency.
              US-based expertise serving growth-minded businesses and individuals globally.
            </p>
          </div>

          {/* Service Links */}
          <div className="lg:col-span-3">
            <h4 className="text-slate-200 font-bold text-xs uppercase tracking-[0.2em] mb-8">Services</h4>
            <ul className="space-y-4">
              {[
                { label: "Tax & Compliance", href: "/ustax" },
                { label: "Tax Resolution", href: "/tax-resolution" },
                { label: "Assurance & SOC 2", href: "/assurance-soc2" },
                { label: "CFO & Advisory", href: "/cfo-advisory" },
                { label: "Valuations (409A)", href: "/valuations" },
                { label: "US Formation & Banking", href: "/us-formation" }
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-[#3FB9CB] text-sm transition-colors flex items-center group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-200 font-bold text-xs uppercase tracking-[0.2em] mb-8">Company</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => handleScrollToSection('about-us')}
                  className="text-slate-400 hover:text-[#3FB9CB] text-sm transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li><Link href="/careers" className="text-slate-400 hover:text-[#3FB9CB] text-sm transition-colors">Careers</Link></li>
              <li><Link href="/resources" className="text-slate-400 hover:text-[#3FB9CB] text-sm transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-[#3FB9CB] text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-slate-200 font-bold text-xs uppercase tracking-[0.2em] mb-8">Get in Touch</h4>
            <ul className="space-y-6">
              <li>
                <a href="mailto:contact@eazytaxes.com" className="group block">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1 transition-colors group-hover:text-[#3FB9CB]">Email Support</p>
                  <p className="text-slate-300 text-sm font-medium">contact@eazytaxes.com</p>
                </a>
              </li>
              <li>
                <a href="tel:+12068860475" className="group block">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1 transition-colors group-hover:text-[#3FB9CB]">Call Us</p>
                  <p className="text-slate-300 text-sm font-medium">+1 206-886-0475</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Confidence Line & Legal */}
        <div className="mt-20 pt-8 border-t border-slate-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-slate-500 font-light max-w-3xl text-center md:text-left leading-relaxed">
              All services are provided by Eazytaxes Inc., a U.S.-based tax, assurance, and advisory firm. Information on this website is provided for general informational purposes only and may not be complete, accurate, or current. Eazytaxes Inc. makes no representations or warranties regarding the applicability or reliability of such information. No client relationship is formed by use of this website, and services are provided solely pursuant to formal written engagement agreements.
            </p>
            <div className="flex gap-8">
              <Link href="/privacy-policy" className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-[#3FB9CB] transition-colors font-bold">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-[#3FB9CB] transition-colors font-bold">Terms of Service</Link>
              <Link href="/cookie-notice" className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-[#3FB9CB] transition-colors font-bold">Cookie Notice</Link>
            </div>
          </div>
          <div className="mt-8 text-center md:text-left flex justify-between items-center">
            <p className="text-[10px] uppercase tracking-[0.15em] text-slate-600 font-bold">
              © {new Date().getFullYear()} Eazytaxes Inc. All rights reserved.
            </p>
            <div className="hidden md:block w-8 h-[1px] bg-slate-800"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
