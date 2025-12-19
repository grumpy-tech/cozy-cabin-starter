import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  const navigate = useNavigate();

  // FIXED: Scroll to top function
  const handleBookingClick = () => {
    navigate('/booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    { id: "all", name: "All Photos", description: "Every moment from our Colombia tours" },
    { id: "riding", name: "The Riding", description: "Action shots of climbing, descending, and group rides" },
    { id: "landscapes", name: "The Landscapes", description: "Andes vistas and coffee plantations" },
    { id: "culture", name: "The Culture", description: "Local interactions and authentic experiences" },
    { id: "food", name: "The Food", description: "Colombian cuisine moments" },
    { id: "people", name: "The People", description: "Riders, locals, and celebrations" },
    { id: "offbike", name: "Off The Bike", description: "Rest days and social moments" }
  ];

  const sampleCaptions = [
    "Morning light in Colombia's coffee heartland",
    "Earning every meter to the Alto de Minas",
    "Three generations sharing the coffee harvest",
    "The descent that makes the climb worthwhile",
    "Fresh tinto with Señor Rodriguez at his finca",
    "Market day in Jardín—where cycling takes a break",
    "Summit celebration at 3,200 meters",
    "Bandeja paisa: fuel for serious riders",
    "Gravel roads winding through shade-grown coffee",
    "Twelve strangers becoming lifelong cycling friends",
    "Colonial architecture in afternoon golden hour",
    "The support vehicle you hope you never need",
    "Cooling off after 2,000 meters of climbing",
    "Where the pavement ends, the adventure deepens",
    "Sunset paseo in Salamina's town square"
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-[#134686] to-[#0d3460]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-white">
              Every Mile Tells a Story
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Moments from our Colombia tours that capture the rides, landscapes, connections, 
              and memories. This could be your story next season.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Categories & Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex flex-wrap justify-center mb-12 h-auto gap-2 bg-transparent">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-6 py-3 data-[state=active]:bg-[#ED3F27] data-[state=active]:text-white rounded-none"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <div className="text-center mb-12">
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sampleCaptions.slice(0, 12).map((caption, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="group relative aspect-[4/3] bg-slate-100 overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-200 flex items-center justify-center">
                        <span className="text-6xl opacity-20">🚴</span>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-white text-sm font-medium">{caption}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <p className="text-sm text-slate-500 italic">
                    📸 Add your tour photos here (60-80 images recommended)
                  </p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA - FIXED: Scrolls to top of booking page */}
      <section className="py-16 md:py-20 bg-[#FDF4E3]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#134686]">
              Ready to Create Your Own Story?
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              These photos represent just a fraction of what you'll experience over 11 days. 
              The climbs, the culture, the connections—they're waiting for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleBookingClick}
                size="lg"
                className="bg-[#ED3F27] hover:bg-[#d63620] text-white rounded-none"
              >
                View Tour Dates
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-[#134686] text-[#134686] hover:bg-[#134686] hover:text-white rounded-none"
              >
                Join Our Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Gallery;
