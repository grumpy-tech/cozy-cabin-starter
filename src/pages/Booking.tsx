import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Mail, Phone, Check } from "lucide-react";

const Booking = () => {
  const navigate = useNavigate();

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

  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      {/* Hero with Price */}
      <section className="relative py-16 bg-gradient-to-b from-[#51829B] to-[#9BB0C1]">
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
            <p className="text-xl md:text-2xl text-[#F6995C] font-semibold mb-6">
              $5,600 CAD per person
            </p>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Includes accommodation, all meals, guided tours, cultural activities, 
              airport transfers, and full vehicle support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tour Dates - Clean Cards */}
      <section className="py-20 md:py-28 bg-white texture-dots">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#51829B]">
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
                className="bg-[#EADFB4]/30 border-2 border-[#9BB0C1] p-6 hover:border-[#F6995C] hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-[#51829B] bg-[#EADFB4] px-3 py-1">
                    Tour {tour.id}
                  </span>
                  <span className={`px-3 py-1 text-xs font-semibold ${
                    tour.spots <= 4 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                  }`}>
                    {tour.spots} spots left
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-2 text-[#51829B]">{tour.dates}</h3>
                <p className="text-sm text-slate-600 mb-4">{tour.season}</p>
                <div className="text-2xl font-bold text-[#51829B] mb-2">$5,600 CAD</div>
                <p className="text-xs text-slate-500">per person</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-28 bg-[#EADFB4] texture-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center text-[#51829B]">
              What's Included
            </h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 bg-white p-8 shadow-lg">
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
                  <Check className="h-5 w-5 text-[#F6995C] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center mt-6 text-sm text-slate-700">
              <strong>Not included:</strong> Flights to/from Colombia, travel insurance (required), 
              bike rental ($350 CAD optional), personal expenses
            </p>
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-20 md:py-28 bg-white texture-dots">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#51829B]">
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
                  <div className="w-12 h-12 bg-[#F6995C] text-white flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2 text-[#51829B]">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Ready to Ride Colombia? */}
      <section className="py-20 md:py-28 bg-[#51829B] text-white texture-grid relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F6995C] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9BB0C1] opacity-5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Ride Colombia?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Contact us to check availability and reserve your spot. Tours fill 8+ weeks in advance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:pedaltheworld@gmail.com">
                <Button size="lg" className="bg-[#F6995C] hover:bg-[#e88849] text-white gap-2 rounded-none shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Mail className="h-5 w-5" />
                  Email Us to Book
                </Button>
              </a>
              <a href="tel:+12503744515">
                <Button variant="outline" size="lg" className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-[#51829B] gap-2 rounded-none shadow-lg hover:shadow-xl transition-all duration-300">
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
