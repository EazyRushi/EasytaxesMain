import { useState } from "react";
import { useLocation } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function GetStarted() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    owners: "",
    revenue: "",
    liability: "",
    taxes: ""
  });

  const questions = [
    {
      id: "owners",
      question: "How many owners will your business have?",
      options: [
        { value: "solo", label: "Just me (sole owner)" },
        { value: "2-5", label: "2-5 people" },
        { value: "6+", label: "6+ people" },
        { value: "nonprofit", label: "It's a nonprofit/charity" }
      ]
    },
    {
      id: "revenue",
      question: "What's your expected annual revenue?",
      options: [
        { value: "0-50k", label: "Under $50,000" },
        { value: "50-250k", label: "$50,000 - $250,000" },
        { value: "250k-1m", label: "$250,000 - $1,000,000" },
        { value: "1m+", label: "Over $1,000,000" }
      ]
    },
    {
      id: "liability",
      question: "How important is personal liability protection?",
      options: [
        { value: "critical", label: "Critical - I need maximum protection" },
        { value: "important", label: "Important - Standard protection is fine" },
        { value: "moderate", label: "Moderate - Some protection needed" },
        { value: "low", label: "Low priority" }
      ]
    },
    {
      id: "taxes",
      question: "What's your tax priority?",
      options: [
        { value: "simple", label: "Keep it simple" },
        { value: "savings", label: "Maximize tax savings" },
        { value: "flexible", label: "Maximum flexibility" },
        { value: "investors", label: "Attract investors" }
      ]
    }
  ];

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
    if (step < 4) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => setLocation("/formation/recommendation"), 300);
    }
  };

  const progress = (step / 4) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fcfdfd] to-slate-50">
      <Navbar />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Progress value={progress} className="mb-4" />
            <p className="text-sm text-slate-600 font-semibold">Step {step} of 4</p>
          </div>

          <Card className="p-8 bg-white">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-black text-slate-900 mb-4">
                What's the Best Business Structure for You?
              </h1>
              <p className="text-slate-600">Answer 4 quick questions to find your perfect match</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                Question {step} of 4
              </h2>
              <p className="text-xl text-slate-700 mb-6 text-center">
                {questions[step - 1].question}
              </p>

              <div className="space-y-4">
                {questions[step - 1].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(questions[step - 1].id, option.value)}
                    className="w-full p-4 text-left border-2 border-slate-200 rounded-lg hover:border-[#3FB9CB] hover:bg-slate-50 transition-all"
                  >
                    <span className="text-lg text-slate-900">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {step > 1 && (
              <div className="text-center">
                <Button
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                >
                  ← Back
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
