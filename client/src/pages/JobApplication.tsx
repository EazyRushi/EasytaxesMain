import { useState } from "react";
import { useRoute } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Upload, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

// Job-specific screening questions
const screeningQuestions: Record<string, string[]> = {
  "business-development-intern": [
    "Why are you interested in business development, specifically in the accounting and IT services industry?",
    "Describe any experience you have with content creation, social media marketing, or proposal writing.",
    "How comfortable are you with reaching out to potential clients via email and LinkedIn?",
    "What are your career goals for the next 2-3 years?"
  ],
  "business-development-manager": [
    "Describe your most successful business development campaign or client acquisition. What was your strategy and what results did you achieve?",
    "How do you approach LinkedIn marketing for B2B services? Share specific tactics you've used.",
    "What is your experience with international clients, particularly in USA or UK markets?",
    "How do you handle rejection and maintain motivation in sales-driven roles?",
    "What is your expected salary and notice period?"
  ],
  "us-tax-accountant": [
    "How many years of US tax preparation experience do you have, and what types of returns have you prepared (1040, 1120, 1065, etc.)?",
    "Which tax software are you proficient in?",
    "Are you currently an Enrolled Agent or working towards the EA credential?",
    "Describe your experience with a complex tax situation you handled and how you resolved it.",
    "Are you comfortable working flexible hours during US tax season (January-April)?"
  ],
  "us-tax-resolution-specialist": [
    "Describe your experience with IRS tax resolution cases. What types of cases have you handled (OIC, installment agreements, audit defense, etc.)?",
    "Are you currently an Enrolled Agent or CPA? If EA, what is your PTIN number?",
    "What is your success rate with Offer in Compromise submissions?",
    "Describe a particularly challenging tax resolution case you handled and the outcome.",
    "How do you stay current with changes to IRS collection procedures and policies?",
    "What is your expected salary and notice period?"
  ],
  "us-tax-preparation-specialist---senior-accountant": [
    "What is your total experience in US tax preparation, and what is the most complex type of return you've prepared?",
    "Do you hold a CPA, EA, or CA credential? Please specify.",
    "Describe your experience with team leadership or mentoring junior accountants.",
    "What types of specialized tax areas are you most experienced in (partnerships, trusts, international, etc.)?",
    "How do you approach tax planning conversations with clients?",
    "What is your expected salary and current notice period?"
  ]
};

export default function JobApplication() {
  const [, params] = useRoute("/careers/:jobTitle/apply");
  const jobSlug = params?.jobTitle || "";
  const jobTitle = jobSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  const questions = screeningQuestions[jobSlug] || [];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    resume: null as File | null,
    coverLetter: null as File | null,
    portfolio: "",
    currentLocation: "",
    noticePeriod: "",
    expectedSalary: "",
    screeningAnswers: questions.map(() => ""),
    additionalInfo: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'resume' | 'coverLetter') => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, [field]: e.target.files[0] });
    }
  };

  const handleScreeningAnswer = (index: number, value: string) => {
    const newAnswers = [...formData.screeningAnswers];
    newAnswers[index] = value;
    setFormData({ ...formData, screeningAnswers: newAnswers });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formDataToSend = new FormData();
    formDataToSend.append("jobTitle", jobTitle);
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("linkedin", formData.linkedin);
    formDataToSend.append("portfolio", formData.portfolio);
    formDataToSend.append("currentLocation", formData.currentLocation);
    formDataToSend.append("noticePeriod", formData.noticePeriod);
    formDataToSend.append("expectedSalary", formData.expectedSalary);
    formDataToSend.append("additionalInfo", formData.additionalInfo);

    // Add screening questions and answers
    questions.forEach((question, index) => {
      formDataToSend.append(`question_${index + 1}`, question);
      formDataToSend.append(`answer_${index + 1}`, formData.screeningAnswers[index]);
    });

    if (formData.resume) formDataToSend.append("resume", formData.resume);
    if (formData.coverLetter) formDataToSend.append("coverLetter", formData.coverLetter);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${apiUrl}/api/job-application`, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.message || "Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans">
        <Navbar />
        <div className="max-w-2xl mx-auto px-4 py-24 text-center">
          <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Application Submitted!</h1>
          <p className="text-xl text-slate-600 mb-8">
            Thank you for applying to the {jobTitle} position. We'll review your application and get back to you soon.
          </p>
          <Link href="/careers">
            <Button className="bg-primary hover:bg-primary/90">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Careers
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      <section className="relative py-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3FB9CB 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/careers">
            <Button variant="ghost" className="mb-8 text-slate-700 hover:text-primary hover:bg-cyan-50 -ml-4">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Careers
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
            Apply for <span className="text-primary">{jobTitle}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 mb-4 leading-relaxed">
            Fill out the form below to submit your application. We'll review it and get back to you within 3-5 business days.
          </p>
          <p className="text-sm text-slate-600">
            All fields marked with <span className="text-primary font-semibold">*</span> are required. Please answer the screening questions thoughtfully.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-8">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Personal Information</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="John Doe"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="mt-1"
                      title="Please enter a valid email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="mt-1"
                      title="Please enter a valid phone number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="currentLocation">Current Location *</Label>
                    <Input
                      id="currentLocation"
                      required
                      value={formData.currentLocation}
                      onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
                      placeholder="Nashik, Maharashtra"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="linkedin">LinkedIn Profile</Label>
                    <Input
                      id="linkedin"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      placeholder="https://linkedin.com/in/johndoe"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="portfolio">Portfolio / Website</Label>
                    <Input
                      id="portfolio"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      placeholder="https://yourportfolio.com"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="noticePeriod">Notice Period *</Label>
                    <Input
                      id="noticePeriod"
                      required
                      value={formData.noticePeriod}
                      onChange={(e) => setFormData({ ...formData, noticePeriod: e.target.value })}
                      placeholder="Immediate / 30 days / 60 days"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="expectedSalary">Expected Salary *</Label>
                    <Input
                      id="expectedSalary"
                      required
                      value={formData.expectedSalary}
                      onChange={(e) => setFormData({ ...formData, expectedSalary: e.target.value })}
                      placeholder="₹5,00,000 per annum"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Documents</h3>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="resume">Resume / CV * (PDF, DOC, DOCX - Max 5MB)</Label>
                  <div className="mt-2">
                    <label htmlFor="resume" className="flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-slate-300 border-dashed rounded-lg appearance-none cursor-pointer hover:border-primary/50 focus:outline-none">
                      <div className="flex flex-col items-center space-y-2">
                        <Upload className="w-8 h-8 text-slate-400" />
                        <span className="text-sm text-slate-600">
                          {formData.resume ? formData.resume.name : "Click to upload resume"}
                        </span>
                      </div>
                      <input
                        id="resume"
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        required
                        onChange={(e) => handleFileChange(e, 'resume')}
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <Label htmlFor="coverLetter">Cover Letter (PDF, DOC, DOCX - Max 5MB)</Label>
                  <div className="mt-2">
                    <label htmlFor="coverLetter" className="flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-slate-300 border-dashed rounded-lg appearance-none cursor-pointer hover:border-primary/50 focus:outline-none">
                      <div className="flex flex-col items-center space-y-2">
                        <Upload className="w-8 h-8 text-slate-400" />
                        <span className="text-sm text-slate-600">
                          {formData.coverLetter ? formData.coverLetter.name : "Click to upload cover letter (optional)"}
                        </span>
                      </div>
                      <input
                        id="coverLetter"
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleFileChange(e, 'coverLetter')}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Screening Questions */}
            {questions.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Screening Questions</h3>
                <div className="space-y-6">
                  {questions.map((question, index) => (
                    <div key={index}>
                      <Label htmlFor={`question-${index}`} className="text-base">
                        {index + 1}. {question} *
                      </Label>
                      <Textarea
                        id={`question-${index}`}
                        rows={4}
                        required
                        value={formData.screeningAnswers[index]}
                        onChange={(e) => handleScreeningAnswer(index, e.target.value)}
                        placeholder="Please provide a detailed answer..."
                        className="mt-2"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Information */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Additional Information</h3>
              <div>
                <Label htmlFor="additionalInfo">Anything else you'd like us to know?</Label>
                <Textarea
                  id="additionalInfo"
                  rows={6}
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                  placeholder="Tell us about any additional skills, certifications, achievements, or why you're excited about joining Eazy Taxes..."
                  className="mt-2"
                />
              </div>
            </div>

            <div className="pt-4">
              {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  {error}
                </div>
              )}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 h-14 text-lg font-bold"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
