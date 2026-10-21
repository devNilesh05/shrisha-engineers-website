'use client'

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Building, Users, Clock, ShieldCheck } from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'

type Stat = {
  value: number
  suffix: string
  label: string
  sublabel: string
  icon: typeof Building
}

const stats: Stat[] = [
  {
    value: 50,
    suffix: '+',
    label: 'Landmark Projects',
    sublabel: 'Delivered across residential & civil sectors',
    icon: Building,
  },
  {
    value: 25,
    suffix: '+',
    label: 'Key Institutional Clients',
    sublabel: 'Including IIT Bombay & Reserve Bank of India',
    icon: Users,
  },
  {
    value: 10,
    suffix: '+',
    label: 'Years of Engineering',
    sublabel: 'Consistently trusted in Navi Mumbai & NCR',
    icon: Clock,
  },
  {
    value: 100,
    suffix: '%',
    label: 'Safety & Quality Record',
    sublabel: 'Zero-tolerance policy on structural safety',
    icon: ShieldCheck,
  },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const unsub = rounded.on('change', (v) => setDisplay(v))
    return () => unsub()
  }, [rounded])

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2.2,
        ease: [0.22, 1, 0.36, 1],
      })
      return () => controls.stop()
    }
  }, [inView, count, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                className="group relative flex flex-col items-center rounded-2xl border border-border/80 bg-card p-8 text-center shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl bg-accent/15 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="size-7" />
                </div>

                <div className="mt-6 font-heading text-4xl font-extrabold text-foreground tracking-tight sm:text-5xl">
                  <span className="text-accent">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                </div>

                <div className="mt-2 font-heading text-base font-bold text-foreground">
                  {stat.label}
                </div>

                <div className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {stat.sublabel}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
