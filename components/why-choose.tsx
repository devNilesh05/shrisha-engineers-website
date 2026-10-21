'use client'

import { motion } from 'framer-motion'
import { Award, ShieldCheck, Clock, Hammer, CheckCircle2 } from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'
import { QuoteDialog } from '@/components/quote-dialog'

const reasons = [
  {
    icon: Award,
    title: 'Uncompromising Quality',
    description:
      'We never compromise on grade M35/M40 concrete mix designs, certified steel reinforcements, and multi-tier third party structural testing.',
    highlight: 'ISO Standards Compliant',
  },
  {
    icon: ShieldCheck,
    title: 'Zero-Harm Safety Protocol',
    description:
      'Strict safety protocols, mandatory PPE compliance, regular toolbox talks, and continuous hazard mitigation safeguard all on-site personnel.',
    highlight: 'Zero Severe Incidents',
  },
  {
    icon: Clock,
    title: 'Punctual Handover Governance',
    description:
      'Rigid CPM scheduling and proactive material procurement prevent supply bottlenecks and ensure projects meet their committed delivery deadlines.',
    highlight: '98% On-Time Completion',
  },
  {
    icon: Hammer,
    title: 'Technical Structural Mastery',
    description:
      'Our seasoned engineers solve complex foundation, soil-bearing, and high-rise structural challenges with advanced modeling and site discipline.',
    highlight: '50+ Structures Handled',
  },
]

export function WhyChoose() {
  return (
    <section id="why-us" className="relative bg-muted/30 py-24 lg:py-32 overflow-hidden border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent">
            The Shrisha Advantage
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Built on Principles That Stand for Decades
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Why leading developers and institutional bodies like IIT Bombay and RBI
            trust Shrisha Engineers with their most demanding structural projects.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <motion.article
                key={reason.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-7 shadow-sm transition-all duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex size-14 items-center justify-center rounded-2xl bg-accent/15 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-105">
                      <Icon className="size-7 stroke-[2]" />
                    </span>
                    <span className="rounded-full bg-muted px-2.5 py-1 text-[10px] font-semibold text-muted-foreground">
                      {reason.highlight}
                    </span>
                  </div>

                  <h3 className="mt-6 font-heading text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/50 flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="size-3.5 shrink-0" />
                  <span>Guaranteed Standards</span>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* CTA banner inside Why Us */}
        <div className="mt-16 rounded-3xl border border-border bg-card/80 p-8 shadow-md backdrop-blur-sm lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="font-heading text-2xl font-bold text-foreground">
              Ready to Discuss Your Next Construction Milestone?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Speak directly with our senior structural consultants for a free feasibility and cost review.
            </p>
          </div>
          <div className="shrink-0">
            <QuoteDialog triggerLabel="Get A Consultation" />
          </div>
        </div>
      </div>
    </section>
  )
}
