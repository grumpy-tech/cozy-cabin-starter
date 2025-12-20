import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Coffee, Bike, Users, ChevronDown } from "lucide-react";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left hover:text-[#DC4712] transition-colors"
      >
        <span className="font-medium text-[#606C38] lowercase">{question}</span>
        <ChevronDown className={`h-5 w-5 text-[#DC4712] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="pb-4"
        >
          <p className="text-slate-600 text-sm leading-relaxed lowercase">{answer}</p>
        </motion.div>
      )}
    </div>
  );
};

const Experience = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/booking');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
  };

  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#606C38] to-[#7a8c4a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white lowercase">
              the colombia experience
            </h1>
            <p className="text-xl text-white/90 leading-relaxed lowercase">
              11 days of legendary riding, authentic culture, and unforgettable connections
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE FOOD STORY */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Coffee className="h-12 w-12 text-[#EE712B] mb-4" />
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-6 text-[#606C38] lowercase">
                the food
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed max-w-3xl lowercase">
                colombian cuisine is an adventure for your taste buds. from bandeja paisa—a massive plate of beans, rice, 
                plantain, chorizo, and fried egg—after hard climbs, to fresh trout pulled from mountain streams and grilled 
                with garlic, every meal tells a story. you'll taste arepas made by hand in village kitchens, sip coffee 
                picked that morning on family farms, and discover fruits you've never seen before at local markets.
              </p>
            </motion.div>

            {/* Food Photos Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {["/food-photo.jpg", "/food-photo.jpg", "/food-photo.jpg"].map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative h-64 overflow-hidden bg-slate-200 hover:shadow-lg transition-shadow"
                >
                  <img 
                    src={photo} 
                    alt="Colombian food" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>

            {/* Food FAQs */}
            <div className="bg-[#FBF7F7] p-8 shadow-md">
              <h3 className="font-heading text-xl font-extrabold mb-6 text-[#606C38] lowercase">
                common questions about food
              </h3>
              <div className="space-y-2">
                <FAQItem 
                  question="are vegetarian options available?"
                  answer="absolutely! colombian cuisine is naturally diverse with plenty of vegetarian dishes. we work with local chefs to ensure vegetarian riders have delicious, filling meals at every stop. just let us know your preferences when booking."
                />
                <FAQItem 
                  question="what if i have food allergies?"
                  answer="we accommodate all dietary restrictions and allergies. our support team communicates directly with restaurants and cooks to ensure your meals are safe and enjoyable. please inform us of any allergies or restrictions when you register."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE RIDING STORY */}
      <section className="py-20 md:py-28 bg-[#FBF7F7]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Bike className="h-12 w-12 text-[#EE712B] mb-4" />
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-6 text-[#606C38] lowercase">
                the riding
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed max-w-3xl lowercase">
                these are the roads where professional teams train for grand tours. smooth tarmac ribbons winding through 
                coffee plantations, challenging climbs with gradients that test your legs and reward you with views across 
                the andes. you'll ride maintained gravel through mountain villages where kids wave and dogs chase (playfully). 
                60 to 100 kilometers each day, gaining 1,000 to 2,000 meters of elevation, with our support vehicle always 
                behind you carrying water, snacks, and a comfortable seat if you need a break.
              </p>
            </motion.div>

            {/* Riding Photos */}
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-96 overflow-hidden bg-slate-200"
              >
                <img 
                  src="/hero-cycling.jpg" 
                  alt="Cycling" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-96 overflow-hidden bg-slate-200"
              >
                <img 
                  src="/hero-cycling.jpg" 
                  alt="Route" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </div>

            {/* Riding FAQs */}
            <div className="bg-white p-8 shadow-md">
              <h3 className="font-heading text-xl font-extrabold mb-6 text-[#606C38] lowercase">
                common questions about riding
              </h3>
              <div className="space-y-2">
                <FAQItem 
                  question="what fitness level do i need?"
                  answer="intermediate to advanced. if you can comfortably ride 60km with 1,000m of climbing at home, you'll handle these routes. we ride at a conversational pace and the support vehicle is always there if you need a break."
                />
                <FAQItem 
                  question="what if i need mechanical support?"
                  answer="our support vehicle follows every ride with a full toolkit and spare parts. our guides are experienced mechanics who can handle everything from flat tires to derailleur adjustments. you're never more than a few minutes from help."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE CULTURE STORY */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Users className="h-12 w-12 text-[#EE712B] mb-4" />
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-6 text-[#606C38] lowercase">
                the culture
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed max-w-3xl lowercase">
                you're not observing colombian culture—you're living it. our guides introduce you to their friends, their 
                favorite restaurants, the coffee farmers they've known for years. you'll visit markets where vendors remember 
                your face the second day, learn to dance salsa (badly, but enthusiastically), and hear stories that don't make 
                it into guidebooks. the connections you make here—with locals, with guides, with fellow riders—often last 
                long after the tour ends.
              </p>
            </motion.div>

            {/* Culture Photos Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {["/culture-photo.jpg", "/culture-photo.jpg", "/culture-photo.jpg"].map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative h-64 overflow-hidden bg-slate-200 hover:shadow-lg transition-shadow"
                >
                  <img 
                    src={photo} 
                    alt="Culture" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>

            {/* Culture FAQs */}
            <div className="bg-[#FBF7F7] p-8 shadow-md">
              <h3 className="font-heading text-xl font-extrabold mb-6 text-[#606C38] lowercase">
                common questions about culture
              </h3>
              <div className="space-y-2">
                <FAQItem 
                  question="do the guides speak english?"
                  answer="yes, all our guides are bilingual. they grew up in colombia and know the culture intimately, but speak fluent english so you don't miss any stories, jokes, or important information."
                />
                <FAQItem 
                  question="how much free time will i have?"
                  answer="the schedule balances structured activities with free time. most days include morning rides, afternoon cultural activities, and free evenings to explore, relax, or socialize with the group. you're never rushed."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#606C38] text-white relative overflow-hidden">
        {/* Mountain illustration as subtle background */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/mountains-illustration.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-4xl md:text-6xl font-extrabold mb-6 lowercase">
              experience it yourself
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed lowercase">
              three departures in january-february 2025. limited to 12 riders per tour.
            </p>
            <button 
              onClick={handleBookingClick}
              className="group relative overflow-hidden bg-[#DC4712] px-10 py-5 transition-all duration-300 hover:bg-[#c33e10] shadow-2xl"
            >
              <span className="relative z-10 text-lg font-semibold text-white lowercase">
                view dates & book your spot
              </span>
              <div className="absolute inset-0 -translate-x-full bg-[#EE712B] transition-transform duration-300 group-hover:translate-x-0"></div>
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Experience;
