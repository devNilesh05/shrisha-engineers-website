'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, viewportOnce } from '@/lib/motion'

export function CallToAction() {
  return (
    <section id="contact" className="relative overflow-hidden bg-accent py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute -left-20 -top-20 size-72 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-16 size-80 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-accent-foreground sm:text-4xl lg:text-5xl text-balance">
          Let&apos;s Build Something Exceptional Together
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-accent-foreground/80 sm:text-lg">
          Partner with Shrisha Engineers for reliable engineering and
          construction solutions delivered with precision and care.
        </p>
        <a
          href="mailto:hello@shrishaengineers.com"
          className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Request Consultation
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </section>
  )
}
