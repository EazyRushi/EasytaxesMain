import { useLocation } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Onboarding() {
  const searchParams = new URLSearchParams(window.location.search);
  const service = searchParams.get("service") || "Eazytaxes";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full"
        >
          <Card className="p-12 border-slate-200 shadow-2xl rounded-3xl bg-white text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 text-green-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Welcome to Onboarding
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto">
              You have successfully selected <span className="font-bold text-primary capitalize">{service.replace("-", " ")}</span>. 
              Our team has been notified and you will receive an invitation to our secure portal shortly.
            </p>

            <div className="bg-slate-50 p-6 rounded-xl text-left border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-3">Next Steps:</h3>
              <ul className="space-y-3">
                {["Check your email for login credentials", "Upload requested documents to the portal", "Schedule your kickoff call"].map((step, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
