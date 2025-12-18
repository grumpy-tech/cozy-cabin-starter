import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Users, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-blue-900 to-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-amber-400 font-semibold mb-6">
            <Users className="h-4 w-4" />
            <span>Limited to 12 Riders Per Tour</span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Three Departures This Season. Which One Is Yours?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our small group size ensures personalized attention, genuine cultural connections, and roads 
            that feel like your own. Tours typically fill 8 weeks before departure. View available dates 
            and secure your spot while spaces remain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/booking">
              <Button 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105 group"
              >
                <Calendar className="mr-2 h-5 w-5" />
                See Dates & Availability
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
              >
                Ask Us Anything
              </Button>
            </Link>
          </div>

          {/* Tour Quick Facts */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { label: "Tour Dates", value: "Jan-Feb 2025" },
              { label: "Investment", value: "$5,600 CAD" },
              { label: "Group Size", value: "Max 12 Riders" }
            ].map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4"
              >
                <div className="text-amber-400 text-sm font-semibold mb-1">
                  {fact.label}
                </div>
                <div className="text-white text-lg font-bold">
                  {fact.value}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-white/60 text-sm"
          >
            Don't wait until spots are gone. The riders who book early aren't just planning ahead—they're 
            making sure they don't miss out on Colombia's best cycling season.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
