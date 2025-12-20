import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
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
              get in touch
            </h1>
            <p className="text-xl text-white/90 leading-relaxed lowercase">
              ready to ride? have questions? we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 md:py-28 bg-[#FBF7F7]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow text-center border-t-4 border-[#DC4712]"
            >
              <div className="w-16 h-16 bg-[#FBF7F7] flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-[#DC4712]" />
              </div>
              <h3 className="font-heading text-xl font-extrabold mb-4 text-[#606C38] lowercase">
                email us
              </h3>
              <a 
                href="mailto:pedaltheworld@gmail.com" 
                className="text-[#DC4712] hover:text-[#c33e10] font-medium transition-colors lowercase break-all"
              >
                pedaltheworld@gmail.com
              </a>
              <p className="text-sm text-slate-600 mt-4 lowercase">
                we typically respond within 24 hours
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow text-center border-t-4 border-[#EE712B]"
            >
              <div className="w-16 h-16 bg-[#FBF7F7] flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-[#EE712B]" />
              </div>
              <h3 className="font-heading text-xl font-extrabold mb-4 text-[#606C38] lowercase">
                call us
              </h3>
              <a 
                href="tel:+12503744515" 
                className="text-[#DC4712] hover:text-[#c33e10] font-medium text-lg transition-colors"
              >
                250-374-4515
              </a>
              <p className="text-sm text-slate-600 mt-4 lowercase">
                canada pst timezone<br />
                9am - 6pm weekdays
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow text-center border-t-4 border-[#606C38]"
            >
              <div className="w-16 h-16 bg-[#FBF7F7] flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-[#606C38]" />
              </div>
              <h3 className="font-heading text-xl font-extrabold mb-4 text-[#606C38] lowercase">
                find us
              </h3>
              <p className="text-[#606C38] font-medium lowercase">
                medellín, colombia
              </p>
              <p className="text-sm text-slate-600 mt-4 lowercase">
                tours depart from medellín<br />
                international airport (mde)
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-12 text-center text-[#606C38] lowercase">
              before you reach out
            </h2>
            
            <div className="space-y-6">
              <div className="bg-[#FBF7F7] p-6 border-l-4 border-[#DC4712]">
                <h3 className="font-heading text-lg font-extrabold mb-2 text-[#606C38] lowercase">
                  booking inquiries
                </h3>
                <p className="text-slate-700 text-sm lowercase">
                  please include your preferred tour dates, number of riders, and any dietary restrictions 
                  or special requirements. this helps us respond faster and more accurately.
                </p>
              </div>

              <div className="bg-[#FBF7F7] p-6 border-l-4 border-[#EE712B]">
                <h3 className="font-heading text-lg font-extrabold mb-2 text-[#606C38] lowercase">
                  fitness & experience questions
                </h3>
                <p className="text-slate-700 text-sm lowercase">
                  tell us about your typical riding: distance, elevation gain, terrain. this helps us 
                  recommend the right tour level and prepare you for what to expect.
                </p>
              </div>

              <div className="bg-[#FBF7F7] p-6 border-l-4 border-[#606C38]">
                <h3 className="font-heading text-lg font-extrabold mb-2 text-[#606C38] lowercase">
                  general questions
                </h3>
                <p className="text-slate-700 text-sm lowercase">
                  check our experience and booking pages first—they answer most common questions. 
                  if you still have questions, we're happy to help!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA with mountain illustration */}
      <section className="py-20 md:py-28 bg-[#606C38] text-white relative overflow-hidden">
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
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-6 lowercase">
              we usually respond within 24 hours
            </h2>
            <p className="text-lg text-white/90 lowercase">
              if you don't hear back, check your spam folder or try calling us directly.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
