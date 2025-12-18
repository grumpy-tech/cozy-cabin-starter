import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      {/* Hero Section - Simplified */}
      <section className="relative py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">
              Get In Touch
            </h1>
            <p className="text-lg text-white/80">
              Ready to ride Colombia? Let's start the conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods - Clean 3-column */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Email */}
            <a 
              href="mailto:pedaltheworld@gmail.com"
              className="bg-slate-50 hover:bg-amber-50 border border-slate-200 rounded-lg p-6 text-center transition-all hover:shadow-lg group"
            >
              <Mail className="h-10 w-10 text-amber-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-sm text-slate-600 break-all">pedaltheworld@gmail.com</p>
            </a>

            {/* Phone */}
            <a 
              href="tel:+12503744515"
              className="bg-slate-50 hover:bg-amber-50 border border-slate-200 rounded-lg p-6 text-center transition-all hover:shadow-lg group"
            >
              <Phone className="h-10 w-10 text-amber-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-sm text-slate-600">250-374-4515</p>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/12503744515"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 hover:bg-amber-50 border border-slate-200 rounded-lg p-6 text-center transition-all hover:shadow-lg group"
            >
              <MessageCircle className="h-10 w-10 text-amber-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-lg font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm text-slate-600">+1-250-374-4515</p>
            </a>
          </div>
        </div>
      </section>

      {/* Simple Contact Form - SIMPLIFIED as requested */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold mb-6 text-center">Send a Message</h2>
              
              <form className="space-y-5">
                {/* Name */}
                <div>
                  <Label htmlFor="name" className="text-sm font-medium mb-2 block">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="h-11"
                  />
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-2 block">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com"
                    className="h-11"
                  />
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium mb-2 block">Phone</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+1 (555) 123-4567"
                    className="h-11"
                  />
                </div>

                {/* Preferred Dates */}
                <div>
                  <Label htmlFor="dates" className="text-sm font-medium mb-2 block">Preferred Tour Dates (optional)</Label>
                  <Input 
                    id="dates" 
                    placeholder="e.g., January 2025"
                    className="h-11"
                  />
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-sm font-medium mb-2 block">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your cycling experience, questions about the tour, or anything else..."
                    className="min-h-[120px] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white h-12 text-base font-semibold"
                >
                  Send Message
                </Button>

                <p className="text-xs text-slate-500 text-center mt-3">
                  We'll respond within 24 hours
                </p>
              </form>
            </div>

            {/* Quick Stats Below Form */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-slate-800">24hr</div>
                <div className="text-xs text-slate-600">Response Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800">200+</div>
                <div className="text-xs text-slate-600">Happy Riders</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800">4.9/5</div>
                <div className="text-xs text-slate-600">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;