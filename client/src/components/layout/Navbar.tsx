import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Tax & Compliance", href: "/tax-compliance" },
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Start Here", href: "/start" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200/50 transition-all duration-300 rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2.5 group">
            <img src="/logo.jpg" alt="Eazytaxes Logo" className="h-10 w-auto object-contain mix-blend-multiply" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] uppercase tracking-widest font-bold transition-all duration-200 relative group ${location === link.href
                  ? "text-[#3FB9CB]"
                  : "text-slate-500 hover:text-slate-900"
                  }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#3FB9CB] transition-all duration-300 ${location === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            <a href="https://calendly.com/eazytaxes" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#3FB9CB] hover:bg-[#34a0b0] text-white font-bold px-7 h-11 rounded-full text-sm uppercase tracking-wider shadow-lg shadow-[#3FB9CB]/20 transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-95">
                Consultation
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-slate-700 hover:text-[#3FB9CB] py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/start" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-brand-gradient text-white">
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
