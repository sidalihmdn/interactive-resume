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
      url: '/interactive-resume/S-48.png',
      sizes: '48x48',
      type: 'image/png',
     },
     {
      url: '/interactive-resume/S-32.png',
      sizes: '32x32',
      type: 'image/png',
     },
     {
      url: '/interactive-resume/S-120.png',
      sizes: '120x120',
      type: 'image/png',
     },
    ],
    apple: '/interactive-resume/lohS-180.png',
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
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sid-Ali HAMDANE",
              url: "https://sidalihmdn.github.io",
              image: "https://sidalihmdn.github.io/IMG_4844.png",
              jobTitle: "Software Test Engineer",
            }),
          }}
        />
      </body>
    </html>
  )
}
