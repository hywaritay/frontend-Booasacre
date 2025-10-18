"use client"

import { Navigation } from "@/components/navigation"
import { WaveBackground } from "@/components/wave-background"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Lightbulb,
  Cloud,
  Shield,
  BarChart3,
  Code,
  Zap,
  Smartphone,
  Brain,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

const services = [
  {
    icon: Lightbulb,
    title: "IT Strategy Consulting",
    description:
      "Aligning technology initiatives with business goals to drive growth and innovation. We help organizations develop comprehensive IT strategies that support long-term business objectives.",
    benefits: [
      "Strategic technology roadmap development",
      "IT governance and compliance frameworks",
      "Technology investment optimization",
      "Digital strategy alignment with business goals",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Designing scalable cloud architectures for flexibility and cost efficiency. Our cloud experts help you migrate, optimize, and manage your cloud infrastructure across all major platforms.",
    benefits: [
      "Cloud migration and modernization",
      "Multi-cloud and hybrid cloud strategies",
      "Cloud cost optimization",
      "Infrastructure as Code (IaC) implementation",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description:
      "Comprehensive security assessments and solutions to protect digital assets. We provide end-to-end cybersecurity services to safeguard your organization from evolving threats.",
    benefits: [
      "Security audits and vulnerability assessments",
      "Incident response and threat management",
      "Security architecture design",
      "Compliance and regulatory support",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transforming data into actionable insights for informed decision-making. Our data analytics services help you unlock the value of your data and drive business intelligence.",
    benefits: [
      "Business intelligence and reporting",
      "Predictive analytics and forecasting",
      "Data warehouse design and implementation",
      "Real-time analytics dashboards",
    ],
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom software solutions tailored to specific business needs. We build scalable, maintainable applications that solve complex business challenges and improve operational efficiency.",
    benefits: [
      "Custom application development",
      "Legacy system modernization",
      "API development and integration",
      "Agile development methodologies",
    ],
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description:
      "Guiding organizations through technological change to enhance efficiency and competitiveness. We help businesses reimagine their operations and customer experiences through digital innovation.",
    benefits: [
      "Process automation and optimization",
      "Change management and training",
      "Digital customer experience design",
      "Innovation workshops and ideation",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Building user-friendly mobile applications for iOS and Android. Our mobile development team creates engaging, performant apps that deliver exceptional user experiences.",
    benefits: [
      "Native iOS and Android development",
      "Cross-platform mobile solutions",
      "Mobile UX/UI design",
      "App store optimization and deployment",
    ],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Implementing intelligent, adaptive solutions to optimize business processes. We leverage cutting-edge AI and ML technologies to automate tasks, enhance decision-making, and create competitive advantages.",
    benefits: [
      "Machine learning model development",
      "Natural language processing (NLP)",
      "Computer vision solutions",
      "AI strategy and implementation roadmaps",
    ],
  },
]

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <>
      <WaveBackground />
      <Navigation />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">
              {t("services.hero.title")}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
              {t("services.hero.description")}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card
                    key={index}
                    className="glass hover:glass-strong transition-all duration-300 border-border/50 group"
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-4 rounded-xl bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                          <Icon className="h-8 w-8" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                          <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                          {t("services.keyBenefits")}
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-foreground/60 flex-shrink-0 mt-0.5" />
                              <span className="text-sm leading-relaxed">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="container mx-auto">
            <div className="glass-strong rounded-2xl p-12 md:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">{t("services.cta.title")}</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
                {t("services.cta.description")}
              </p>
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 group">
                <Link href="/contact">
                  {t("services.cta.requestConsultation")}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
