import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function SocialProof() {
  const testimonials = [
    {
      quote: "I came alone and left with a cycling family. The riding pushed my limits in the best way—2,000m climbs with views that made every pedal stroke worth it. But what surprised me was the cultural depth. Coffee tastings with farmers, dinners with locals, real connections. This wasn't tourism; this was immersion.",
      author: "Sarah Mitchell",
      location: "Portland, OR",
      tour: "February 2024"
    },
    {
      quote: "My husband and I have done cycling trips across Europe, but Colombia hit differently. The guides weren't just showing us roads—they were introducing us to their home. Every climb had a story, every town had friends waiting. And the riding? Challenging, stunning, supported. We're already planning our return.",
      author: "Jennifer & Mark Rodriguez",
      location: "Vancouver, BC",
      tour: "January 2024"
    },
    {
      quote: "I race Cat 2 back home and was worried a tour might be too slow. Wrong. These climbs are legitimate—steep, sustained, high altitude. But unlike racing, you actually enjoy the scenery and culture. Full support meant I could push hard without worrying about mechanicals. Best training ride that wasn't actually training.",
      author: "Alex Thompson",
      location: "Denver, CO",
      tour: "January 2023"
    }
  ];

  const stats = [
    { value: "200+", label: "Riders Since 2018" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "11 Days", label: "Countless Memories" },
    { value: "Max 12", label: "Riders Per Tour" }
  ];

  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Riders Are Saying
          </h2>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-6 w-6 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-lg font-semibold">4.9 out of 5</span>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-sm leading-relaxed mb-6 text-muted-foreground">
                    {testimonial.quote}
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    <p className="text-xs text-muted-foreground italic">{testimonial.tour} Tour</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
