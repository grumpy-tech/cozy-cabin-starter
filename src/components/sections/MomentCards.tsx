import { motion } from "framer-motion";
import { Sunrise, Mountain, Coffee, Trophy } from "lucide-react";

export function MomentCards() {
  const moments = [
    {
      icon: Sunrise,
      title: "Dawn in the Coffee Zone",
      description: "Start your day where Colombia wakes up",
      color: "from-orange-500/20 to-amber-500/20"
    },
    {
      icon: Mountain,
      title: "Andes Ascent",
      description: "Earn every meter of these legendary climbs",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Coffee,
      title: "Market Day Connection",
      description: "Trade wheels for wandering in mountain towns",
      color: "from-amber-600/20 to-yellow-500/20"
    },
    {
      icon: Trophy,
      title: "Summit Celebration",
      description: "Share the triumph with riders who become friends",
      color: "from-green-500/20 to-emerald-500/20"
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
            Moments That Define the Journey
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Every day brings experiences that stay with you long after the tour ends
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {moments.map((moment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
            >
              {/* Background with gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${moment.color} transition-transform group-hover:scale-110 duration-500`} />
              
              {/* Placeholder for image - replace with actual photos */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                <moment.icon className="h-32 w-32" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <moment.icon className="h-8 w-8 text-white mb-3" />
                  <h3 className="font-heading text-xl font-semibold text-white mb-2">
                    {moment.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {moment.description}
                  </p>
                </div>
              </div>

              {/* Note badge */}
              <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                📸 Add photo
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground italic">
            Note: Replace placeholders with actual tour photos for each moment
          </p>
        </motion.div>
      </div>
    </section>
  );
}
