'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  "/images/rec1.jpg",
  "/images/r8.jpg", 
  "/images/r24.jpg",
  "/images/r23.jpg",
  "/images/r15.jpg",
  "/images/rest1.jpg"
];

export default function GallerySection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-text-light max-w-2xl mx-auto">
            Take a visual journey through the luxurious spaces and breathtaking views that await you
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}