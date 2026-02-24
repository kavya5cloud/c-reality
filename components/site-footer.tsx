import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/30 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        {/* Logo & copy */}
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="CircleChain Reality logo"
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
          <span className="font-serif text-sm font-semibold text-foreground">
            CircleChain Reality
          </span>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-6">
          {["Privacy", "Terms", "Contact"].map((label) => (
            <a
              key={label}
              href="#"
              className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-muted-foreground/50">
          {"\u00A9"} {new Date().getFullYear()} CircleChain Reality. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
