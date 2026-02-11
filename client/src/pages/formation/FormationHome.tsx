import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function FormationHome() {
  const [selectedPackage, setSelectedPackage] = useState("standard");

  const packages = [
    {
      id: "basic",
      name: "Basic",
      price: 149,
      features: ["State filing", "Operating Agreement", "Email support", "Lifetime company alerts"],
      bestFor: "Budget-conscious startups"
    },
    {
      id: "standard",
      name: "Standard",
      price: 299,
      popular: true,
      features: ["Everything in Basic", "EIN (Federal Tax ID)", "1 year Registered Agent", "Banking resolution kit", "Priority processing", "Phone support"],
      bestFor: "Serious business owners"
    },
    {
      id: "premium",
      name: "Premium",
      price: 499,
      features: ["Everything in Standard", "Same-day filing", "2 years Registered Agent", "Custom Operating Agreement", "BOI filing included", "Annual report reminder"],
      bestFor: "Professionals & consultants"
    },
    {
      id: "platinum",
      name: "Platinum",
      price: 799,
      features: ["Everything in Premium", "3 years Registered Agent", "S-Corp election assistance", "Trademark search", "Tax planning session", "Dedicated account manager"],
      bestFor: "High-growth businesses"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fcfdfd] to-slate-50">
      <Navbar />
      <div className="bg-gradient-to-r from-[#3FB9CB] to-[#34a0b0] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold mb-4 flex items-center justify-center gap-2">
            <Check className="w-4 h-4" /> Starting at $149 + State Fees
          </p>
          <h1 className="text-5xl sm:text-6xl font-black mb-6 tracking-tight">Form Your LLC in 10 Minutes</h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Simple, fast, and affordable business formation. We handle all the paperwork and state filings.
          </p>
          <Link href="/formation/get-started">
            <Button className="bg-white text-[#3FB9CB] hover:bg-slate-100 font-bold px-10 py-7 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all">
              Start My LLC
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Choose Your Package</h2>
          <p className="text-xl text-slate-600">All packages include state filing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-[2.5rem] p-10 flex flex-col cursor-pointer transition-all ${
                selectedPackage === pkg.id
                  ? 'bg-white text-slate-900 shadow-2xl border-2 border-slate-900 scale-105 z-10'
                  : 'bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-lg'
              }`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-bold border-2 border-slate-900 z-10 whitespace-nowrap">
                  Most Popular
                </div>
              )}
              
              <div className="mb-2">
                <h3 className="text-xl font-bold mb-2 text-slate-900">{pkg.name}</h3>
                <p className="text-sm h-10 text-slate-500">{pkg.bestFor}</p>
              </div>

              <div className="mb-8">
                <div className="text-5xl font-bold text-slate-900">
                  ${pkg.price}
                </div>
                <p className="text-sm text-slate-500 mt-1">+ state fees</p>
              </div>

              <Button className={`w-full h-14 rounded-xl font-bold text-base transition-all duration-300 mb-8 ${
                selectedPackage === pkg.id
                  ? 'bg-slate-900 hover:bg-slate-800 text-white border-0'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border-0'
              }`}>
                {selectedPackage === pkg.id ? '✓ Selected' : `Select ${pkg.name}`}
              </Button>

              <div className="h-px w-full mb-8 bg-slate-100"></div>

              <div className="flex-grow">
                <p className="text-sm font-semibold mb-6 text-slate-900">
                  What you will get
                </p>
                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-slate-100 text-slate-500">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-slate-600">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/formation/get-started">
            <Button className="bg-[#3FB9CB] hover:bg-[#34a0b0] font-bold px-16 py-7 text-xl rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Continue
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
