import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll get back to you within 24 hours.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      {/* Hero Section - Compact */}
      <section className="relative py-12 bg-gradient-to-b from-[#51829B] to-[#9BB0C1]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">
              Let's Talk Colombia
            </h1>
            <p className="text-lg text-white/90">
              Questions about the tour? Ready to book? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION - Side by Side, No Scrolling */}
      <section className="py-12 md:py-16 bg-white texture-dots">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              
              {/* LEFT SIDE - Contact Methods Stacked */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-[#51829B]">
                    Get In Touch
                  </h2>
                  <p className="text-slate-600 mb-8">
                    Choose your preferred way to reach us. We typically respond within 24 hours.
                  </p>
                </div>

                {/* Email */}
                <div className="bg-[#EADFB4]/30 p-6 border-l-4 border-[#F6995C] hover:bg-[#EADFB4]/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#F6995C] p-3 text-white">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-semibold mb-2 text-[#51829B]">
                        Email Us
                      </h3>
                      <p className="text-sm text-slate-600 mb-3">
                        Best for detailed questions and booking inquiries
                      </p>
                      <a 
                        href="mailto:pedaltheworld@gmail.com"
                        className="text-[#51829B] font-medium hover:text-[#F6995C] transition-colors inline-flex items-center gap-2"
                      >
                        pedaltheworld@gmail.com
                        <Send className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-[#EADFB4]/30 p-6 border-l-4 border-[#51829B] hover:bg-[#EADFB4]/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#51829B] p-3 text-white">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-semibold mb-2 text-[#51829B]">
                        Call Us
                      </h3>
                      <p className="text-sm text-slate-600 mb-3">
                        Speak directly with our team
                      </p>
                      <a 
                        href="tel:+12503744515"
                        className="text-[#51829B] font-medium hover:text-[#F6995C] transition-colors inline-flex items-center gap-2"
                      >
                        +1 (250) 374-4515
                        <Phone className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="bg-[#EADFB4]/30 p-6 border-l-4 border-[#9BB0C1] hover:bg-[#EADFB4]/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#9BB0C1] p-3 text-white">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-semibold mb-2 text-[#51829B]">
                        WhatsApp
                      </h3>
                      <p className="text-sm text-slate-600 mb-3">
                        Quick messages and real-time chat
                      </p>
                      <a 
                        href="https://wa.me/12503744515"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#51829B] font-medium hover:text-[#F6995C] transition-colors inline-flex items-center gap-2"
                      >
                        Message on WhatsApp
                        <MessageCircle className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Info */}
                <div className="bg-[#51829B]/5 p-6 border border-[#9BB0C1]">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-[#F6995C] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading text-lg font-semibold mb-2 text-[#51829B]">
                        Based in Kelowna, BC
                      </h3>
                      <p className="text-sm text-slate-600">
                        Tours operate in Medellín, Colombia
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT SIDE - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 shadow-lg border border-[#9BB0C1]"
              >
                <h2 className="font-heading text-2xl font-bold mb-2 text-[#51829B]">
                  Send a Message
                </h2>
                <p className="text-slate-600 mb-6">
                  Fill out the form and we'll respond within 24 hours
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-[#9BB0C1] focus:ring-[#51829B] focus:border-[#51829B]"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-[#9BB0C1] focus:ring-[#51829B] focus:border-[#51829B]"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-[#9BB0C1] focus:ring-[#51829B] focus:border-[#51829B]"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full border-[#9BB0C1] focus:ring-[#51829B] focus:border-[#51829B] resize-none"
                      placeholder="Tell us about your experience level, preferred tour dates, or any questions you have..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#F6995C] hover:bg-[#e88849] text-white rounded-none shadow-md"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="py-8 bg-[#EADFB4] texture-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-slate-700">
              <strong className="text-[#51829B]">Response Time:</strong> Within 24 hours (often much faster) • 
              <strong className="text-[#51829B] ml-4">Time Zone:</strong> Pacific Time (Canada/US West Coast)
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
