import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Home, Coffee, Mountain, Users } from "lucide-react";

const Experience = () => {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              The Complete Colombia Adventure
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              World-class cycling • Authentic culture • Stunning landscapes • Exceptional food
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Makes This Special - REFRAMED */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
              An Adventure That Goes Beyond the Bike
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700">
              <p className="text-lg leading-relaxed mb-6">
                This isn't just a cycling tour—it's a complete Colombian experience where exceptional riding is your gateway to authentic cultural immersion. Yes, you'll tackle legendary climbs through the Andes and flow through coffee country on perfectly maintained gravel. But between those unforgettable rides, you'll also share meals with local families, learn coffee roasting from third-generation farmers, and explore colonial towns where the rhythm of life hasn't changed in centuries.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Founded and operated by Cycle Logic, we're riders who fell in love with Colombia and built relationships here over years. We don't just know the roads—we know the farmers who grow coffee on the hillsides you'll ride past, the mechanics who keep our bikes running, and the families who welcome us (and you) into their homes.
              </p>
              <p className="text-lg leading-relaxed">
                This destination is used by professional teams for high-altitude training, but our tours are designed for passionate cyclists of all levels who want more than just miles. You'll ride hard, eat exceptionally well, connect deeply with Colombian culture, and return home with stories that go far beyond Strava segments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Home Base - NEW SECTION with property photo */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
              Your Mountain Retreat
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Property Photo */}
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/property.jpg" 
                  alt="Your accommodation in the Colombian mountains" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Description */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Home className="h-6 w-6 text-amber-500" />
                  <h3 className="font-heading text-2xl font-semibold">Surrounded by Nature</h3>
                </div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Your home for the adventure sits nestled in the mountains just outside Medellín, surrounded by coffee plantations and pine forests. This is where you'll return after epic rides—a peaceful retreat where you can recover, share stories with fellow riders, and watch the sun set over the Andes.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Comfortable accommodations with stunning mountain views</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Fresh mountain air and peaceful surroundings</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Perfect base for exploring the coffee region</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Adventure Components - 3-column grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            What Your Days Look Like
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* The Riding */}
            <div className="bg-slate-50 rounded-lg p-8">
              <Mountain className="h-12 w-12 text-amber-500 mb-4" />
              <h3 className="font-heading text-2xl font-semibold mb-4">The Riding</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                60-100km daily rides with 1,000-2,000m of climbing. Mix of smooth tarmac and maintained gravel through coffee country and into the Andes. This destination trains pro teams—the roads are legendary, the climbs are real, and the scenery never stops.
              </p>
              <p className="text-sm text-slate-600 italic">
                Intermediate to advanced level. Full vehicle support. Road or gravel bikes welcome.
              </p>
            </div>

            {/* The Culture */}
            <div className="bg-slate-50 rounded-lg p-8">
              <Coffee className="h-12 w-12 text-amber-500 mb-4" />
              <h3 className="font-heading text-2xl font-semibold mb-4">The Culture</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Coffee farm visits with families who've been growing for generations. Market explorations where vendors greet you by name. Traditional meals prepared in home kitchens. This isn't observation—it's participation.
              </p>
              <p className="text-sm text-slate-600 italic">
                Our guides introduce you as friends, not tourists. The connections you make here last beyond the tour.
              </p>
            </div>

            {/* The Food & Rest */}
            <div className="bg-slate-50 rounded-lg p-8">
              <Users className="h-12 w-12 text-amber-500 mb-4" />
              <h3 className="font-heading text-2xl font-semibold mb-4">Food & Recovery</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Fuel for riders: bandeja paisa after hard morning rides, fresh trout from mountain streams, and Colombian coffee that redefines what you thought you knew. Evening downtime with your group, sharing the day's highlights.
              </p>
              <p className="text-sm text-slate-600 italic">
                Maximum 12 riders means genuine connections form fast. Solo travelers always welcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included - Simplified */}
      <section className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
              Everything You Need
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading text-xl font-semibold mb-4 text-amber-400">Included</h3>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" /><span>11 nights accommodation</span></li>
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" /><span>All meals (breakfast, lunch, dinner)</span></li>
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" /><span>9 days guided cycling with support vehicle</span></li>
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" /><span>All tours and cultural activities</span></li>
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" /><span>Airport transfers from Medellín</span></li>
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" /><span>Expert guides and mechanical support</span></li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-4 text-white/60">You'll Need</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Flights to/from Colombia</li>
                  <li>• Travel insurance (required)</li>
                  <li>• Bike rental ($350 CAD optional)</li>
                  <li>• Personal expenses</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready for the Complete Colombian Experience?
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Three departures in January-February 2025. Limited to 12 riders per tour. 
              $5,600 CAD includes everything listed above.
            </p>
            <Link to="/booking">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-8 py-6">
                View Dates & Book Your Spot
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