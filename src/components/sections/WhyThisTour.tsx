import { motion } from "framer-motion";
import { Heart, Users, Shield } from "lucide-react";

export function WhyThisTour() {
  const reasons = [
    {
      icon: Heart,
      title: "Led by Cyclists Who Live Here",
      description: "We're not just guides—we're local riders sharing our favorite roads. This is where we train, where we explore, where we've built relationships with coffee farmers and mountain communities."
    },
    {
      icon: Users,
      title: "Beyond the Bike: True Cultural Immersion",
      description: "Your days balance epic rides with authentic experiences: cupping sessions at family coffee farms, evening paseos in colonial towns, meals with locals who become friends."
    },
    {
      icon: Shield,
      title: "Premium Support, Zero Compromises",
      description: "Full vehicle support, expert mechanics, curated routes tested over years. Ride with confidence knowing every detail is handled—from pre-dawn bike prep to post-ride recovery."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why This Tour Is Different
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Three things set us apart from every other Colombia cycling experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <reason.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-center">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
