import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Mail, Phone, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Booking = () => {
  const tours = [
    {
      id: 1,
      dates: "January 14-24, 2025",
      spots: 4,
      season: "Peak dry season, ideal conditions",
    },
    {
      id: 2,
      dates: "January 27 - February 6, 2025",
      spots: 6,
      season: "Excellent riding weather continues",
    },
    {
      id: 3,
      dates: "February 11-21, 2025",
      spots: 8,
      season: "Late dry season, fewer crowds",
    }
  ];

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
      
      {/* Hero with Price */}
      <section className="relative py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 text-white">
              Book Your Adventure
            </h1>
            <p className="text-xl md:text-2xl text-amber-400 font-semibold mb-6">
              $5,600 CAD per person
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Includes accommodation, all meals, guided tours, cultural activities, 
              airport transfers, and full vehicle support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tour Dates - Clean Cards */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            Available Tour Dates
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 border-2 border-slate-200 rounded-xl p-6 hover:border-amber-500 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                    Tour {tour.id}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    tour.spots <= 4 ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
                  }`}>
                    {tour.spots} spots left
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{tour.dates}</h3>
                <p className="text-sm text-slate-600 mb-4">{tour.season}</p>
                <div className="text-2xl font-bold text-slate-900 mb-2">$5,600 CAD</div>
                <p className="text-xs text-slate-500">per person</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included - Simple List */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
              What's Included
            </h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 bg-white p-8 rounded-xl shadow-sm">
              {[
                "11 nights mountain retreat accommodation",
                "All meals (breakfast, lunch, dinner)",
                "9 days guided cycling with support vehicle",
                "Airport transfers from Medellín",
                "All cultural activities and tours",
                "Coffee farm visits and tastings",
                "Professional English-speaking guides",
                "Mechanical support throughout"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center mt-6 text-sm text-slate-600">
              <strong>Not included:</strong> Flights to/from Colombia, travel insurance (required), 
              bike rental ($350 CAD optional), personal expenses
            </p>
          </div>
        </div>
      </section>

      {/* Booking Process - Simplified */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
              How to Book
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: 1, title: "Contact Us", desc: "$1,000 deposit secures your spot" },
                { step: 2, title: "Registration", desc: "Complete rider form within 7 days" },
                { step: 3, title: "Final Payment", desc: "Balance due 60 days before tour" },
                { step: 4, title: "Get Ready", desc: "Receive prep materials & connect with riders" }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-slate-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Ride Colombia?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Contact us to check availability and reserve your spot. Tours fill 8+ weeks in advance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:pedaltheworld@gmail.com">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white gap-2">
                  <Mail className="h-5 w-5" />
                  Email Us to Book
                </Button>
              </a>
              <a href="tel:+12503744515">
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 gap-2">
                  <Phone className="h-5 w-5" />
                  Call: 250-374-4515
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Booking;
