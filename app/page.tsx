import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { Stats } from '@/components/stats'
import { Projects } from '@/components/projects'
import { WhyChoose } from '@/components/why-choose'
import { CallToAction } from '@/components/call-to-action'
import { Footer } from '@/components/footer'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'Shrisha Engineers',
  description:
    'Professional construction, engineering, infrastructure development, and project management services.',
  url: 'https://shrisha-engineers.vercel.app',
  email: 'hello@shrishaengineers.com',
  telephone: '+91-00000-00000',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Industrial Estate, Construction Avenue',
    addressCountry: 'IN',
  },
  areaServed: 'IN',
  knowsAbout: [
    'Civil Construction',
    'Structural Engineering',
    'Industrial Projects',
    'Project Management',
    'Infrastructure Development',
    'Renovation & Maintenance',
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
        <Process />
        <Stats />
        <Projects />
        <WhyChoose />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
