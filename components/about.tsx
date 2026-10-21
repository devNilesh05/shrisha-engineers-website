'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ShieldCheck, Award, HardHat, Building, MapPin } from 'lucide-react'
import { fadeUp, slideRight, slideLeft, stagger, viewportOnce } from '@/lib/motion'
import { COMPANY_INFO } from '@/lib/data/company-info'
import { QuoteDialog } from '@/components/quote-dialog'

const strengths = [
  {
    title: 'Earthquake & Wind Resistant Design',
    desc: 'Strict adherence to IS Codes and structural dynamics.',
  },
  {
    title: 'Precision Monolithic Concrete',
    desc: 'High-grade mix designs and advanced formwork setups.',
  },
  {
    title: 'Turnkey Contract Execution',
    desc: 'End-to-end management from excavation to occupancy.',
  },
  {
    title: 'Zero-Compromise Site Safety',
    desc: 'Daily audits, PPE enforcement, and trained labor workforce.',
  },
]

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image & Showcase Column */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-3xl border border-border shadow-2xl bg-card">
                <img
                  src="/projects/towers.png"
                  alt="Shrisha Engineers multi-tower residential development under execution"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Quality Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOnce}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-6 -right-2 rounded-2xl border border-border bg-card/95 p-5 shadow-2xl backdrop-blur-md sm:-right-6 sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-accent/20 text-accent">
                    <Award className="size-6" />
                  </span>
                  <div>
                    <div className="font-heading text-3xl font-extrabold text-accent">
                      100%
                    </div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Quality &amp; Safety Commitment
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Top-left Experience Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -top-4 -left-2 rounded-xl border border-border/80 bg-background/90 px-4 py-2.5 shadow-lg backdrop-blur-md sm:-left-6"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                  <MapPin className="size-3.5 text-accent" />
                  <span>Headquartered in Navi Mumbai</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text & Content Column */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent">
              <HardHat className="size-3.5" />
              Who We Are
            </div>

            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Mastering Construction Through Rigorous Engineering &amp; Integrity
            </h2>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <strong className="text-foreground font-semibold">Shrisha Engineers</strong> is a premier civil
              and structural engineering firm based out of{' '}
              <span className="text-foreground font-medium">Navi Mumbai</span>. We specialize in the turnkey delivery
              of high-rise residential towers, institutional facilities (including projects for IIT Bombay and RBI),
              and heavy industrial setups.
            </p>

            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              By combining cutting-edge structural simulation, modern concrete technologies, and rigorous on-site
              supervision, we ensure every project stands resilient against seismic forces, weathering, and time.
            </p>

            {/* Strengths Grid */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {strengths.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-xl border border-border bg-card/60 p-4 transition-all duration-300 hover:border-accent/40 hover:bg-card hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent mt-0.5">
                      <CheckCircle2 className="size-4" />
                    </span>
                    <div>
                      <h3 className="font-heading text-sm font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Actions */}
            <div className="mt-9 flex flex-wrap items-center gap-4 pt-2">
              <QuoteDialog triggerLabel="Inquire About Your Project" />
              <a
                href={COMPANY_INFO.phone.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 transition-colors hover:bg-emerald-500/20"
              >
                Direct WhatsApp Inquiries: {COMPANY_INFO.phone.display}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
