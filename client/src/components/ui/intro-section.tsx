import { useEffect, useState, useRef } from "react";

export function IntroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedNumber = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [isVisible, end]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          Professional Tax Services You Can Trust
        </h2>
        <p className="text-xl text-slate-600 leading-relaxed mb-16">
          We provide comprehensive tax and accounting solutions for individuals and businesses, 
          ensuring compliance while maximizing your financial outcomes.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#3FB9CB] mb-2">
              <AnimatedNumber end={15} suffix="+" />
            </div>
            <div className="text-sm uppercase tracking-wider text-slate-400 font-semibold">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#3FB9CB] mb-2">
              <AnimatedNumber end={100} suffix="%" />
            </div>
            <div className="text-sm uppercase tracking-wider text-slate-400 font-semibold">Secure Filing</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#3FB9CB] mb-2">
              <AnimatedNumber end={98} suffix="%" />
            </div>
            <div className="text-sm uppercase tracking-wider text-slate-400 font-semibold">Client Retention</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#3FB9CB] mb-2">
              CPA/IRS
            </div>
            <div className="text-sm uppercase tracking-wider text-slate-400 font-semibold">Certified Team</div>
          </div>
        </div>
      </div>
    </section>
  );
}
