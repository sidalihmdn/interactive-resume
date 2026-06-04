import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { LanguageProvider } from '@/lib/context/LanguageContext'
import  VisitorCounter from '@/components/VisitorCounter'
import './globals.css'
import Script from 'next/script'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Sid-Ali HAMDANE - Software Test Engineer',
  description: 'Personal resume and portfolio showcasing my work and experience',
  generator: 'ME',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <VisitorCounter></VisitorCounter>
        <LanguageProvider>
          {children}
          <script data-goatcounter="https://berkukes.goatcounter.com/count"
                  async src="//gc.zgo.at/count.js"></script>
        </LanguageProvider>
      </body>
    </html>
  )
}
