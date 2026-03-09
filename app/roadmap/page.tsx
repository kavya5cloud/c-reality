import { BackgroundEffects } from "@/components/background-effects"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function RoadmapPage() {
  return (
    <>
      <BackgroundEffects />
      <SiteHeader />
      <main className="relative mt-16">
        <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16">
          <header className="space-y-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              CircleChain Reality
            </p>
            <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Two-Sided Blockchain Real Estate Platform
            </h1>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Execution Roadmap for India
            </p>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
              A phased roadmap to launch, scale, and institutionalize a compliant tokenized real
              estate marketplace in India, aligning retail and institutional investors with
              high-quality developers.
            </p>
          </header>

          <section className="grid gap-8 rounded-2xl border border-border/50 bg-background/60 p-6 shadow-sm backdrop-blur-xl sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                Strategic Objectives
              </h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">1. Regulatory-first design:</span>{" "}
                  Align with Indian real estate, securities, and KYC/AML frameworks from day one.
                </li>
                <li>
                  <span className="font-semibold text-foreground">2. Two-sided liquidity:</span>{" "}
                  Build trust and depth on both investor and developer sides through curated
                  projects and transparent token economics.
                </li>
                <li>
                  <span className="font-semibold text-foreground">3. Institutional readiness:</span>{" "}
                  Architect the platform to support custody, reporting, and governance standards
                  expected by banks, funds, and family offices.
                </li>
                <li>
                  <span className="font-semibold text-foreground">4. India-first, global-ready:</span>{" "}
                  Start with Indian regulatory and market realities while keeping the architecture
                  portable to other jurisdictions.
                </li>
              </ul>
            </div>

            <aside className="space-y-4 rounded-xl border border-border/60 bg-muted/40 p-4 text-xs text-muted-foreground sm:text-sm">
              <h3 className="text-sm font-semibold text-foreground">Execution Horizon</h3>
              <dl className="grid grid-cols-2 gap-3">
                <div>
                  <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                    Phase I
                  </dt>
                  <dd className="font-medium text-foreground">0–6 months</dd>
                  <p className="mt-1 text-[0.72rem]">
                    Build regulatory foundations, prototype, and validate with early partners.
                  </p>
                </div>
                <div>
                  <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                    Phase II
                  </dt>
                  <dd className="font-medium text-foreground">6–18 months</dd>
                  <p className="mt-1 text-[0.72rem]">
                    Launch in select cities, expand asset inventory, deepen liquidity.
                  </p>
                </div>
                <div className="col-span-2">
                  <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                    Phase III
                  </dt>
                  <dd className="font-medium text-foreground">18–36 months</dd>
                  <p className="mt-1 text-[0.72rem]">
                    Institutionalization, secondary markets, and structured products on tokenized
                    real estate.
                  </p>
                </div>
              </dl>
            </aside>
          </section>

          <section className="space-y-6 rounded-2xl border border-border/50 bg-background/60 p-6 shadow-sm backdrop-blur-xl sm:p-8">
            <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
              Phased Execution Plan
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-3 rounded-xl border border-border/60 bg-gradient-to-b from-background to-background/40 p-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
                  Phase I · 0–6 months
                </p>
                <h3 className="text-sm font-semibold text-foreground">
                  Regulatory, Architecture & Pilot Readiness
                </h3>
                <ul className="mt-2 space-y-2 text-xs text-muted-foreground">
                  <li>Confirm compliant structure with legal counsel (REITs, SPVs, token wrappers).</li>
                  <li>Design permissioned blockchain architecture and on/off-chain data model.</li>
                  <li>Implement KYC/AML and investor accreditation flows aligned with Indian norms.</li>
                  <li>Onboard 1–2 marquee developers and 1–2 anchor institutional partners.</li>
                  <li>Ship internal pilot with test assets and sandboxed wallets.</li>
                </ul>
              </div>

              <div className="space-y-3 rounded-xl border border-border/60 bg-gradient-to-b from-background to-background/40 p-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
                  Phase II · 6–18 months
                </p>
                <h3 className="text-sm font-semibold text-foreground">
                  Market Launch & Two-Sided Growth
                </h3>
                <ul className="mt-2 space-y-2 text-xs text-muted-foreground">
                  <li>Public beta launch with curated residential and commercial projects.</li>
                  <li>Enable fractional investment tickets with clear risk and yield disclosures.</li>
                  <li>Introduce programmatic distributions (rental yields, exits) via smart contracts.</li>
                  <li>Launch liquidity programs and market-making incentives to deepen order books.</li>
                  <li>Expand to 3–5 key metros with localized demand-generation partnerships.</li>
                </ul>
              </div>

              <div className="space-y-3 rounded-xl border border-border/60 bg-gradient-to-b from-background to-background/40 p-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
                  Phase III · 18–36 months
                </p>
                <h3 className="text-sm font-semibold text-foreground">
                  Institutionalization & Product Expansion
                </h3>
                <ul className="mt-2 space-y-2 text-xs text-muted-foreground">
                  <li>Integrate with custodians, banks, and wealth platforms for wider distribution.</li>
                  <li>Offer structured products (pools, thematic portfolios, fixed-income like tranches).</li>
                  <li>Standardize reporting, governance, and audit trails for institutional capital.</li>
                  <li>Explore cross-border participation subject to regulatory approvals.</li>
                  <li>Prepare framework for expansion beyond India with jurisdiction-specific playbooks.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4 rounded-2xl border border-border/40 bg-gradient-to-r from-primary/5 via-primary/3 to-primary/5 p-6 text-sm text-muted-foreground shadow-sm backdrop-blur-xl sm:p-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div className="space-y-1">
                <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                  Success Metrics by Horizon
                </h2>
                <p className="max-w-2xl text-xs sm:text-sm">
                  Each phase includes measurable outcomes to validate product–market fit, regulatory
                  robustness, and liquidity depth on both sides of the marketplace.
                </p>
              </div>
            </div>
            <div className="grid gap-4 text-xs sm:grid-cols-3 sm:gap-6 sm:text-sm">
              <div className="rounded-lg border border-primary/30 bg-background/70 p-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
                  Phase I
                </p>
                <ul className="mt-2 space-y-1.5">
                  <li>Signed opinions from regulatory and legal advisors.</li>
                  <li>First 2–3 tokenized projects structured and onboarded.</li>
                  <li>&gt;100 early qualified investors in waitlist or pilot.</li>
                </ul>
              </div>
              <div className="rounded-lg border border-primary/30 bg-background/70 p-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
                  Phase II
                </p>
                <ul className="mt-2 space-y-1.5">
                  <li>Crores of assets under tokenized management across multiple cities.</li>
                  <li>Consistent primary issuance and secondary trading activity.</li>
                  <li>Predictable yield distribution cycles with on-chain proof.</li>
                </ul>
              </div>
              <div className="rounded-lg border border-primary/30 bg-background/70 p-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
                  Phase III
                </p>
                <ul className="mt-2 space-y-1.5">
                  <li>Institutional capital as a meaningful share of volume.</li>
                  <li>Partnerships with banks, wealth platforms, and custodians.</li>
                  <li>Audited, exportable data room for regulators and large investors.</li>
                </ul>
              </div>
            </div>
          </section>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

