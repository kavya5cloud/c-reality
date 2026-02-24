import { ShieldCheck, Globe, BarChart3 } from "lucide-react"

const STEPS = [
  {
    icon: ShieldCheck,
    title: "Tokenized Assets",
    description:
      "Premium properties are digitized as blockchain tokens, enabling fractional ownership and transparent provenance.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description:
      "Invest in tokenized real estate from anywhere in the world with low minimums and instant settlement.",
  },
  {
    icon: BarChart3,
    title: "Liquid Markets",
    description:
      "Trade property tokens on secondary markets, unlocking liquidity that traditional real estate cannot offer.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="text-xs font-medium tracking-widest text-primary uppercase">
            How It Works
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Real estate, reimagined
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground text-pretty">
            Three pillars power the CircleChain Reality platform, bringing institutional-grade property investment to everyone.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/40 p-8 backdrop-blur-lg transition-all hover:border-primary/40 hover:bg-card/60"
            >
              {/* Step number */}
              <span className="absolute right-6 top-6 font-mono text-xs text-muted-foreground/40">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 transition-colors group-hover:bg-primary/20">
                <step.icon className="h-5 w-5 text-primary" />
              </div>

              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
