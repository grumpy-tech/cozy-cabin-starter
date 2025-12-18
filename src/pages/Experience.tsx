import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Experience = () => {
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
              Eleven Days That Redefine What a Cycling Tour Can Be
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Experience Colombia through the eyes of cyclists who call it home
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Makes This Tour Different */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
              What Makes This Tour Different
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                You'll wake to the scent of fresh Colombian coffee and the quiet anticipation of another day in the saddle. By mid-morning, you're cresting a climb that reveals the patchwork quilt of coffee farms stretching to the horizon. Your guide points out a family-run finca where you'll stop this afternoon—not as tourists, but as cyclists welcomed to share stories over tinto and homemade arepas.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                This is cycling in Colombia through the lens of locals who ride these roads year-round. Founded by Cycle Logic, a company built by riders for riders, these tours blend our passion for Colombian cycling with years of route knowledge and deep community relationships. We don't just show you Colombia—we share the country that's become our training ground, our inspiration, our home.
              </p>
              <p className="text-lg leading-relaxed">
                Every day balances serious riding with cultural depth you won't find on typical tours. Challenging climbs through the Andes, flowing gravel descents through coffee country, support when you need it, and genuine connections with the places and people that make Colombia extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Cycling: Roads & Trails */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
              The Cycling: Roads & Trails
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                This is a tour for experienced cyclists comfortable with varied terrain and significant elevation. Expect daily rides of 60-100km with 1,000-2,000m of climbing—some days pure road, others mixing pavement with maintained gravel through coffee plantations and mountain villages.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The Andes don't apologize, but they reward. You'll tackle legendary climbs where Colombian pros train, descend sweeping valleys where coffee grows in the shade, and discover gravel routes that few international cyclists ever experience. Full van support follows every ride. Drop back if you need a break, push ahead if you're feeling strong—your guide knows every km of road and where to regroup.
              </p>
              <p className="text-lg leading-relaxed">
                This is challenging, beautiful riding for cyclists who value the journey as much as the destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Immersion: Beyond The Bike */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
              Beyond The Bike: Cultural Immersion
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Between the morning espresso ritual and evening paseos through town squares, you'll discover Colombia isn't just your backdrop—it's your experience. Visit working coffee farms where three generations share their craft. Explore markets where vendors remember your face by day three. Join locals for tejo (Colombia's explosive lawn game) and learn why cycling is woven into the national identity.
              </p>
              <p className="text-lg leading-relaxed">
                Our guides don't just translate—they introduce, connect, and facilitate the kind of authentic interactions that transform a trip into something deeper. You're not observing Colombian culture; you're briefly becoming part of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Food Experience */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
              The Food Experience
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Colombian cuisine is comfort and revelation in equal measure. Start days with fresh-baked pandebono and the country's exceptional coffee. Lunch often means bandeja paisa after a hard morning—beans, rice, chicharrón, and fried egg conspiring to fuel your afternoon ride. Evenings bring family-style dinners featuring regional specialties, fresh trout from mountain streams, and always, always more coffee.
              </p>
              <p className="text-lg leading-relaxed">
                You'll learn why Colombian coffee culture goes far beyond the cup—it's ritual, livelihood, pride, and the foundation of the landscapes you're riding through. Every meal connects you deeper to the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Scenery: Where You'll Ride */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
              The Scenery: Where You'll Ride
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                Picture palm-lined roads climbing through layers of green—coffee plants cascading down hillsides, condensation misting off jungle canopies, the Andes rising blue and massive in the distance. You'll ride through valleys where waterfalls appear around every bend and towns where colonial architecture glows amber in afternoon light.
              </p>
              <p className="text-lg leading-relaxed">
                This is Colombia's coffee zone, where every vista seems composed for the camera. Mornings mean climbing into clouds. Afternoons descend through temperature layers and ecosystem changes you can feel. It's dramatic, it's varied, and it never stops surprising you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
              What's Included
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Included */}
              <div className="bg-background p-8 rounded-lg">
                <h3 className="font-heading text-2xl font-semibold mb-6 text-primary">
                  Your Tour Includes
                </h3>
                <ul className="space-y-3">
                  {[
                    "11 nights accommodation (boutique hotels and quality guesthouses)",
                    "All breakfasts, 8 lunches, 9 dinners",
                    "9 days of fully guided cycling with support vehicle",
                    "Airport transfers (Medellín airport)",
                    "All cultural activities and entrance fees",
                    "Coffee farm tours and tasting sessions",
                    "Professional English-speaking guides",
                    "Mechanical support and bike maintenance",
                    "Fuel and vehicle costs",
                    "All gratuities except guide tips"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Included */}
              <div className="bg-background p-8 rounded-lg">
                <h3 className="font-heading text-2xl font-semibold mb-6 text-muted-foreground">
                  Not Included
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    "International flights to/from Colombia",
                    "2 lunches and 2 dinners (free time in towns)",
                    "Alcoholic beverages",
                    "Personal expenses and souvenirs",
                    "Travel insurance (required)",
                    "Bike rental ($350 CAD - available separately)",
                    "Guide tips (at your discretion)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-lg">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Colombia on Two Wheels?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Eleven days from now, you could be standing at a mountain pass with new friends, looking back at the coffee valleys you've just ridden through, and forward at the descent that awaits. You could be sharing stories over dinner with a Colombian family, or laughing as you learn tejo in a town square. These moments don't happen by accident—they happen when you choose them.
            </p>
            <Link to="/booking">
              <Button variant="default" size="lg" className="text-lg px-8 py-6">
                View Dates & Book Your Tour
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Experience;
