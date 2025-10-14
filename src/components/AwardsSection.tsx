'use client';

import { motion } from 'framer-motion';

const awards = [
  {
    id: 1,
    name: "World Luxury Hotel Awards 2024",
    category: "Luxury Business Hotel",
    icon: "🏆",
    year: "2024"
  },
  {
    id: 2,
    name: "TripAdvisor Travelers' Choice",
    category: "Top 25 Hotels in India",
    icon: "⭐",
    year: "2024"
  },
  {
    id: 3,
    name: "Forbes Travel Guide",
    category: "Five Star Rating",
    icon: "⭐",
    year: "2023"
  },
  {
    id: 4,
    name: "International Hotel Awards",
    category: "Best Luxury Hotel",
    icon: "🏅",
    year: "2023"
  }
];

export default function AwardsSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="awards" className="py-20 px-4 bg-gradient-to-r from-primary/5 to-accent/20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Awards & Recognitions
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-text-light max-w-2xl mx-auto">
            Our commitment to excellence has been recognized by prestigious organizations worldwide
          </p>
        </motion.div>

        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 border border-primary/10"
            >
              <div className="text-4xl mb-4">{award.icon}</div>
              <h3 className="font-serif font-bold text-primary mb-2">{award.name}</h3>
              <p className="text-sm text-text-light mb-1">{award.category}</p>
              <p className="text-xs text-text-muted">{award.year}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}