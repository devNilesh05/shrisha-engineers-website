'use client'

import { motion } from 'framer-motion'
import {
  Building,
  HardHat,
  Factory,
  ClipboardList,
  TrafficCone,
  Wrench,
  ArrowRight,
  Check,
} from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'
import { SERVICES } from '@/lib/data/services'
import { QuoteDialog } from '@/components/quote-dialog'
import { Badge } from '@/components/ui/badge'

const iconMap = {
  building: Building,
  'hard-hat': HardHat,
  factory: Factory,
  clipboard: ClipboardList,
  'traffic-cone': TrafficCone,
  wrench: Wrench,
}

export function Services() {
  return (
    <section id="services" className="relative bg-muted/30 py-24 lg:py-32 overflow-hidden border-y border-border/50">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -right-40 size-96 rounded-full bg-accent/5 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 -left-40 size-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent">
            Core Capabilities
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Comprehensive Civil &amp; Engineering Services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Delivering robust end-to-end engineering, contracting, and project management
            across residential, commercial, industrial, and infrastructure spheres.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Building
            return (
              <motion.article
                key={service.id}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10"
              >
                {/* Subtle top card glow */}
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 size-32 translate-x-12 -translate-y-12 rounded-full bg-accent/10 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />

                <div>
                  {/* Icon & Badge Row */}
                  <div className="flex items-center justify-between">
                    <span className="flex size-13 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-105">
                      <Icon className="size-6 stroke-[2]" />
                    </span>
                    {service.stats && (
                      <Badge variant="accent" className="text-[11px] font-semibold">
                        {service.stats}
                      </Badge>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-6 font-heading text-xl font-bold text-foreground transition-colors group-hover:text-accent">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {service.shortDesc}
                  </p>

                  {/* Features Bullets */}
                  <ul className="mt-5 space-y-2 border-t border-border/60 pt-4">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-foreground/80">
                        <Check className="size-3.5 text-accent shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-border/50">
                  <QuoteDialog defaultService={service.title} className="w-full">
                    <span className="flex w-full items-center justify-between text-xs font-semibold text-accent transition-colors hover:text-foreground cursor-pointer">
                      <span>Request Quote for this service</span>
                      <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </QuoteDialog>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
