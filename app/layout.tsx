import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/context/LanguageContext"
import { en } from "@/lib/content/en"
import { asset, SITE_URL } from "@/lib/site"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: en.meta.title,
  description: en.meta.description,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    title: en.meta.title,
    description: en.meta.description,
    images: [{ url: asset("/S-512.png"), width: 512, height: 512 }],
  },
  icons: {
    icon: [
      { url: asset("/S-32.png"), sizes: "32x32", type: "image/png" },
      { url: asset("/S-48.png"), sizes: "48x48", type: "image/png" },
      { url: asset("/S-120.png"), sizes: "120x120", type: "image/png" },
    ],
    apple: asset("/S-180.png"),
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f7f8" },
    { media: "(prefers-color-scheme: dark)", color: "#0f161c" },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // next-themes and the language detection both change <html> attributes on the client.
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Script data-goatcounter="https://berkukes.goatcounter.com/count" src="//gc.zgo.at/count.js" strategy="afterInteractive" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sid-Ali Hamdane",
              url: SITE_URL,
              image: new URL("S-512.png", SITE_URL).toString(),
              jobTitle: "Software Test Engineer",
              worksFor: { "@type": "Organization", name: "Rakuten France" },
              sameAs: ["https://github.com/sidalihmdn", "https://www.linkedin.com/in/sidali-hamdane"],
            }),
          }}
        />
      </body>
    </html>
  )
}
