import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const suggestedQuestions = [
    "Is this tour right for my fitness level?",
    "Can you accommodate dietary restrictions?",
    "Do you offer private or custom tour dates?",
    "What's the best time of year to visit?",
    "Can I extend my stay in Colombia?",
    "How technical are the gravel sections?",
    "What's included vs. what should I budget for?",
    "Solo traveler questions?"
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Talk Cycling in Colombia
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Whether you're ready to book or just curious about what makes these tours special, we're here to answer every question. Every tour begins with a conversation—let's start yours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-2">Email</h3>
              <a 
                href="mailto:pedaltheworld@gmail.com"
                className="text-primary hover:underline block mb-3"
              >
                pedaltheworld@gmail.com
              </a>
              <p className="text-sm text-muted-foreground mb-2">Best for:</p>
              <p className="text-sm">Detailed questions, itinerary requests</p>
              <p className="text-xs text-muted-foreground mt-2">Response: Within 24 hours</p>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-2">Phone</h3>
              <a 
                href="tel:+12503744515"
                className="text-primary hover:underline block mb-3"
              >
                250-374-4515
              </a>
              <p className="text-sm text-muted-foreground mb-2">Best for:</p>
              <p className="text-sm">Quick questions, booking confirmation</p>
              <p className="text-xs text-muted-foreground mt-2">Mon-Fri 9AM-6PM, Sat 10AM-4PM MT</p>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-2">WhatsApp</h3>
              <a 
                href="https://wa.me/12503744515"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline block mb-3"
              >
                +1-250-374-4515
              </a>
              <p className="text-sm text-muted-foreground mb-2">Best for:</p>
              <p className="text-sm">International inquiries, quick photos</p>
              <p className="text-xs text-muted-foreground mt-2">Same hours as phone</p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="font-heading text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="John Doe" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="tour-date">Tour Date Interest</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a tour date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tour1">Tour 1: Jan 14-24</SelectItem>
                      <SelectItem value="tour2">Tour 2: Jan 27-Feb 6</SelectItem>
                      <SelectItem value="tour3">Tour 3: Feb 11-21</SelectItem>
                      <SelectItem value="notsure">Not sure yet</SelectItem>
                      <SelectItem value="custom">Custom date inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Tell Us About Your Tour</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Ask us anything about the tour, your fitness level, travel plans, or Colombia..."
                    className="mt-2 min-h-[150px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Start the Conversation
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We typically respond within 24 hours. Check spam if you don't see our reply.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What To Ask Us */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">
              Not Sure What to Ask?
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Here are some questions other riders often have:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {suggestedQuestions.map((question, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-background p-4 rounded-lg border border-border"
                >
                  <p className="text-sm">"{question}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About / Credibility */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">
              About Cycle Logic Colombia Tours
            </h2>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg leading-relaxed mb-6">
                We're not a faceless tour company—we're passionate cyclists who fell in love with Colombian roads and decided to share them. Founded by riders who call Colombia home part of the year, we've spent years developing relationships with coffee farmers, hotel owners, and local cycling communities.
              </p>
              <p className="text-lg leading-relaxed">
                These aren't routes pulled from a guidebook; they're roads we train on, climbs we've tested dozens of times, gravel descents we've refined to perfection. Every guide speaks fluent Spanish and English, holds First Aid certification, and more importantly, genuinely loves introducing people to Colombia's cycling culture. We're riders first, tour operators second—and it shows in every detail of the experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2018</div>
                <p className="text-sm text-muted-foreground">Established</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <p className="text-sm text-muted-foreground">Riders Hosted</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">12</div>
                <p className="text-sm text-muted-foreground">Max Group Size</p>
              </div>
            </div>
            <div className="mt-8 text-center space-y-2 text-sm text-muted-foreground">
              <p>✓ Canadian-based company (registered in BC)</p>
              <p>✓ All guides certified in Wilderness First Aid</p>
              <p>✓ Fully insured and licensed tour operator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-semibold mb-6">
              Not Ready to Contact? Explore More:
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/experience">
                <Button variant="outline">View Complete Tour Experience</Button>
              </Link>
              <Link to="/booking">
                <Button variant="outline">Check Tour Dates & Pricing</Button>
              </Link>
              <Link to="/gallery">
                <Button variant="outline">See Photo Gallery</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Response Expectations */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-semibold mb-4">Our Commitment to You</h3>
            <p className="text-muted-foreground mb-4">
              We typically respond within 24 hours, often much faster. If you're emailing on a weekend, we'll reply by Monday morning (Mountain Time).
            </p>
            <p className="text-sm text-muted-foreground">
              Don't see our response? Check your spam folder or try calling. For urgent matters (within 2 weeks of tour departure), always call or WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
