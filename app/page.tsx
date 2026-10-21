import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Projects } from '@/components/projects'
import { Process } from '@/components/process'
import { Stats } from '@/components/stats'
import { WhyChoose } from '@/components/why-choose'
import { ContactSection } from '@/components/contact-section'
import { CallToAction } from '@/components/call-to-action'
import { Footer } from '@/components/footer'
import { COMPANY_INFO } from '@/lib/data/company-info'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: COMPANY_INFO.name,
  legalName: COMPANY_INFO.legalName,
  description:
    'Professional civil construction, structural engineering, infrastructure development, and turnkey project contracting in Navi Mumbai, Mumbai, and pan-India.',
  url: 'https://shrisha-engineers.vercel.app',
  email: COMPANY_INFO.email,
  telephone: COMPANY_INFO.phone.display,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'B201, Devdrishti CHS, Navade Phase-2',
    addressLocality: 'Navi Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '410208',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '19.0330',
    longitude: '73.0297',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  areaServed: [
    'Navi Mumbai',
    'Mumbai',
    'Thane',
    'Pune',
    'Greater Noida',
    'India',
  ],
  knowsAbout: [
    'Civil Construction',
    'Structural Engineering',
    'High-Rise Residential Towers',
    'Industrial PEB & Warehousing',
    'Infrastructure & Road Construction',
    'Turnkey EPC Contracting',
    'Seismic Retrofitting',
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <Stats />
        <WhyChoose />
        <ContactSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
