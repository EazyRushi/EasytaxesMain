import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Recommendation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fcfdfd] to-slate-50">
      <Navbar />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-white mb-8">
            <div className="text-center mb-8">
              <div className="inline-block bg-[#3FB9CB] text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
                Recommended
              </div>
              <h1 className="text-4xl font-black text-slate-900 mb-4">We Recommend: LLC</h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                An LLC gives you liability protection without corporate complexity. Perfect for freelancers, consultants, small businesses, and real estate investors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Benefits</h3>
                <div className="space-y-3">
                  {[
                    "Personal asset protection",
                    "Pass-through taxation (no double tax)",
                    "Flexible profit distribution",
                    "Minimal paperwork and maintenance",
                    "Can elect S-Corp tax status later"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#3FB9CB] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Best For</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Freelancers & consultants</li>
                  <li>• E-commerce & online businesses</li>
                  <li>• Real estate investors</li>
                  <li>• Service businesses</li>
                  <li>• Small retail shops</li>
                </ul>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-[#3FB9CB] to-[#34a0b0] text-white rounded-lg p-8 mb-6">
              <p className="text-sm font-semibold mb-2">Starting at</p>
              <p className="text-5xl font-black mb-2">$149</p>
              <p className="text-sm">+ state fees</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/formation/state-selector">
                <Button className="bg-[#3FB9CB] hover:bg-[#34a0b0] font-bold px-12 py-6 text-lg">
                  Start My LLC - $149
                </Button>
              </Link>
              <Button variant="outline" className="font-bold px-12 py-6 text-lg">
                Compare All Entity Types
              </Button>
            </div>

            <div className="text-center mt-6">
              <Link href="/formation/get-started">
                <a className="text-[#3FB9CB] hover:underline">← Retake Quiz</a>
              </Link>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
