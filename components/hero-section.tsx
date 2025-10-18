"use client"

import { Button } from "./ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="container mx-auto text-center max-w-5xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-medium">{t("hero.tagline")}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight animate-fade-in-up">
          {t("hero.title")}{" "}
          <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            {t("hero.titleHighlight")}
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-in-up animation-delay-200">
          {t("hero.description")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 group">
            <Link href="/contact">
              {t("hero.requestConsultation")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="glass hover:glass-strong bg-transparent">
            <Link href="/services">{t("hero.exploreServices")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
