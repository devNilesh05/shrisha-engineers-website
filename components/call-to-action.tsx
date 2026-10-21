'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageSquare } from 'lucide-react'
import { fadeUp, viewportOnce } from '@/lib/motion'
import { QuoteDialog } from '@/components/quote-dialog'
import { COMPANY_INFO } from '@/lib/data/company-info'

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-accent py-16 lg:py-20 text-accent-foreground">
      {/* Background radial effects */}
      <div
        aria-hidden="true"
        className="absolute -left-20 -top-20 size-80 rounded-full bg-white/20 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-16 size-80 rounded-full bg-primary/20 blur-3xl pointer-events-none"
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-black/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
          Turnkey Engineering Contracting
        </span>

        <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-accent-foreground sm:text-4xl lg:text-5xl text-balance">
          Ready to Start Your Construction Project with Precision?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-accent-foreground/85 sm:text-lg">
          Partner with Shrisha Engineers for dependable structural design,
          high-rise execution, and industrial development in Navi Mumbai and across India.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <QuoteDialog triggerLabel="Request Instant Quote">
            <span className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90 active:scale-[0.98] cursor-pointer">
              Request Instant Quote
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </QuoteDialog>

          <a
            href={COMPANY_INFO.phone.tel}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-accent-foreground/25 bg-black/10 px-7 py-4 text-sm font-semibold text-accent-foreground backdrop-blur-md transition-all duration-300 hover:bg-black/15 active:scale-[0.98]"
          >
            <Phone className="size-4" />
            {COMPANY_INFO.phone.display}
          </a>

          <a
            href={COMPANY_INFO.phone.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-800/20 bg-emerald-700 text-white px-7 py-4 text-sm font-semibold shadow-md transition-all duration-300 hover:bg-emerald-800 active:scale-[0.98]"
          >
            <MessageSquare className="size-4" />
            WhatsApp Us
          </a>
        </div>
      </motion.div>
    </section>
  )
}
