import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-slate-800 pt-20 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-8 group">
              <img src="/logo.jpg" alt="Eazytaxes Logo" className="h-10 w-auto object-contain bg-white rounded-md p-0.5" />
            </Link>
            <p className="text-slate-400 text-base leading-relaxed max-w-sm font-medium">
              Redefining corporate financial services through precision, technology, and absolute transparency.
              US-based expertise with a global perspective.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-[11px] uppercase tracking-[0.2em] mb-8">Services</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/tax-compliance" className="hover:text-emerald-400 transition-all uppercase tracking-wider">Tax & Compliance</Link></li>
              <li><a href="https://resolution.eazytaxes.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-all uppercase tracking-wider">Tax Resolution</a></li>
              <li><a href="https://soc.eazytaxes.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-all uppercase tracking-wider">Assurance & SOC 2</a></li>
              <li><a href="https://cfo.eazytaxes.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-all uppercase tracking-wider">CFO & Advisory</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-[11px] uppercase tracking-[0.2em] mb-8">Company</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/start" className="hover:text-emerald-400 transition-all uppercase tracking-wider">Start Here</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-all uppercase tracking-wider">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-all uppercase tracking-wider">Privacy</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-all uppercase tracking-wider">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500 text-center md:text-left">
            All services are provided by Eazytaxes Inc., a US-based tax, assurance, and advisory firm.
          </p>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600">
            © {new Date().getFullYear()} Eazytaxes Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
