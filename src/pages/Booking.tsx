import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Users, DollarSign, Mail, Phone } from "lucide-react";
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
      note: "This tour often fills first due to perfect weather"
    },
    {
      id: 2,
      dates: "January 27 - February 6, 2025",
      spots: 6,
      season: "Excellent riding weather continues",
      note: "Slightly warmer temperatures, vibrant landscapes"
    },
    {
      id: 3,
      dates: "February 11-21, 2025",
      spots: 8,
      season: "Late dry season, fewer crowds",
      note: "Great time for wildlife spotting on descents"
    }
  ];

  const faqs = [
    {
      question: "What fitness level is required for this tour?",
      answer: "You should be comfortable riding 4-6 hours with significant climbing. If you can handle 1,500m elevation gain over 80km back home, you're ready. Support vehicle available for needed breaks. This is a riding-focused tour for experienced cyclists, not a casual bike vacation."
    },
    {
      question: "Do I need to bring my own bike?",
      answer: "We offer premium rentals ($350 CAD), or you can bring your own. Either way, we handle airport transfers. Our mechanics keep everything running perfectly throughout the tour."
    },
    {
      question: "What if I'm traveling solo?",
      answer: "Most riders come solo and leave with lifelong cycling friends. No single supplement required—just an opportunity to share rooms and experiences with fellow riders. Private room option available (+$800 CAD)."
    },
    {
      question: "What about dietary restrictions?",
      answer: "We accommodate vegetarian, vegan, gluten-free, and other dietary needs. Colombian cuisine is naturally diverse and adaptable. Just let us know your requirements during registration."
    },
    {
      question: "How technical are the gravel sections?",
      answer: "Maintained roads, not singletrack. If you're comfortable on dirt roads and moderate washboard, you're fine. Road bikes with 28mm+ tires work well. No mountain biking skills required."
    },
    {
      question: "What's the weather like in January-February?",
      answer: "These months are Colombia's dry season perfection. Expect daytime temps 18-28°C (65-80°F). Mornings are cool, afternoons warm. We ride through multiple climate zones daily—mornings can be misty, but rain is rare. Pack layers and you'll be comfortable."
    },
    {
      question: "Is travel insurance required?",
      answer: "Yes, we require comprehensive travel insurance covering trip cancellation, medical expenses, and emergency evacuation. We recommend World Nomads or similar providers covering 'adventure sports.' Happy to discuss specific policy recommendations."
    },
    {
      question: "Can I extend my stay in Colombia?",
      answer: "Absolutely. We can recommend extra days in Medellín or Cartagena. Many riders add a few days to explore on their own. We're happy to suggest itineraries and accommodations."
    },
    {
      question: "What's the group dynamic like?",
      answer: "Small groups (max 12) of passionate cyclists who value both serious riding and cultural immersion. Ages typically 35-65, mix of solo travelers and couples, international riders. The small size means everyone connects quickly."
    },
    {
      question: "Is travel to/from Medellín included?",
      answer: "We provide airport transfers once you're in Medellín. International flights to Colombia are not included—allowing flexibility in your arrival/departure plans."
    }
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
              Three Departures This Season—Your Adventure Awaits
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Each 11-day tour is limited to 12 riders, ensuring personalized attention and genuine cultural immersion. Choose your dates, reserve your spot, and start preparing for the ride of a lifetime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tour Calendar */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            Available Tour Dates
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-primary">Tour {tour.id}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    tour.spots <= 4 ? 'bg-destructive/10 text-destructive' : 'bg-primary/10 text-primary'
                  }`}>
                    {tour.spots} spots remaining
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{tour.dates}</h3>
                <p className="text-sm text-muted-foreground mb-2">{tour.season}</p>
                <p className="text-sm italic">{tour.note}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-muted-foreground max-w-2xl mx-auto">
            Small group size means genuine cultural connections—and spots fill fast. Our tours typically sell out 8 weeks before departure.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
              Tour Investment
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-background p-6 rounded-lg text-center">
                <DollarSign className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold mb-2">$5,600 CAD</h3>
                <p className="text-muted-foreground">Per person (double occupancy)</p>
              </div>
              <div className="bg-background p-6 rounded-lg text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold mb-2">+$800 CAD</h3>
                <p className="text-muted-foreground">Single supplement (private room)</p>
              </div>
              <div className="bg-background p-6 rounded-lg text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold mb-2">+$350 CAD</h3>
                <p className="text-muted-foreground">Bike rental (optional)</p>
              </div>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="font-heading text-2xl font-semibold mb-4">What This Investment Includes</h3>
              <p className="text-lg leading-relaxed">
                Premium small-group experience that independent travelers can't access. Local guide expertise that takes years to develop. Cultural connections that transform tourism into relationship. And 11 days of riding that will reset your definition of what a cycling tour can be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
              How to Book Your Tour
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Reserve Your Spot",
                  description: "Contact us via email or phone to check current availability and reserve your tour dates. A $1,000 CAD deposit secures your place."
                },
                {
                  step: 2,
                  title: "Complete Registration",
                  description: "Within 7 days of booking, complete our rider registration form with emergency contacts, fitness level, dietary requirements, and any medical considerations."
                },
                {
                  step: 3,
                  title: "Final Payment",
                  description: "Balance due 60 days before tour departure. We'll send payment instructions and pre-tour preparation materials including packing lists, training suggestions, and cultural context."
                },
                {
                  step: 4,
                  title: "Pre-Tour Prep",
                  description: "We'll connect you with fellow riders before departure and provide detailed arrival instructions, bike fitting details, and answers to any last-minute questions."
                }
              ].map((step) => (
                <div key={step.step} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-8">Cancellation Policy</h2>
            <div className="bg-background p-8 rounded-lg space-y-4">
              <div>
                <h3 className="font-semibold mb-2">More than 60 days before departure</h3>
                <p className="text-muted-foreground">Full refund minus $200 processing fee</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">30-60 days before departure</h3>
                <p className="text-muted-foreground">50% refund</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Less than 30 days</h3>
                <p className="text-muted-foreground">No refund (travel insurance recommended)</p>
              </div>
              <div className="pt-4 border-t">
                <h3 className="font-semibold mb-2">Weather-Related Cancellations</h3>
                <p className="text-muted-foreground">In the unlikely event we cancel due to unsafe conditions, you receive a full refund or credit toward a future tour.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Colombia on Two Wheels?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Don't let another season pass wondering what this ride feels like. These tours fill months in advance—the riders who book early aren't just planning ahead, they're making sure they don't miss out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:pedaltheworld@gmail.com">
                <Button variant="default" size="lg" className="gap-2">
                  <Mail className="h-5 w-5" />
                  Email Us to Book
                </Button>
              </a>
              <a href="tel:+12503744515">
                <Button variant="outline" size="lg" className="gap-2">
                  <Phone className="h-5 w-5" />
                  Call to Discuss
                </Button>
              </a>
            </div>
            <div className="mt-8 pt-8 border-t flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span>✓ Operated by Cycle Logic since 2018</span>
              <span>✓ 200+ riders hosted</span>
              <span>✓ 4.9/5 average rating</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Booking;
