'use client'

import { motion } from 'framer-motion'
import { Award, ShieldCheck, Clock, type LucideIcon } from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'

type Reason = {
  icon: LucideIcon
  title: string
  description: string
}

const reasons: Reason[] = [
  {
    icon: Award,
    title: 'Quality',
    description:
      'We never compromise on materials or craftsmanship, delivering results that exceed expectations and endure for decades.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety',
    description:
      'Strict safety protocols protect our teams, clients, and communities on every site, every single day.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description:
      'Disciplined scheduling and proactive management ensure projects are completed on time, every time.',
  },
]

export function WhyChoose() {
  return (
    <section id="why-us" className="relative bg-muted/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Built on Principles That Matter
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {reasons.map((reason) => (
            <motion.article
              key={reason.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-xl"
            >
              <span className="flex size-16 items-center justify-center rounded-2xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <reason.icon className="size-8" />
              </span>
              <h3 className="mt-6 font-heading text-2xl font-bold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
