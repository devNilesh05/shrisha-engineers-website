'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { fadeUp, slideRight, slideLeft, stagger, viewportOnce } from '@/lib/motion'

const points = [
  'Experienced Team',
  'Quality Construction',
  'Client Focused',
  'Reliable Delivery',
]

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src="/projects/towers.png"
                alt="Shrisha Engineers residential tower development under completion"
                className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 rounded-2xl border border-border bg-card px-6 py-5 shadow-xl sm:-right-6">
              <div className="font-heading text-3xl font-extrabold text-accent">
                100%
              </div>
              <div className="text-sm text-muted-foreground">
                Quality Commitment
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Who We Are
            </span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              A Trusted Name in Engineering &amp; Construction
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Shrisha Engineers is a trusted engineering and construction
              company dedicated to delivering high-quality infrastructure,
              commercial, industrial, and civil projects. We combine technical
              expertise with disciplined execution to bring ambitious visions to
              life.
            </p>

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {points.map((point) => (
                <motion.li
                  key={point}
                  variants={fadeUp}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="size-4" />
                  </span>
                  <span className="font-medium text-foreground">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
