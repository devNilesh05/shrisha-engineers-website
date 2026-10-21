'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'
import { Compass, FileSpreadsheet, HardHat, ShieldCheck, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Compass,
    title: 'Consultation & Site Feasibility',
    desc: 'Geotechnical soil investigation, topographical survey analysis, and alignment on architectural requirements.',
  },
  {
    num: '02',
    icon: FileSpreadsheet,
    title: 'Structural Design & Estimation',
    desc: 'STAAD.Pro structural modeling, bar bending schedules, material procurement scheduling, and transparent BoQs.',
  },
  {
    num: '03',
    icon: HardHat,
    title: 'Precision Turnkey Execution',
    desc: 'Deep excavation, high-grade monolithic RCC casting, post-tensioned slabs, and structural steel fabrication.',
  },
  {
    num: '04',
    icon: ShieldCheck,
    title: 'Continuous QA/QC & Auditing',
    desc: 'Non-destructive concrete core testing, third-party lab verification, ultrasonic weld inspections, and daily safety audits.',
  },
  {
    num: '05',
    icon: CheckCircle2,
    title: 'Handover & As-Built Dossier',
    desc: 'Comprehensive structural warranty, statutory occupancy certificates (OC), and complete as-built maintenance documentation.',
  },
]

export function Process() {
  return (
    <section id="process" className="relative bg-primary py-24 text-primary-foreground lg:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-accent/5 blur-[140px] pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent">
            Methodology &amp; Standards
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            A Rigorous 5-Stage Engineering Workflow
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            From initial ground surveys to final handover, every milestone is monitored
            with military precision and industry-certified quality controls.
          </p>
        </motion.div>

        <div className="relative mt-20">
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-6 right-6 top-8 hidden h-0.5 bg-white/15 lg:block"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
              style={{ originX: 0 }}
              className="h-full w-full bg-accent"
            />
          </div>

          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-8 lg:grid-cols-5 lg:gap-6"
          >
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <motion.li
                  key={step.num}
                  variants={fadeUp}
                  className="group relative flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-white/10 lg:flex-col lg:p-5"
                >
                  {/* Mobile vertical line */}
                  <div
                    aria-hidden="true"
                    className="absolute left-8.5 top-16 h-[calc(100%-1rem)] w-px bg-white/15 lg:hidden"
                  />

                  {/* Step Number + Icon Badge */}
                  <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl border border-accent/40 bg-secondary shadow-lg shadow-black/20 font-heading text-base font-extrabold text-accent transition-transform duration-300 group-hover:scale-105 group-hover:border-accent">
                    <Icon className="size-6 stroke-[2]" />
                  </div>

                  <div className="lg:mt-6">
                    <span className="text-xs font-bold text-accent tracking-widest uppercase">
                      Stage {step.num}
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-bold text-white group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-primary-foreground/70">
                      {step.desc}
                    </p>
                  </div>
                </motion.li>
              )
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  )
}
