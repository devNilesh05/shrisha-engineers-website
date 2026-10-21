'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { fadeUp, slideRight, slideLeft, viewportOnce } from '@/lib/motion'
import { COMPANY_INFO } from '@/lib/data/company-info'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Civil Construction',
    location: '',
    message: '',
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

  const handleWhatsAppClick = () => {
    const text = `Hello Shrisha Engineers, I would like to inquire about your services:%0A%0A*Name:* ${formData.name || 'Not provided'}%0A*Phone:* ${formData.phone || 'Not provided'}%0A*Service:* ${formData.service}%0A*Location:* ${formData.location || 'Navi Mumbai / Mumbai'}%0A*Message:* ${formData.message || 'General inquiry'}`
    window.open(`https://wa.me/919136195719?text=${text}`, '_blank')
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-40 size-96 rounded-full bg-accent/10 blur-[130px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 -left-40 size-96 rounded-full bg-primary/10 blur-[130px] pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent">
            Get In Touch
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Let&apos;s Build Your Landmark Together
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Have a project in mind? Reach out to our engineering office in Navi Mumbai
            for technical consultations, BoQ estimations, or turnkey proposals.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-14 items-start">
          {/* Left Column: Direct Info Cards */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6 lg:col-span-5"
          >
            {/* Phone Card */}
            <div className="group rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Phone className="size-5.5" />
                </span>
                <div className="flex-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Call &amp; Direct Phone
                  </h3>
                  <a
                    href={COMPANY_INFO.phone.tel}
                    className="mt-1 block font-heading text-lg font-bold text-foreground hover:text-accent transition-colors"
                  >
                    {COMPANY_INFO.phone.display}
                  </a>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Direct line to project coordinator &amp; civil engineers
                  </p>
                  <div className="mt-3">
                    <a
                      href={COMPANY_INFO.phone.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      <MessageSquare className="size-3.5" />
                      Chat directly on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Mail className="size-5.5" />
                </span>
                <div className="flex-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Official Email
                  </h3>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="mt-1 block font-heading text-base font-bold text-foreground hover:text-accent transition-colors break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Send tender documents, RFQs, and architectural blueprints
                  </p>
                </div>
              </div>
            </div>

            {/* Office Address Card */}
            <div className="group rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <MapPin className="size-5.5" />
                </span>
                <div className="flex-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Registered Office &amp; Engineering HQ
                  </h3>
                  <p className="mt-1 font-heading text-sm font-semibold text-foreground leading-snug">
                    {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.line2},
                    <br />
                    {COMPANY_INFO.address.city} – {COMPANY_INFO.address.postalCode}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Maharashtra, India
                  </p>
                  <div className="mt-3">
                    <a
                      href={COMPANY_INFO.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                    >
                      <span>Open in Google Maps</span>
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="rounded-2xl border border-border/60 bg-muted/40 p-5 text-xs text-muted-foreground flex items-center gap-3">
              <Clock className="size-5 text-accent shrink-0" />
              <div>
                <span className="font-semibold text-foreground">Working Hours:</span>{' '}
                {COMPANY_INFO.workingHours.weekdays} | {COMPANY_INFO.workingHours.weekend}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Inquiry Form */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-3xl border border-border bg-card p-7 shadow-xl backdrop-blur sm:p-9 lg:col-span-7"
          >
            <div className="border-b border-border/60 pb-5">
              <h3 className="font-heading text-2xl font-bold text-foreground">
                Send Project Inquiry
              </h3>
              <p className="mt-1.5 text-xs text-muted-foreground">
                Fill out the form below or message directly for an immediate reply.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="size-9" />
                </div>
                <h4 className="font-heading text-2xl font-bold text-foreground">
                  Inquiry Successfully Sent!
                </h4>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  Thank you for reaching out to Shrisha Engineers. Our senior engineering
                  team will review your requirements and connect with you shortly.
                </p>
                <div className="pt-4 flex flex-wrap gap-3 justify-center">
                  <Button
                    variant="outline"
                    onClick={handleWhatsAppClick}
                    className="gap-2 border-emerald-500/40 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/20"
                  >
                    <MessageSquare className="size-4" />
                    Chat with us on WhatsApp
                  </Button>
                  <Button
                    variant="default"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        service: 'Civil Construction',
                        location: '',
                        message: '',
                      })
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Your Name *
                    </label>
                    <Input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Vikas Patil"
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
                      placeholder="name@company.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="flex h-11 w-full rounded-xl border border-input bg-background/80 px-3.5 py-2 text-sm shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <option value="Civil Construction">Civil &amp; Structural Construction</option>
                      <option value="Structural Engineering">Structural Design &amp; Modeling</option>
                      <option value="Industrial Projects">Industrial Facilities &amp; Warehousing</option>
                      <option value="Project Management">EPC &amp; Project Management</option>
                      <option value="Infrastructure Development">Infrastructure &amp; Roads</option>
                      <option value="Renovation & Maintenance">Retrofitting &amp; Repairs</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Project Location / Site Address
                  </label>
                  <Input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Kharghar, Navi Mumbai, Powai, Thane, NCR"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Message or Project Scope
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your site area, requirements, timeline, or any specific structural inquiries..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-end items-center">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleWhatsAppClick}
                    className="w-full sm:w-auto gap-2 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 text-xs py-2.5"
                  >
                    <MessageSquare className="size-4" />
                    Send via WhatsApp
                  </Button>
                  <Button
                    type="submit"
                    className="w-full sm:w-auto gap-2 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 px-7 py-2.5 text-xs shadow-md shadow-accent/20"
                  >
                    <Send className="size-4" />
                    Submit Project Inquiry
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
