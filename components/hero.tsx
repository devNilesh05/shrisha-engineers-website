'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Building2, CalendarClock } from 'lucide-react'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 0.95])

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-[10%] h-[120%] w-full"
        aria-hidden="true"
      >
        <img
          src="/projects/highrise.png"
          alt=""
          className="size-full object-cover"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A] via-[#0D1B2A]/85 to-[#0D1B2A]/40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-transparent to-[#0D1B2A]/30"
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8 lg:pt-32"
      >
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-amber-300 backdrop-blur"
          >
            <span className="size-1.5 rounded-full bg-accent" />
            Engineering Excellence Since Day One
          </motion.span>

          <h1 className="mt-6 font-heading text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl text-balance">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="block"
            >
              BUILDING
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="block"
            >
              THE FUTURE
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="block text-accent"
            >
              WITH PRECISION
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            Shrisha Engineers delivers reliable construction, engineering, and
            infrastructure solutions through innovation, quality craftsmanship,
            and industry expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Get A Quote
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating stats card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-10 right-4 z-10 hidden gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md sm:right-6 md:flex lg:right-8"
      >
        <div className="flex items-center gap-3 px-6 py-5">
          <span className="flex size-11 items-center justify-center rounded-xl bg-accent/20 text-accent">
            <Building2 className="size-5" />
          </span>
          <div>
            <div className="font-heading text-2xl font-extrabold text-white">
              50+
            </div>
            <div className="text-xs text-white/70">Projects Completed</div>
          </div>
        </div>
        <div className="w-px bg-white/15" />
        <div className="flex items-center gap-3 px-6 py-5">
          <span className="flex size-11 items-center justify-center rounded-xl bg-accent/20 text-accent">
            <CalendarClock className="size-5" />
          </span>
          <div>
            <div className="font-heading text-2xl font-extrabold text-white">
              10+
            </div>
            <div className="text-xs text-white/70">Years Experience</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
