'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        className={`inline-flex size-10 items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur ${
          className || ''
        }`}
        aria-hidden="true"
      >
        <span className="size-4 rounded-full bg-muted animate-pulse" />
      </div>
    )
  }

  const isDark = resolvedTheme === 'dark' || theme === 'dark'

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`group relative inline-flex size-10 items-center justify-center rounded-full border border-border/80 bg-card/70 text-foreground backdrop-blur-md transition-all duration-300 hover:border-accent hover:shadow-md hover:shadow-accent/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        className || ''
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="flex items-center justify-center text-amber-400 group-hover:text-amber-300"
          >
            <Sun className="size-4.5 stroke-[2.2]" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="flex items-center justify-center text-slate-700 dark:text-slate-200 group-hover:text-accent"
          >
            <Moon className="size-4.5 stroke-[2.2]" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}
