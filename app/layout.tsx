import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Montserrat, Inter, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { COMPANY_INFO } from '@/lib/data/company-info'
import './globals.css'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl = 'https://shrisha-engineers.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Shrisha Engineers | Turnkey Civil & Structural Contractors',
    template: '%s | Shrisha Engineers',
  },
  description:
    'Premier civil engineering, structural design, and turnkey construction company based in Navi Mumbai. Proven track record in high-rise residential towers, institutional projects (IIT Bombay, RBI), and industrial developments.',
  keywords: [
    'Shrisha Engineers',
    'Civil construction company Navi Mumbai',
    'Structural engineers Navi Mumbai',
    'Turnkey construction contractor Mumbai',
    'Commercial building contractors',
    'High rise residential tower construction',
    'Industrial PEB construction',
    'ATS Rhapsody contractor',
    'RBI Staff Quarters Kharghar',
    'IIT Bombay construction',
    'B201 Devdrishti CHS Navade Phase-2',
    'Navi Mumbai 410208',
  ],
  authors: [{ name: COMPANY_INFO.name, url: siteUrl }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Shrisha Engineers | Turnkey Civil & Structural Engineering Contractors',
    description:
      'High-performance civil construction, structural design, and turnkey project execution based in Navi Mumbai. Delivering precision landmarks for premier developers and institutions.',
    url: siteUrl,
    siteName: COMPANY_INFO.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/projects/highrise.png',
        width: 1200,
        height: 630,
        alt: 'Shrisha Engineers landmark construction project',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shrisha Engineers | Turnkey Civil & Structural Contractors',
    description:
      'Premier civil engineering and turnkey construction company based in Navi Mumbai. Precision, quality craftsmanship, and safety guaranteed.',
    images: ['/projects/highrise.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-light-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-dark-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8F9FA' },
    { media: '(prefers-color-scheme: dark)', color: '#0D1B2A' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${inter.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased selection:bg-accent/30 selection:text-foreground min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
