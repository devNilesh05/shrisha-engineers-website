'use client'

import { motion } from 'framer-motion'
import {
  Building,
  HardHat,
  Factory,
  ClipboardList,
  TrafficCone,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'

type Service = {
  icon: LucideIcon
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: Building,
    title: 'Civil Construction',
    description:
      'End-to-end civil works for residential, commercial, and institutional builds with precision engineering.',
  },
  {
    icon: HardHat,
    title: 'Structural Engineering',
    description:
      'Robust, code-compliant structural design and analysis built to last under real-world conditions.',
  },
  {
    icon: Factory,
    title: 'Industrial Projects',
    description:
      'Large-scale industrial facilities, plants, and warehouses delivered to demanding specifications.',
  },
  {
    icon: ClipboardList,
    title: 'Project Management',
    description:
      'Disciplined planning, cost control, and on-site coordination from groundbreaking to handover.',
  },
  {
    icon: TrafficCone,
    title: 'Infrastructure Development',
    description:
      'Roads, utilities, and public infrastructure engineered for durability and community impact.',
  },
  {
    icon: Wrench,
    title: 'Renovation & Maintenance',
    description:
      'Modernization, retrofitting, and preventive maintenance that extends the life of every asset.',
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-muted/40 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            What We Do
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Complete Engineering &amp; Construction Solutions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We provide complete engineering and construction solutions across
            every stage of the project lifecycle.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-7 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-xl"
            >
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 size-28 translate-x-1/3 -translate-y-1/3 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0"
              />
              <span className="relative flex size-14 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <service.icon className="size-6" />
              </span>
              <h3 className="relative mt-6 font-heading text-xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
