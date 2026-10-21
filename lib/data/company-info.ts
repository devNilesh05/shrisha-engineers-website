export const COMPANY_INFO = {
  name: 'Shrisha Engineers',
  legalName: 'Shrisha Engineers',
  tagline: 'Engineering & Construction Solutions',
  shortBio:
    'Reliable construction, engineering, and infrastructure solutions built on precision, quality craftsmanship, and trusted execution.',
  email: 'shrishaengineers1@gmail.com',
  phone: {
    display: '+91 91361 95719',
    raw: '+919136195719',
    tel: 'tel:+919136195719',
    whatsapp:
      'https://wa.me/919136195719?text=Hello%20Shrisha%20Engineers,%20I%20would%20like%20to%20inquire%20about%20your%20construction%20and%20engineering%20services.',
  },
  address: {
    line1: 'B201, Devdrishti CHS',
    line2: 'Navade Phase-2',
    city: 'Navi Mumbai',
    state: 'Maharashtra',
    postalCode: '410208',
    country: 'India',
    full: 'B201, Devdrishti CHS, Navade Phase-2, Navi Mumbai – 410208',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Devdrishti+CHS+Navade+Phase+2+Navi+Mumbai+410208',
  },
  workingHours: {
    weekdays: 'Mon – Sat: 9:00 AM – 7:00 PM',
    weekend: 'Sun: By Appointment',
  },
  metrics: [
    { value: 50, suffix: '+', label: 'Projects Completed' },
    { value: 10, suffix: '+', label: 'Years Experience' },
    { value: 25, suffix: '+', label: 'Corporate & Institutional Clients' },
    { value: 100, suffix: '%', label: 'Safety & Quality Compliance' },
  ],
  socials: [
    { label: 'WhatsApp', href: 'https://wa.me/919136195719', icon: 'whatsapp' },
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'Facebook', href: '#', icon: 'facebook' },
  ],
} as const
