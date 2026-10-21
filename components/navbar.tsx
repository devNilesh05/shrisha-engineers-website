'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, HardHat, Phone, MessageSquare } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { QuoteDialog } from '@/components/quote-dialog'
import { COMPANY_INFO } from '@/lib/data/company-info'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  const prefix = isHome ? '' : '/'

  const navLinks = [
    { label: 'About', href: `${prefix}#about` },
    { label: 'Services', href: `${prefix}#services` },
    { label: 'Projects', href: '/projects' },
    { label: 'Process', href: `${prefix}#process` },
    { label: 'Why Us', href: `${prefix}#why-us` },
    { label: 'Contact', href: `${prefix}#contact` },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isHeroTop = isHome && !scrolled

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/80 bg-background/85 shadow-lg shadow-black/5 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      {/* Top micro-banner on desktop for direct contact */}
      <div
        className={cn(
          'hidden border-b py-1.5 text-xs transition-colors sm:block',
          isHeroTop
            ? 'border-white/10 bg-black/25 text-white/85'
            : 'border-border/40 bg-muted/40 text-muted-foreground'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              Civil &amp; Structural Contractors • Navi Mumbai &amp; Pan-India
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={COMPANY_INFO.phone.tel}
              className={cn(
                'flex items-center gap-1.5 font-medium transition-colors hover:text-accent',
                isHeroTop ? 'text-white' : 'text-foreground'
              )}
            >
              <Phone className="size-3 text-accent" />
              {COMPANY_INFO.phone.display}
            </a>
            <span className={isHeroTop ? 'text-white/20' : 'text-border'}>•</span>
            <a
              href={COMPANY_INFO.phone.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
            >
              <MessageSquare className="size-3" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-md shadow-accent/20 transition-transform duration-300 group-hover:scale-105">
            <HardHat className="size-5.5 stroke-[2.2]" />
          </span>
          <div className="flex flex-col">
            <span
              className={cn(
                'font-heading text-lg font-extrabold tracking-tight transition-colors group-hover:text-accent sm:text-xl',
                isHeroTop ? 'text-white' : 'text-foreground'
              )}
            >
              SHRISHA<span className="text-accent">.</span>
            </span>
            <span
              className={cn(
                'text-[10px] font-semibold uppercase tracking-widest',
                isHeroTop ? 'text-white/70' : 'text-muted-foreground'
              )}
            >
              Engineers
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div
          className={cn(
            'hidden items-center gap-1 rounded-full border px-3 py-1.5 shadow-sm backdrop-blur-md lg:flex',
            isHeroTop
              ? 'border-white/20 bg-black/40 text-white'
              : 'border-border/70 bg-card/60 text-muted-foreground'
          )}
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === pathname ||
              (link.href === '/projects' && pathname.startsWith('/projects'))
            return (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-accent/20 text-accent font-semibold'
                    : isHeroTop
                      ? 'text-white/85 hover:bg-white/15 hover:text-white'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <ThemeToggle />

          <div className="hidden sm:block">
            <QuoteDialog />
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border/80 bg-card/70 text-foreground transition-colors hover:bg-muted lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1.5 px-4 pt-3 pb-6 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-4 pt-4 border-t border-border/60 flex flex-col gap-3">
                <QuoteDialog
                  triggerLabel="Get A Free Quote"
                  className="w-full justify-center py-3 text-sm font-semibold rounded-xl bg-accent text-accent-foreground shadow-md shadow-accent/20"
                />

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={COMPANY_INFO.phone.tel}
                    className="flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-card p-3 text-xs font-medium text-foreground transition-colors hover:border-accent"
                  >
                    <Phone className="size-3.5 text-accent" />
                    Call Now
                  </a>
                  <a
                    href={COMPANY_INFO.phone.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs font-semibold text-emerald-600 dark:text-emerald-400"
                  >
                    <MessageSquare className="size-3.5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
