import { BackgroundEffects } from "@/components/background-effects"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { RegisterForm } from "@/components/register-form"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <SiteHeader />
      <main className="relative">
        <HeroSection />
        <HowItWorks />
        <RegisterForm />
      </main>
      <SiteFooter />
    </>
  )
}
