import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/language-context"
import { WaveBackground } from "@/components/wave-background"
import "./globals.css"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Booasacre | Technology Engineering Consulting",
  description: "Innovative technology consulting solutions to align technology with business goals",
    generator: ''
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Suspense fallback={null}>
          <LanguageProvider>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
              <WaveBackground />
              {children}
            </ThemeProvider>
          </LanguageProvider>
        </Suspense>
      </body>
    </html>
  )
}
