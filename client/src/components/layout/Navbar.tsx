import { Link, useLocation, useRoute } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [location, setLocation] = useLocation();
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/#about-us" },
    { label: "Careers", href: "/careers" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    { label: "Tax & Compliance", href: "/ustax" },
    { label: "Tax Resolution", href: "/tax-resolution" },
    { label: "Assurance & SOC 2", href: "/assurance-soc2" },
    { label: "CFO & Advisory", href: "/cfo-advisory" },
    { label: "Valuations (409A)", href: "/valuations" },
    { label: "US Formation & Banking", href: "/us-formation" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Detect when sections are in viewport
  useEffect(() => {
    const handleScroll = () => {
      const startHereSection = document.getElementById('start-here');
      const aboutUsSection = document.getElementById('about-us');

      // Check About Us section first (it comes after Start Here)
      if (aboutUsSection) {
        const aboutRect = aboutUsSection.getBoundingClientRect();
        const isAboutInView = aboutRect.top <= 100 && aboutRect.bottom >= 100;
        if (isAboutInView) {
          setActiveSection('about-us');
          return;
        }
      }

      // Then check Start Here section
      if (startHereSection) {
        const startRect = startHereSection.getBoundingClientRect();
        const isStartInView = startRect.top <= 100 && startRect.bottom >= 100;
        if (isStartInView) {
          setActiveSection('start-here');
          return;
        }
      }

      // Check if we're at the very bottom of the page (footer area)
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight - 50) {
        // We're at the footer, keep About Us active if we were on home page
        if (location === '/' && aboutUsSection) {
          setActiveSection('about-us');
          return;
        }
      }

      // No section is active
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200/50 transition-all duration-300 rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2.5 group">
            <img src="/logo.jpg" alt="Eazytaxes Logo" className="h-12 w-auto object-contain mix-blend-multiply" />
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.slice(0, 1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] uppercase tracking-widest font-bold transition-all duration-200 relative group ${location === link.href && activeSection === ''
                  ? "text-[#3FB9CB]"
                  : "text-black hover:text-[#3FB9CB]"
                  }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#3FB9CB] transition-all duration-300 ${location === link.href && activeSection === '' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </Link>
            ))}
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <a
                href="/#start-here"
                onClick={(e) => {
                  e.preventDefault();
                  if (location !== '/') {
                    setLocation('/');
                    setTimeout(() => {
                      const section = document.getElementById('start-here');
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 100);
                  } else {
                    const section = document.getElementById('start-here');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }
                }}
                className={`text-[13px] uppercase tracking-widest font-bold transition-all duration-200 relative group flex items-center gap-1 cursor-pointer ${activeSection === 'start-here' ? 'text-[#3FB9CB]' : 'text-black hover:text-[#3FB9CB]'
                  }`}
              >
                Services
                <ChevronDown className="h-3 w-3" />
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#3FB9CB] transition-all duration-300 ${activeSection === 'start-here' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
              {showDropdown && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white rounded-xl shadow-2xl border border-slate-100 py-6 px-8">
                    <div className="flex gap-8">
                      {/* First Column */}
                      <div className="flex flex-col gap-1">
                        {serviceLinks.slice(0, 3).map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#3FB9CB] transition-colors rounded whitespace-nowrap"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                      {/* Second Column */}
                      <div className="flex flex-col gap-1">
                        {serviceLinks.slice(3).map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#3FB9CB] transition-colors rounded whitespace-nowrap"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {navLinks.slice(1).map((link) => {
              // Handle About Us link with smooth scrolling
              if (link.href === '/#about-us') {
                return (
                  <a
                    key={link.href}
                    href="/#about-us"
                    onClick={(e) => {
                      e.preventDefault();
                      if (location !== '/') {
                        setLocation('/');
                        setTimeout(() => {
                          const section = document.getElementById('about-us');
                          if (section) {
                            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }, 100);
                      } else {
                        const section = document.getElementById('about-us');
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }
                    }}
                    className={`text-[13px] uppercase tracking-widest font-bold transition-all duration-200 relative group cursor-pointer whitespace-nowrap ${activeSection === 'about-us'
                      ? "text-[#3FB9CB]"
                      : "text-black hover:text-[#3FB9CB]"
                      }`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#3FB9CB] transition-all duration-300 ${activeSection === 'about-us'
                      ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                  </a>
                );
              }

              // Regular links
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] uppercase tracking-widest font-bold transition-all duration-200 relative group ${location === link.href && activeSection !== 'start-here' && activeSection !== 'about-us'
                    ? "text-[#3FB9CB]"
                    : "text-black hover:text-[#3FB9CB]"
                    }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#3FB9CB] transition-all duration-300 ${location === link.href && activeSection !== 'start-here' && activeSection !== 'about-us'
                    ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </Link>
              );
            })}
          </div>

          {/* Right side - Consultation Button */}
          <div className="hidden md:block">
            <a href="https://calendly.com/nikunj-eazytaxes/meeting-with-nikunj-eazytaxes" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#3FB9CB] hover:bg-[#34a0b0] text-white font-bold px-7 h-11 rounded-full text-sm uppercase tracking-wider shadow-lg shadow-[#3FB9CB]/20 transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-95">
                Consultation
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex flex-col text-right">
              <a href="mailto:contact@eazytaxes.com" className="text-[9px] text-slate-600 hover:text-[#3FB9CB]">contact@eazytaxes.com</a>
              <a href="tel:+12068860475" className="text-[9px] text-slate-600 hover:text-[#3FB9CB]">+1 206-886-0475</a>
            </div>
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
          {navLinks.map((link) => {
            // Special handling for About Us in mobile menu
            if (link.href === '/#about-us') {
              return (
                <a
                  key={link.href}
                  href="/#about-us"
                  className="text-base font-medium text-slate-700 hover:text-[#3FB9CB] py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    if (location !== '/') {
                      setLocation('/');
                      setTimeout(() => {
                        const section = document.getElementById('about-us');
                        if (section) section.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    } else {
                      const section = document.getElementById('about-us');
                      if (section) section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.label}
                </a>
              );
            }

            // Regular links
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-slate-700 hover:text-[#3FB9CB] py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="border-t border-slate-200 pt-4 mt-2">
            <a
              href="/#start-here"
              className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3 px-2 block hover:text-[#3FB9CB]"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                if (location !== '/') {
                  setLocation('/');
                  setTimeout(() => {
                    const section = document.getElementById('start-here');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  const section = document.getElementById('start-here');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Services
            </a>
            {serviceLinks.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="text-sm font-medium text-slate-600 hover:text-[#3FB9CB] py-2 px-2 block"
                onClick={() => setIsOpen(false)}
              >
                {service.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/start" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-brand-gradient text-white font-bold h-12 rounded-xl">
                Get Started
              </Button>
            </Link>
            <a href="https://calendly.com/nikunj-eazytaxes/meeting-with-nikunj-eazytaxes" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full border-slate-300 text-slate-700 font-bold h-12 rounded-xl">
                Consultation
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
