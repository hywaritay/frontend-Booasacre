"use client"

import { Navigation } from "@/components/navigation"
import { WaveBackground } from "@/components/wave-background"
import { ContactForm } from "@/components/contact-form"
import { ConsultationForm } from "@/components/consultation-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

const getContactInfo = (t: (key: string) => string) => [
  {
    icon: Mail,
    title: t("contact.contactInfo.email"),
    content: "hello@booasacre.com",
    link: "mailto:hello@booasacre.com",
  },
  {
    icon: Phone,
    title: t("contact.contactInfo.phone"),
    content: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: t("contact.contactInfo.office"),
    content: "123 Tech Boulevard, San Francisco, CA 94105",
    link: null,
  },
  {
    icon: Clock,
    title: t("contact.contactInfo.businessHours"),
    content: "Monday - Friday: 9:00 AM - 6:00 PM PST",
    link: null,
  },
]

export default function ContactPage() {
  const { t } = useLanguage()
  const contactInfo = getContactInfo(t)

  return (
    <>
      <WaveBackground />
      <Navigation />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">{t("contact.hero.title")}</h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
              {t("contact.hero.description")}
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                const content = info.link ? (
                  <a href={info.link} className="hover:text-foreground transition-colors">
                    {info.content}
                  </a>
                ) : (
                  <span>{info.content}</span>
                )

                return (
                  <Card key={index} className="glass border-border/50">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex p-3 rounded-lg bg-foreground/5 mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      <p className="text-sm text-muted-foreground">{content}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Forms Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="container mx-auto max-w-4xl">
            <Tabs defaultValue="contact" className="w-full">
              <TabsList className="grid w-full grid-cols-2 glass mb-8">
                <TabsTrigger value="contact">{t("contact.forms.contactUs")}</TabsTrigger>
                <TabsTrigger value="consultation">{t("contact.forms.requestConsultation")}</TabsTrigger>
              </TabsList>
              <TabsContent value="contact">
                <ContactForm />
              </TabsContent>
              <TabsContent value="consultation">
                <ConsultationForm />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
