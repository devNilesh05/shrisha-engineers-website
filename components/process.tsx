'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'

const steps = [
  { num: '01', title: 'Consultation', desc: 'Understanding your vision, goals, and site requirements.' },
  { num: '02', title: 'Planning & Design', desc: 'Detailed engineering, drawings, and feasibility analysis.' },
  { num: '03', title: 'Execution', desc: 'Skilled on-site construction with rigorous quality control.' },
  { num: '04', title: 'Inspection', desc: 'Thorough testing and compliance checks at every stage.' },
  { num: '05', title: 'Delivery', desc: 'On-time handover with complete documentation and support.' },
]

export function Process() {
  return (
    <section id="process" className="relative bg-primary py-24 text-primary-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            How We Work
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            A Proven Process, Engineered for Results
          </h2>
        </motion.div>

        <div className="relative mt-16">
          {/* connecting line - desktop */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-white/15 lg:block"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              style={{ originX: 0 }}
              className="h-full w-full bg-accent"
            />
          </div>

          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-10 lg:grid-cols-5 lg:gap-6"
          >
            {steps.map((step) => (
              <motion.li
                key={step.num}
                variants={fadeUp}
                className="relative flex gap-5 lg:flex-col lg:gap-0"
              >
                {/* vertical connector - mobile */}
                <div
                  aria-hidden="true"
                  className="absolute left-7 top-14 h-[calc(100%+1.5rem)] w-px bg-white/15 lg:hidden"
                />
                <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-secondary font-heading text-lg font-extrabold text-accent">
                  {step.num}
                </span>
                <div className="lg:mt-6">
                  <h3 className="font-heading text-xl font-bold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/65">
                    {step.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  )
}
