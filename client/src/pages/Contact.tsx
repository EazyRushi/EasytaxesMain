import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";
import { Loader2, Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Contact() {
  const mutation = useSubmitContact();
  const [location] = useLocation();
  
  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      serviceInterest: "General Inquiry"
    }
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get('service');
    const plan = params.get('plan');
    
    if (service) {
      form.setValue('serviceInterest', service);
    }
    if (plan) {
      form.setValue('subject', `Interested in ${plan}`);
      form.setValue('message', `I would like to know more about the ${plan} plan for ${service}.`);
    }

    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  const onSubmit = (data: InsertContactInquiry) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Have questions? We're here to help. Reach out and we'll respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">Email</h3>
              <p className="text-slate-600 text-sm">support@eazytaxes.com</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">Phone</h3>
              <p className="text-slate-600 text-sm">+1 (555) 123-4567</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">Location</h3>
              <p className="text-slate-600 text-sm">New York, NY</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">Hours</h3>
              <p className="text-slate-600 text-sm">Mon-Fri: 9AM-6PM EST</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Send us a Message</h2>
              <p className="text-slate-600">Fill out the form below and we'll get back to you shortly</p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-slate-200">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-semibold">Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="h-12 rounded-lg border-slate-300 focus:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-semibold">Email Address *</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" className="h-12 rounded-lg border-slate-300 focus:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="serviceInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-semibold">Service Interest</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value ?? undefined}>
                            <FormControl>
                              <SelectTrigger className="h-12 rounded-lg border-slate-300">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Tax & Compliance">Tax & Compliance</SelectItem>
                              <SelectItem value="Tax Resolution">Tax Resolution</SelectItem>
                              <SelectItem value="Assurance & SOC 2">Assurance & SOC 2</SelectItem>
                              <SelectItem value="CFO & Advisory">CFO & Advisory</SelectItem>
                              <SelectItem value="Valuations">Valuations (409A)</SelectItem>
                              <SelectItem value="US Formation">US Formation & Banking</SelectItem>
                              <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-semibold">Subject *</FormLabel>
                          <FormControl>
                            <Input placeholder="How can we help?" className="h-12 rounded-lg border-slate-300 focus:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold">Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your situation and how we can help..." 
                            className="min-h-[150px] rounded-lg resize-none border-slate-300 focus:border-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={mutation.isPending}
                    className="w-full h-14 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl text-base"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending Message...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
