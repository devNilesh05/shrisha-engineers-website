'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Building2, CalendarClock, ShieldCheck, MapPin, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import { QuoteDialog } from '@/components/quote-dialog'
import { COMPANY_INFO } from '@/lib/data/company-info'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.75, 0.95])

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[92vh] lg:min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Parallax background with deep architectural image */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-[10%] h-[120%] w-full"
        aria-hidden="true"
      >
        <img
          src="/projects/highrise.png"
          alt="Shrisha Engineers architectural landmark project"
          className="size-full object-cover object-center filter saturate-110"
        />
      </motion.div>

      {/* Layered cinematic gradients for extreme contrast & luxury readability */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#070D18] via-[#0B1528]/90 to-[#070D18]/70"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-transparent to-[#070D18]/50"
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/4 size-96 rounded-full bg-accent/15 blur-[120px] pointer-events-none"
      />

      {/* Content Container */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-20 pb-28 sm:px-6 lg:px-8 lg:pt-28 lg:pb-36"
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-amber-300 backdrop-blur-md"
          >
            <span className="size-2 rounded-full bg-accent animate-pulse" />
            <span>Turnkey Civil &amp; Structural Contracting Specialists</span>
          </motion.div>

          {/* Heading */}
          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl text-balance">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="block"
            >
              BUILDING
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent"
            >
              LANDMARKS
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block text-accent"
            >
              WITH PRECISION.
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg lg:text-xl font-normal"
          >
            Shrisha Engineers delivers high-performance civil engineering, commercial &amp; residential towers,
            and infrastructure projects with uncompromising quality, structural integrity, and disciplined delivery.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
          >
            <QuoteDialog>
              <span className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-4 text-sm font-bold text-accent-foreground shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-[1.02] hover:bg-accent/95 hover:shadow-accent/40 active:scale-[0.98] cursor-pointer">
                Request Free Quotation
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </QuoteDialog>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/35 active:scale-[0.98]"
            >
              Explore Portfolio (50+)
            </Link>
          </motion.div>

          {/* Contact Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/15 pt-6 text-xs text-white/80"
          >
            <a
              href={COMPANY_INFO.phone.tel}
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Phone className="size-3.5 text-accent" />
              <span className="font-medium">{COMPANY_INFO.phone.display}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Mail className="size-3.5 text-accent" />
              <span className="font-medium">{COMPANY_INFO.email}</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="size-3.5 text-accent" />
              <span>Navade Phase-2, Navi Mumbai</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Trust Metrics Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-10 right-4 z-10 hidden overflow-hidden rounded-2xl border border-white/20 bg-black/40 shadow-2xl backdrop-blur-xl md:flex lg:right-8"
      >
        <div className="flex items-center gap-3.5 px-6 py-4.5 border-r border-white/15">
          <span className="flex size-11 items-center justify-center rounded-xl bg-accent/20 text-accent">
            <Building2 className="size-5.5" />
          </span>
          <div>
            <div className="font-heading text-2xl font-extrabold text-white">50+</div>
            <div className="text-xs font-medium text-white/75">Projects Delivered</div>
          </div>
        </div>

        <div className="flex items-center gap-3.5 px-6 py-4.5 border-r border-white/15">
          <span className="flex size-11 items-center justify-center rounded-xl bg-accent/20 text-accent">
            <CalendarClock className="size-5.5" />
          </span>
          <div>
            <div className="font-heading text-2xl font-extrabold text-white">10+</div>
            <div className="text-xs font-medium text-white/75">Years Experience</div>
          </div>
        </div>

        <div className="flex items-center gap-3.5 px-6 py-4.5">
          <span className="flex size-11 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
            <ShieldCheck className="size-5.5" />
          </span>
          <div>
            <div className="font-heading text-2xl font-extrabold text-white">100%</div>
            <div className="text-xs font-medium text-white/75">Safety Compliance</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
