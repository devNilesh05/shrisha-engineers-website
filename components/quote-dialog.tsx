'use client'

import * as React from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogPopup,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { COMPANY_INFO } from '@/lib/data/company-info'
import { CheckCircle2, MessageSquare, PhoneCall, Send } from 'lucide-react'
import { cn } from '@/lib/utils'

interface QuoteDialogProps {
  children?: React.ReactNode
  triggerLabel?: string
  defaultService?: string
  className?: string
}

export function QuoteDialog({
  children,
  triggerLabel = 'Get A Free Quote',
  defaultService = 'Civil Construction',
  className,
}: QuoteDialogProps) {
  const [open, setOpen] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService,
    location: '',
    details: '',
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleWhatsAppRedirect = () => {
    const text = `Hello Shrisha Engineers, I would like to request a quote:%0A%0A*Name:* ${formData.name || 'Not provided'}%0A*Phone:* ${formData.phone || 'Not provided'}%0A*Project Type:* ${formData.service}%0A*Site Location:* ${formData.location || 'Not provided'}%0A*Details:* ${formData.details || 'Standard inquiry'}`
    window.open(`https://wa.me/919136195719?text=${text}`, '_blank')
  }

  const resetForm = () => {
    setSubmitted(false)
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: defaultService,
      location: '',
      details: '',
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={cn(
          !children &&
            'inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-xs font-bold text-accent-foreground shadow-md transition-all duration-300 hover:bg-accent/90 hover:scale-105 active:scale-95 cursor-pointer',
          className
        )}
      >
        {children || triggerLabel}
      </DialogTrigger>

      <DialogPopup className="max-w-xl">
        <DialogHeader>
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            Shrisha Engineers • Rapid Response
          </div>
          <DialogTitle className="mt-2 text-2xl">Request an Engineering Quotation</DialogTitle>
          <DialogDescription>
            Tell us about your project requirements in Navi Mumbai, Mumbai, or pan-India. Our senior project engineers will respond within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="size-8" />
            </div>
            <h4 className="font-heading text-xl font-bold text-foreground">
              Thank You! We Have Received Your Request.
            </h4>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Our engineering team will review your project details and contact you at{' '}
              <span className="font-semibold text-foreground">{formData.phone || formData.email || 'your contact'}</span> shortly.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="outline"
                onClick={handleWhatsAppRedirect}
                className="gap-2 border-emerald-500/40 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/20"
              >
                <MessageSquare className="size-4" />
                Continue on WhatsApp
              </Button>
              <Button
                variant="default"
                onClick={() => {
                  resetForm()
                  setOpen(false)
                }}
              >
                Done
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Your Full Name *
                </label>
                <Input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rajesh Sharma"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Mobile Number *
                </label>
                <Input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 91361 95719"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Project Category
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="flex h-11 w-full rounded-xl border border-input bg-background/80 px-3.5 py-2 text-sm shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <option value="Civil Construction">Civil & Structural Construction</option>
                  <option value="Structural Engineering">Structural Design & Analysis</option>
                  <option value="Industrial Projects">Industrial Facilities & Warehousing</option>
                  <option value="Project Management">EPC & Project Management</option>
                  <option value="Infrastructure Development">Infrastructure & Urban Works</option>
                  <option value="Renovation & Maintenance">Retrofitting & Modernization</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Site Location / City
              </label>
              <Input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Navi Mumbai, Mumbai, Thane, Pune, NCR"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Project Scope & Requirements
              </label>
              <Textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Approximate built-up area (sq. ft.), timeline, architectural requirements..."
                className="min-h-[90px]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-end items-center">
              <a
                href={COMPANY_INFO.phone.tel}
                className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5"
              >
                <PhoneCall className="size-3.5 text-accent" />
                Call Directly: {COMPANY_INFO.phone.display}
              </a>
              <div className="flex gap-2 w-full sm:w-auto">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleWhatsAppRedirect}
                  className="gap-2 text-xs border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10"
                >
                  <MessageSquare className="size-3.5" />
                  WhatsApp
                </Button>
                <Button type="submit" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 flex-1 sm:flex-none">
                  <Send className="size-3.5" />
                  Submit Request
                </Button>
              </div>
            </div>
          </form>
        )}
      </DialogPopup>
    </Dialog>
  )
}
