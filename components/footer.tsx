"use client"

import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Github, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const getFooterLinks = (t: (key: string) => string) => ({
  company: [
    { label: t("navigation.about"), href: "/about" },
    { label: t("navigation.services"), href: "/services" },
    { label: t("navigation.contact"), href: "/contact" },
  ],
  services: [
    { label: t("services.itStrategy.title"), href: "/services" },
    { label: t("services.cloudSolutions.title"), href: "/services" },
    { label: t("services.cybersecurity.title"), href: "/services" },
    { label: t("services.dataAnalytics.title"), href: "/services" },
  ],
  moreServices: [
    { label: t("services.softwareDevelopment.title"), href: "/services" },
    { label: t("services.digitalTransformation.title"), href: "/services" },
    { label: t("services.mobileApp.title"), href: "/services" },
    { label: t("services.aiMachineLearning.title"), href: "/services" },
  ],
  legal: [
    { label: t("footer.privacyPolicy"), href: "#" },
    { label: t("footer.termsOfService"), href: "#" },
    { label: t("footer.cookiePolicy"), href: "#" },
  ],
})

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@booasacre.com", label: "Email" },
]

export function Footer() {
  const { t } = useLanguage()
  const footerLinks = getFooterLinks(t)

  return (
    <footer className="border-t border-border/50 glass mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image src="/images/booasacre-logo.png" alt="Booasacre" width={180} height={40} className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-lg glass hover:glass-strong transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.company")}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services Links */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.moreServices")}</h3>
            <ul className="space-y-2">
              {footerLinks.moreServices.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Booasacre. {t("footer.copyright")}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("footer.tagline")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
