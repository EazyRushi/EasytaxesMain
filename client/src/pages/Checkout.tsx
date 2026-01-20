import { useLocation } from "wouter";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader2, ShieldCheck, CreditCard } from "lucide-react";
import { useEffect, useState } from "react";

export default function Checkout() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  
  const service = searchParams.get("service") || "Unknown Service";
  const variant = searchParams.get("variant") || "Standard";
  const useCase = searchParams.get("case");

  const [isLoading, setIsLoading] = useState(false);

  // Simulate payment redirect
  const handlePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = `/onboarding?service=${service}`;
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Secure Checkout</h1>
            <p className="text-slate-500">Complete your purchase to begin onboarding.</p>
          </div>

          <Card className="p-8 border-slate-200 shadow-xl rounded-2xl bg-white">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
              <div className="w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center text-white">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Service</p>
                <h3 className="font-bold text-slate-900 capitalize text-lg">{service.replace("-", " ")}</h3>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Package Variant</span>
                <span className="font-medium text-slate-900 capitalize">{variant}</span>
              </div>
              {useCase && (
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Selected Case</span>
                  <span className="font-medium text-slate-900 capitalize">{useCase}</span>
                </div>
              )}
              <div className="flex justify-between items-center text-sm pt-4 border-t border-slate-100">
                <span className="font-bold text-slate-900 text-lg">Total</span>
                <span className="font-bold text-primary text-xl">Calculated at Onboarding</span>
              </div>
            </div>

            <Button 
              onClick={handlePayment} 
              disabled={isLoading}
              className="w-full h-14 bg-brand-gradient text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all"
            >
              {isLoading ? (
                <><Loader2 className="mr-2 animate-spin" /> Processing...</>
              ) : (
                <><CreditCard className="mr-2 w-5 h-5" /> Proceed to Payment</>
              )}
            </Button>
            
            <p className="text-xs text-center text-slate-400 mt-6 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Secure 256-bit encrypted payment
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
