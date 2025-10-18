"use client"

import { Navigation } from "@/components/navigation"
import { WaveBackground } from "@/components/wave-background"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, Eye, Award, Users, ArrowRight, Sparkles } from "lucide-react"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

const getValues = (t: (key: string) => string) => [
  {
    icon: Target,
    title: t("about.values.innovation.title"),
    description: t("about.values.innovation.description"),
  },
  {
    icon: Award,
    title: t("about.values.excellence.title"),
    description: t("about.values.excellence.description"),
  },
  {
    icon: Users,
    title: t("about.values.clientCentric.title"),
    description: t("about.values.clientCentric.description"),
  },
  {
    icon: Sparkles,
    title: t("about.values.agility.title"),
    description: t("about.values.agility.description"),
  },
]

export default function AboutPage() {
  const { t } = useLanguage()
  const values = getValues(t)

  return (
    <>
      <WaveBackground />
      <Navigation />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">
              {t("about.hero.title")}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
              {t("about.hero.description")}
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="glass border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-foreground/5">
                      <Target className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold">{t("about.mission.title")}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("about.mission.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="glass border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-foreground/5">
                      <Eye className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold">{t("about.vision.title")}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("about.vision.description")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* Values Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("about.values.title")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                {t("about.values.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card key={index} className="glass hover:glass-strong transition-all duration-300 border-border/50">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex p-4 rounded-xl bg-foreground/5 mb-4">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("about.team.title")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                {t("about.team.subtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {name: "John Doe", role: "CEO", image: "https://tse1.mm.bing.net/th/id/OIP.uRYpeyDdgui_P7w_qY2FlgHaIR?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"},
                {name: "Jane Smith", role: "CTO", image: "https://djwp.s3.amazonaws.com/wp-content/uploads/2013/10/07163153/Document-Journal_Alice-Smith_THUMB_HEADER.jpg"},
                {name: "Alice Johnson", role: "Lead Engineer", image: "https://tse1.mm.bing.net/th/id/OIP.P5IENnm6ifooFtVdO6PGzgHaHa?cb=12&w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3"},
                {name: "Bob Williams", role: "Project Manager", image: "https://tse1.mm.bing.net/th/id/OIP.lvk8UO555yHzcCCqP_nE1QHaFj?cb=12&w=826&h=620&rs=1&pid=ImgDetMain&o=7&rm=3"},
              ].map((member, index) => (
                  <Card key={index} className="glass hover:glass-strong transition-all duration-300 border-border/50">
                    <CardContent className="p-6 text-center">
                      <img
                          src={member.image}
                          alt={member.name}
                          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Expertise Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="container mx-auto max-w-4xl">
            <Card className="glass border-border/50">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-center">{t("about.expertise.title")}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    {t("about.expertise.description1")}
                  </p>
                  <p>
                    {t("about.expertise.description2")}
                  </p>
                  <p>
                    {t("about.expertise.description3")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="container mx-auto">
            <div className="glass-strong rounded-2xl p-12 md:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">{t("about.cta.title")}</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
                {t("about.cta.description")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 group">
                  <Link href="/contact">
                    {t("about.cta.getInTouch")}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="glass hover:glass-strong bg-transparent">
                  <Link href="/services">{t("about.cta.viewServices")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
