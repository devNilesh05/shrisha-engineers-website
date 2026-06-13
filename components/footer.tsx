import { HardHat, MapPin, Phone, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Who We Are', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Us', href: '#why-us' },
]

const serviceLinks = [
  'Civil Construction',
  'Structural Engineering',
  'Industrial Projects',
  'Project Management',
  'Infrastructure Development',
]

const socials = [
  { src: '/social/facebook.svg', label: 'Facebook' },
  { src: '/social/instagram.svg', label: 'Instagram' },
  { src: '/social/linkedin.svg', label: 'LinkedIn' },
  { src: '/social/x.svg', label: 'X' },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <HardHat className="size-5" />
              </span>
              <span className="font-heading text-lg font-extrabold tracking-tight">
                SHRISHA<span className="text-accent">.</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/65">
              Reliable construction, engineering, and infrastructure solutions
              built on precision, quality, and trust.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 text-primary-foreground/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="size-4 bg-current"
                    style={{
                      maskImage: `url(${social.src})`,
                      WebkitMaskImage: `url(${social.src})`,
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskPosition: 'center',
                      WebkitMaskPosition: 'center',
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain',
                    }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-accent">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-accent">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-accent">
              Contact
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-primary-foreground/70">
              <li className="flex gap-3">
                <MapPin className="size-5 shrink-0 text-accent" />
                <span>123 Industrial Estate, Construction Avenue, India</span>
              </li>
              <li className="flex gap-3">
                <Phone className="size-5 shrink-0 text-accent" />
                <a href="tel:+910000000000" className="hover:text-primary-foreground">
                  +91 00000 00000
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="size-5 shrink-0 text-accent" />
                <a
                  href="mailto:hello@shrishaengineers.com"
                  className="hover:text-primary-foreground"
                >
                  hello@shrishaengineers.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-primary-foreground/55">
            &copy; {new Date().getFullYear()} Shrisha Engineers. All rights
            reserved.
          </p>
          <p className="text-sm text-primary-foreground/55">
            Engineering &amp; Construction Solutions
          </p>
        </div>
      </div>
    </footer>
  )
}
