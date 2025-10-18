'use client';

import { motion } from 'framer-motion';

const amenities = [
  { icon: "📶", name: "High-Speed WiFi" },
  { icon: "🍽️", name: "Fine Dining Restaurant" },
  { icon: "🚗", name: "Valet Parking" },
  { icon: "⭐", name: "Premium Service" },
  { icon: "🛎️", name: "Room Service" },
  { icon: "🕒", name: "24/7 Reception" }
];

export default function AmenitiesSection() {
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
    <section id="amenities" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            World-Class Amenities
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-text-light max-w-2xl mx-auto">
            Experience unparalleled comfort with our carefully curated amenities designed for the modern traveler
          </p>
        </motion.div>

        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{amenity.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{amenity.name}</h3>
              <p className="text-sm text-text-light">
                Premium {amenity.name.toLowerCase()} available 24/7 for our valued guests
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}