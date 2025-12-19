import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Mountain, Users, Award, Heart } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Experience = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const faqs = [
    {
      question: "What fitness level is required?",
      answer: "You should be comfortable riding 4-6 hours with significant climbing. If you can handle 1,500m elevation gain over 80km back home, you're ready. Support vehicle available for breaks. This is for experienced cyclists."
    },
    {
      question: "Do I need to bring my own bike?",
      answer: "We offer premium rentals ($350 CAD), or bring your own. Either way, we handle airport transfers and our mechanics keep everything running perfectly."
    },
    {
      question: "What if I'm traveling solo?",
      answer: "Most riders come solo and leave with lifelong cycling friends. Private room option available (+$800 CAD) or share with fellow riders."
    },
    {
      question: "What about dietary restrictions?",
      answer: "We accommodate vegetarian, vegan, gluten-free, and other dietary needs. Colombian cuisine is naturally diverse and adaptable."
    },
    {
      question: "How technical are the gravel sections?",
      answer: "Maintained roads, not singletrack. If you're comfortable on dirt roads and moderate washboard, you're fine. Road bikes with 28mm+ tires work well."
    },
    {
      question: "What's the weather like in January-February?",
      answer: "Peak dry season with daytime temps 18-28°C (65-80°F). Mornings cool, afternoons warm. We ride through multiple climate zones daily. Rain is rare."
    },
    {
      question: "Is travel insurance required?",
      answer: "Yes, comprehensive coverage including trip cancellation, medical expenses, and emergency evacuation. We recommend World Nomads or similar covering 'adventure sports.'"
    },
    {
      question: "Can I extend my stay in Colombia?",
      answer: "Absolutely. We can recommend extra days in Medellín or Cartagena. Many riders add a few days to explore independently."
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-b from-[#51829B] to-[#9BB0C1]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-white">
              The Complete Experience
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              More than just cycling—this is cultural immersion, culinary adventure, 
              and the friendships that form when riders share 11 days in the Andes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose This Tour */}
      <section className="py-20 md:py-28 bg-white texture-dots">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#51829B]">
            Why Choose This Tour
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Mountain,
                title: "Pro-Level Roads",
                desc: "These aren't tourist routes—they're where UCI teams train. Challenging climbs, technical descents, and pristine tarmac through coffee country."
              },
              {
                icon: Users,
                title: "Maximum 12 Riders",
                desc: "Small groups mean genuine connections. You're not a number in a peloton—you're part of a cycling family for 11 days."
              },
              {
                icon: Award,
                title: "Founded by Cycle Logic",
                desc: "20+ years organizing premium cycling tours. We know these roads, the local families, the best cafés. This is our passion."
              },
              {
                icon: Heart,
                title: "Cultural Depth",
                desc: "Coffee farm visits aren't photo ops—they're afternoons with families who've grown beans for generations. Real connections, real Colombia."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#EADFB4]/30 p-8 border-l-4 border-[#F6995C] hover:shadow-lg transition-shadow"
              >
                <item.icon className="h-12 w-12 text-[#F6995C] mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-3 text-[#51829B]">
                  {item.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* A Day on Tour */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#EADFB4] to-[#d4c89f] texture-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#51829B]">
              A Day on Tour
            </h2>
            <div className="bg-white p-8 md:p-12 shadow-lg">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-[#F6995C] font-bold text-lg flex-shrink-0">6:30 AM</div>
                  <div>
                    <h4 className="font-semibold text-[#51829B] mb-1">Fresh Coffee & Breakfast</h4>
                    <p className="text-slate-700">Colombian coffee and hearty breakfast at the mountain retreat</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#F6995C] font-bold text-lg flex-shrink-0">7:30 AM</div>
                  <div>
                    <h4 className="font-semibold text-[#51829B] mb-1">Ride Briefing</h4>
                    <p className="text-slate-700">Route overview, climb strategy, and regrouping points</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#F6995C] font-bold text-lg flex-shrink-0">8:00 AM</div>
                  <div>
                    <h4 className="font-semibold text-[#51829B] mb-1">The Riding</h4>
                    <p className="text-slate-700">60-100km through mountain passes, coffee plantations, and colonial villages. Support vehicle shadows the group.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#F6995C] font-bold text-lg flex-shrink-0">12:30 PM</div>
                  <div>
                    <h4 className="font-semibold text-[#51829B] mb-1">Lunch Stop</h4>
                    <p className="text-slate-700">Traditional Colombian meal at a local restaurant or finca</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#F6995C] font-bold text-lg flex-shrink-0">2:00 PM</div>
                  <div>
                    <h4 className="font-semibold text-[#51829B] mb-1">Cultural Activity</h4>
                    <p className="text-slate-700">Coffee farm visit, market exploration, or free time in colonial towns</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#F6995C] font-bold text-lg flex-shrink-0">5:00 PM</div>
                  <div>
                    <h4 className="font-semibold text-[#51829B] mb-1">Return & Recover</h4>
                    <p className="text-slate-700">Shower, relax, share stories with fellow riders</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#F6995C] font-bold text-lg flex-shrink-0">7:00 PM</div>
                  <div>
                    <h4 className="font-semibold text-[#51829B] mb-1">Dinner Together</h4>
                    <p className="text-slate-700">Family-style meals featuring regional specialties</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 md:py-28 bg-white texture-dots">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#51829B]">
              What Makes Us Different
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 bg-[#F6995C] text-white flex items-center justify-center font-bold text-2xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2 text-[#51829B]">
                    We Don't Do Tourist Traps
                  </h3>
                  <p className="text-slate-700">
                    No staged performances or sanitized experiences. The coffee farmer who shows you his plantation? 
                    His family has grown those beans for three generations. The market we visit? That's where locals shop.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 bg-[#9BB0C1] text-white flex items-center justify-center font-bold text-2xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2 text-[#51829B]">
                    Small Groups Are Non-Negotiable
                  </h3>
                  <p className="text-slate-700">
                    Maximum 12 riders. Period. This isn't about maximizing profit—it's about creating genuine friendships 
                    and giving you access to experiences impossible with 30+ people.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 bg-[#51829B] text-white flex items-center justify-center font-bold text-2xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2 text-[#51829B]">
                    The Riding Is World-Class
                  </h3>
                  <p className="text-slate-700">
                    UCI teams train here for a reason. These climbs, these roads, these vistas—they're legendary among 
                    serious cyclists. But with support vehicle, mechanical help, and experienced guides, they're accessible 
                    to any strong intermediate rider.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs - MOVED FROM BOOKING PAGE */}
      <section className="py-20 md:py-28 bg-[#EADFB4] texture-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#51829B]">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="bg-white border border-[#9BB0C1] px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-[#51829B]">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#51829B] text-white texture-grid relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F6995C] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9BB0C1] opacity-5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Colombia?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Three departures in January-February 2025. Limited to 12 riders per tour.
            </p>
            <Button 
              onClick={handleBookingClick}
              size="lg" 
              className="bg-[#F6995C] hover:bg-[#e88849] text-white text-lg px-10 py-7 rounded-none shadow-2xl hover:shadow-[#F6995C]/50 transition-all duration-300 transform hover:scale-105"
            >
              View Dates & Book Your Spot
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Experience;
