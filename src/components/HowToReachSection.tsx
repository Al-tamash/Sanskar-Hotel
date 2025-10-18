'use client'

import { motion } from 'framer-motion'
import { Plane, Train, Bus, MapPin } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function HowToReachSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const stagger = {
    animate: { transition: { staggerChildren: 0.1 } },
  }

  return (
    <section id="how-to-reach" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-text mb-3">
            How To <span className="text-primary">Reach Us</span>
          </h2>
          <p className="text-lg text-light max-w-3xl mx-auto">
            Convenient connectivity by air, rail and road. Choose the route that suits you best.
          </p>
        </motion.div>

        {/* Transport Cards */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-3 mb-10"
        >
          <motion.div variants={fadeInUp}>
            <Card className="h-full p-6 bg-accent hover:bg-accent/80 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Plane className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text mb-1">By Air</h3>
                  <p className="text-light text-sm leading-relaxed">
                    Bhopal is the closest airport (~200 km). Jabalpur airport is ~250 km. Taxis and tourist vehicles are easily available from both airports to reach Pachmarhi.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full p-6 bg-accent hover:bg-accent/80 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Train className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text mb-1">By Rail</h3>
                  <p className="text-light text-sm leading-relaxed">
                    Pipariya Railway Station is the nearest railhead (~52 km). From Pipariya, frequent taxis and buses are available to Pachmarhi.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full p-6 bg-accent hover:bg-accent/80 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Bus className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text mb-1">By Road</h3>
                  <p className="text-light text-sm leading-relaxed">
                    Regular buses and taxis connect from Chhindwara, Pipariya, Hoshangabad, Nagpur and Bhopal directly to Pachmarhi.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Distance Chips */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
        >
          {[
            { label: 'Bhopal Airport', value: '~200 km' },
            { label: 'Jabalpur Airport', value: '~250 km' },
            { label: 'Pipariya Railway Stn', value: '~52 km' },
            { label: 'Pachmarhi Bus Stand', value: 'City Center' },
          ].map((item) => (
            <div key={item.label} className="p-4 rounded-lg border border-primary/20 bg-white/50">
              <div className="text-sm text-light">{item.label}</div>
              <div className="text-base font-semibold text-text">{item.value}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Row */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild className="gap-2">
            <a
              href="https://maps.google.com/?q=Pachmarhi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="w-4 h-4" /> Open in Google Maps
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="#contact">Contact Us for Transfers</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

