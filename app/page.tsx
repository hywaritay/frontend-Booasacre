import { Navigation } from "@/components/navigation"
import { WaveBackground } from "@/components/wave-background"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <WaveBackground />
      <Navigation />
      <main>
        <HeroSection />
        <ServicesOverview />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
