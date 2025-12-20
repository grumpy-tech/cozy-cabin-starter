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
      dates: "january 14-24, 2025",
      spots: 4,
      season: "peak dry season, ideal conditions",
    },
    {
      id: 2,
      dates: "january 27 - february 6, 2025",
      spots: 6,
      season: "excellent riding weather continues",
    },
    {
      id: 3,
      dates: "february 11-21, 2025",
      spots: 8,
      season: "late dry season, fewer crowds",
    }
  ];

  const handleContactClick = () => {
    navigate('/contact');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
  };

  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-b from-[#606C38] to-[#7a8c4a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold mb-4 text-white lowercase">
              book your adventure
            </h1>
            <p className="text-xl md:text-2xl text-[#EE712B] font-semibold mb-6 lowercase">
              $5,600 cad per person
            </p>
            <p className="text-lg text-white/90 lowercase">
              includes accommodation, all meals, guided tours, cultural activities, 
              airport transfers, and full vehicle support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tour Dates - WHITE CARDS */}
      <section className="py-20 md:py-28 bg-[#FBF7F7]">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-12 text-center text-[#606C38] lowercase">
            available tour dates
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-slate-200 p-6 hover:border-[#DC4712] hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-[#606C38] bg-[#FBF7F7] px-3 py-1 lowercase">
                    tour {tour.id}
                  </span>
                  <span className={`px-3 py-1 text-xs font-semibold lowercase ${
                    tour.spots <= 4 ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
                  }`}>
                    {tour.spots} spots left
                  </span>
                </div>
                <h3 className="font-heading text-xl font-extrabold mb-2 text-[#606C38] lowercase">{tour.dates}</h3>
                <p className="text-sm text-slate-600 mb-4 lowercase">{tour.season}</p>
                <div className="text-2xl font-bold text-[#DC4712] mb-2">$5,600 cad</div>
                <p className="text-xs text-slate-500 lowercase">per person</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-8 text-center text-[#606C38] lowercase">
              what's included
            </h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 bg-[#FBF7F7] p-8 shadow-lg">
              {[
                "11 nights mountain retreat accommodation",
                "all meals (breakfast, lunch, dinner)",
                "9 days guided cycling with support vehicle",
                "airport transfers from medellín",
                "all cultural activities and tours",
                "coffee farm visits and tastings",
                "professional english-speaking guides",
                "mechanical support throughout"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#EE712B] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 lowercase">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center mt-6 text-sm text-slate-700 lowercase">
              <strong>not included:</strong> flights to/from colombia, travel insurance (required), 
              bike rental ($350 cad optional), personal expenses
            </p>
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-20 md:py-28 bg-[#FBF7F7]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-12 text-center text-[#606C38] lowercase">
              how to book
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: 1, title: "contact us", desc: "$1,000 deposit secures your spot" },
                { step: 2, title: "registration", desc: "complete rider form within 7 days" },
                { step: 3, title: "final payment", desc: "balance due 60 days before tour" },
                { step: 4, title: "get ready", desc: "receive prep materials & connect with riders" }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-[#DC4712] text-white flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-lg font-extrabold mb-2 text-[#606C38] lowercase">{item.title}</h3>
                  <p className="text-sm text-slate-600 lowercase">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Links to Contact Page */}
      <section className="py-20 md:py-28 bg-[#606C38] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-6 lowercase">
              ready to ride colombia?
            </h2>
            <p className="text-lg text-white/90 mb-8 lowercase">
              contact us to check availability and reserve your spot. tours fill 8+ weeks in advance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleContactClick}>
                <div className="group relative overflow-hidden bg-[#DC4712] px-8 py-4 transition-all duration-300 hover:bg-[#c33e10] shadow-xl">
                  <span className="relative z-10 text-base font-semibold text-white lowercase flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    email us to book
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-[#EE712B] transition-transform duration-300 group-hover:translate-x-0"></div>
                </div>
              </button>
              <a href="tel:+12503744515">
                <div className="border-2 border-white text-white hover:bg-white hover:text-[#606C38] px-8 py-4 text-base font-semibold lowercase transition-all duration-300 shadow-lg flex items-center gap-2 justify-center">
                  <Phone className="h-5 w-5" />
                  call: 250-374-4515
                </div>
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
