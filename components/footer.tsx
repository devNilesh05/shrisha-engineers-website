import { HardHat, MapPin, Phone, Mail, MessageSquare, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { COMPANY_INFO } from '@/lib/data/company-info'
import { SERVICES } from '@/lib/data/services'

const navLinks = [
  { label: 'About Us', href: '/#about' },
  { label: 'Engineering Services', href: '/#services' },
  { label: 'Featured Projects', href: '/projects' },
  { label: 'Execution Process', href: '/#process' },
  { label: 'Why Shrisha', href: '/#why-us' },
  { label: 'Contact Office', href: '/#contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground border-t border-border/20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-md transition-transform duration-300 group-hover:scale-105">
                <HardHat className="size-5.5 stroke-[2.2]" />
              </span>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-extrabold tracking-tight text-white">
                  SHRISHA<span className="text-accent">.</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-foreground/70">
                  Engineers
                </span>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              Premier civil and structural contracting firm delivering high-rise residential towers,
              institutional complexes, and heavy infrastructure with uncompromising engineering precision.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href={COMPANY_INFO.phone.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-4 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/25 transition-colors"
              >
                <MessageSquare className="size-3.5" />
                WhatsApp Direct Connect
              </a>
              <a
                href={COMPANY_INFO.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3.5 py-2 text-xs font-medium text-white/90 hover:bg-white/10 transition-colors"
              >
                <span>Google Maps</span>
                <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-accent">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-primary-foreground/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-accent">
              Engineering Disciplines
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href="/#services"
                    className="text-xs text-primary-foreground/70 transition-colors hover:text-white line-clamp-1"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-accent">
              Office &amp; Contact
            </h3>
            <ul className="mt-4 space-y-3.5 text-xs text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="size-4 shrink-0 text-accent mt-0.5" />
                <span>
                  {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.line2},
                  <br />
                  {COMPANY_INFO.address.city} – {COMPANY_INFO.address.postalCode}, Maharashtra
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-accent" />
                <a
                  href={COMPANY_INFO.phone.tel}
                  className="font-medium hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phone.display}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-accent" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-3.5 text-[11px] text-primary-foreground/70">
              <span className="font-semibold text-white">Service Area:</span> Navi Mumbai, Mumbai, Thane, Pune, Greater Noida NCR, &amp; Pan-India.
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row text-xs text-primary-foreground/60">
          <p>
            &copy; {currentYear} Shrisha Engineers. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>B201 Devdrishti CHS, Navade Phase-2, Navi Mumbai – 410208</span>
            <span>•</span>
            <span>Civil &amp; Structural Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
