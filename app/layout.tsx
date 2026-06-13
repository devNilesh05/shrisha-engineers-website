import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Montserrat, Inter, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
})
const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = 'https://shrisha-engineers.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Shrisha Engineers | Engineering & Construction Solutions',
  description:
    'Professional construction, engineering, infrastructure development, and project management services delivered with precision, quality craftsmanship, and industry expertise.',
  generator: 'v0.app',
  keywords: [
    'construction company',
    'civil construction',
    'structural engineering',
    'infrastructure development',
    'project management',
    'industrial projects',
    'Shrisha Engineers',
  ],
  openGraph: {
    title: 'Shrisha Engineers | Engineering & Construction Solutions',
    description:
      'Reliable construction, engineering, and infrastructure solutions through innovation, quality craftsmanship, and industry expertise.',
    url: siteUrl,
    siteName: 'Shrisha Engineers',
    type: 'website',
    images: [
      {
        url: '/projects/highrise.png',
        width: 1200,
        height: 630,
        alt: 'Shrisha Engineers high-rise residential project',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shrisha Engineers | Engineering & Construction Solutions',
    description:
      'Reliable construction, engineering, and infrastructure solutions delivered with precision.',
    images: ['/projects/highrise.png'],
  },
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
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
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
