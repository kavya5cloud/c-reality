export function HeroSection() {
  return (
    <section id="about" className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 pt-24 text-center">
      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Blockchain-Powered Real Estate
        </span>
      </div>

      <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
        The Future of Property Ownership is On-Chain
      </h1>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
        CircleChain Reality tokenizes premium real estate assets, enabling fractional ownership, transparent transactions, and global liquidity through blockchain technology.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <a
          href="#register"
          className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Register Interest
        </a>
        <a
          href="#how-it-works"
          className="rounded-lg border border-border/60 bg-secondary/30 px-8 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-secondary/60"
        >
          How It Works
        </a>
      </div>

    </section>
  )
}
