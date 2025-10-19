"use client"

import { Card, CardContent } from "./ui/card"
import { Lightbulb, Cloud, Shield, BarChart3, Code, Zap, Smartphone, Brain } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

const getServices = (t: (key: string) => string) => [
  {
    number: "01",
    icon: Lightbulb,
    title: "IT Strategy Consulting",
    description: "Aligning technology initiatives with business goals to drive growth and innovation.",
  },
  {
    number: "02",
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Designing scalable cloud architectures for flexibility and cost efficiency.",
  },
  {
    number: "03",
    icon: Shield,
    title: "Cybersecurity Services",
    description: "Comprehensive security assessments and solutions to protect digital assets.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transforming data into actionable insights for informed decision-making.",
  },
  {
    number: "05",
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to specific business needs.",
  },
  {
    number: "06",
    icon: Zap,
    title: "Digital Transformation",
    description: "Guiding organizations through technological change to enhance efficiency.",
  },
  {
    number: "07",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Building user-friendly mobile applications for iOS and Android.",
  },
  {
    number: "08",
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Implementing intelligent, adaptive solutions to optimize business processes.",
  },
]

export function ServicesOverview() {
  const { t } = useLanguage()
  const services = getServices(t)

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">Our Core Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
             Comprehensive technology solutions designed to transform your business and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link href="/services" key={service.number}>
                <Card className="glass hover:glass-strong transition-all duration-300 h-full group cursor-pointer border-border/50">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-mono text-muted-foreground">{service.number}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-foreground transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
