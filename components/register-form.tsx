"use client"

import { useState, type FormEvent } from "react"
import { Building2, Briefcase, Handshake, ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
type UserType = "investor" | "developer" | "partner" | null
type ProjectScale = "under_1m" | "1m_10m" | "10m_50m" | "50m_plus" | null

interface FormData {
  userType: UserType
  projectScale: ProjectScale
  fullName: string
  email: string
  company: string
  message: string
}

const INITIAL: FormData = {
  userType: null,
  projectScale: null,
  fullName: "",
  email: "",
  company: "",
  message: "",
}

/* ------------------------------------------------------------------ */
/*  User-type cards                                                    */
/* ------------------------------------------------------------------ */
const USER_TYPES = [
  {
    value: "investor" as const,
    label: "Investor",
    description: "Looking to invest in tokenized real estate assets",
    icon: Building2,
  },
  {
    value: "developer" as const,
    label: "Developer",
    description: "Want to tokenize and list your real estate projects",
    icon: Briefcase,
  },
  {
    value: "partner" as const,
    label: "Partner",
    description: "Interested in strategic or technology partnerships",
    icon: Handshake,
  },
]

/* ------------------------------------------------------------------ */
/*  Project scale options                                              */
/* ------------------------------------------------------------------ */
const SCALES = [
  { value: "under_1m" as const, label: "Under $1 M", tag: "Starter" },
  { value: "1m_10m" as const, label: "$1 M – $10 M", tag: "Growth" },
  { value: "10m_50m" as const, label: "$10 M – $50 M", tag: "Enterprise" },
  { value: "50m_plus" as const, label: "$50 M +", tag: "Institutional" },
]

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export function RegisterForm() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FormData>(INITIAL)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [emailError, setEmailError] = useState("")
  const [submitError, setSubmitError] = useState("")

  const TOTAL_STEPS = 3

  const canAdvance = (): boolean => {
    if (step === 0) return data.userType !== null
    if (step === 1) return data.projectScale !== null
    if (step === 2)
      return data.fullName.trim().length > 0 && data.email.trim().length > 0
    return false
  }

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validateEmail(data.email)) {
      setEmailError("Please enter a valid email address")
      return
    }
    setEmailError("")
    setSubmitError("")
    setSubmitting(true)

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: string }
          | null
        throw new Error(payload?.error ?? "Failed to submit. Please try again.")
      }

      setSubmitted(true)
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to submit. Please try again."
      setSubmitError(message)
    } finally {
      setSubmitting(false)
    }
  }

  const next = () => {
    if (step === 2) return
    if (canAdvance()) setStep((s) => s + 1)
  }
  const prev = () => setStep((s) => Math.max(0, s - 1))

  /* ---- Success state ---- */
  if (submitted) {
    return (
      <section id="register" className="px-6 py-24">
        <div className="mx-auto max-w-xl">
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card/30 p-10 text-center backdrop-blur-2xl">
            <div className="absolute inset-0 bg-primary/[0.04]" />
            <div className="relative">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30">
                <Check className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground">
                You&apos;re on the list
              </h3>
              <p className="mt-3 text-muted-foreground">
                Thank you, {data.fullName}. We&apos;ll reach out to you at{" "}
                <span className="text-foreground">{data.email}</span> with next steps.
              </p>
              <button
                type="button"
                onClick={() => {
                  setData(INITIAL)
                  setStep(0)
                  setSubmitted(false)
                }}
                className="mt-8 rounded-lg border border-border/60 bg-secondary/30 px-6 py-2.5 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-secondary/60"
              >
                Register another
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="register" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="text-xs font-medium tracking-widest text-primary uppercase">
            Register Interest
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Join the future of real estate
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground text-pretty">
            Tell us about yourself and the scale of your vision. Our team will personally
            follow up within 48 hours.
          </p>
        </div>

        {/* Glass card */}
        <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-card/30 backdrop-blur-2xl">
          {/* Inner glow */}
          <div className="absolute inset-0 bg-primary/[0.02]" />

          {/* Progress bar */}
          <div className="relative h-1 w-full bg-secondary/40">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
            />
          </div>

          {/* Step indicators */}
          <div className="relative flex items-center justify-center gap-3 border-b border-border/30 px-8 py-5">
            {["Your Role", "Project Scale", "Contact Info"].map((label, i) => (
              <button
                key={label}
                type="button"
                onClick={() => {
                  // Only allow going back to completed steps
                  if (i < step) setStep(i)
                }}
                className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  i === step
                    ? "bg-primary/15 text-primary ring-1 ring-primary/30"
                    : i < step
                      ? "bg-secondary/50 text-foreground cursor-pointer hover:bg-secondary/70"
                      : "bg-transparent text-muted-foreground/50"
                }`}
                disabled={i > step}
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                    i < step
                      ? "bg-primary text-primary-foreground"
                      : i === step
                        ? "bg-primary/20 text-primary"
                        : "bg-secondary/60 text-muted-foreground/50"
                  }`}
                >
                  {i < step ? <Check className="h-3 w-3" /> : i + 1}
                </span>
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>

          {/* Form body */}
          <form onSubmit={handleSubmit}>
            <div className="relative px-8 py-10">
              {/* Step 0 — User Type */}
              {step === 0 && (
                <fieldset className="space-y-4">
                  <legend className="mb-6 text-lg font-semibold text-foreground">
                    How would you describe yourself?
                  </legend>
                  {USER_TYPES.map((type) => {
                    const selected = data.userType === type.value
                    return (
                      <label
                        key={type.value}
                        className={`flex cursor-pointer items-start gap-4 rounded-xl border p-5 transition-all ${
                          selected
                            ? "border-primary/50 bg-primary/[0.08] ring-1 ring-primary/20"
                            : "border-border/40 bg-secondary/20 hover:border-border/60 hover:bg-secondary/30"
                        }`}
                      >
                        <input
                          type="radio"
                          name="userType"
                          value={type.value}
                          checked={selected}
                          onChange={() =>
                            setData((d) => ({ ...d, userType: type.value }))
                          }
                          className="sr-only"
                        />
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                            selected
                              ? "bg-primary/20 ring-1 ring-primary/30"
                              : "bg-secondary/40"
                          }`}
                        >
                          <type.icon
                            className={`h-5 w-5 ${selected ? "text-primary" : "text-muted-foreground"}`}
                          />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-foreground">
                            {type.label}
                          </span>
                          <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                            {type.description}
                          </p>
                        </div>
                        {/* Selection dot */}
                        <div
                          className={`ml-auto mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                            selected
                              ? "border-primary bg-primary"
                              : "border-muted-foreground/30"
                          }`}
                        >
                          {selected && <Check className="h-3 w-3 text-primary-foreground" />}
                        </div>
                      </label>
                    )
                  })}
                </fieldset>
              )}

              {/* Step 1 — Project Scale */}
              {step === 1 && (
                <fieldset className="space-y-4">
                  <legend className="mb-6 text-lg font-semibold text-foreground">
                    What project scale are you considering?
                  </legend>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {SCALES.map((scale) => {
                      const selected = data.projectScale === scale.value
                      return (
                        <label
                          key={scale.value}
                          className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border p-6 text-center transition-all ${
                            selected
                              ? "border-primary/50 bg-primary/[0.08] ring-1 ring-primary/20"
                              : "border-border/40 bg-secondary/20 hover:border-border/60 hover:bg-secondary/30"
                          }`}
                        >
                          <input
                            type="radio"
                            name="projectScale"
                            value={scale.value}
                            checked={selected}
                            onChange={() =>
                              setData((d) => ({ ...d, projectScale: scale.value }))
                            }
                            className="sr-only"
                          />
                          <span
                            className={`mb-1 text-[10px] font-bold tracking-widest uppercase ${
                              selected ? "text-primary" : "text-muted-foreground/60"
                            }`}
                          >
                            {scale.tag}
                          </span>
                          <span className="text-lg font-semibold text-foreground">
                            {scale.label}
                          </span>
                        </label>
                      )
                    })}
                  </div>
                </fieldset>
              )}

              {/* Step 2 — Contact Details */}
              {step === 2 && (
                <div className="space-y-5">
                  <p className="text-lg font-semibold text-foreground">
                    Your contact details
                  </p>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="mb-1.5 block text-xs font-medium tracking-wide text-muted-foreground uppercase"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={data.fullName}
                        onChange={(e) =>
                          setData((d) => ({ ...d, fullName: e.target.value }))
                        }
                        placeholder="Jane Doe"
                        className="w-full rounded-lg border border-border/40 bg-input/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 backdrop-blur-md transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="mb-1.5 block text-xs font-medium tracking-wide text-muted-foreground uppercase"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={data.company}
                        onChange={(e) =>
                          setData((d) => ({ ...d, company: e.target.value }))
                        }
                        placeholder="Acme Corp"
                        className="w-full rounded-lg border border-border/40 bg-input/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 backdrop-blur-md transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-medium tracking-wide text-muted-foreground uppercase"
                    >
                      Work Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={data.email}
                      onChange={(e) => {
                        setData((d) => ({ ...d, email: e.target.value }))
                        if (emailError) setEmailError("")
                      }}
                      placeholder="jane@company.com"
                      className={`w-full rounded-lg border bg-input/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 backdrop-blur-md transition-colors focus:outline-none focus:ring-2 ${
                        emailError
                          ? "border-destructive/60 focus:border-destructive/60 focus:ring-destructive/20"
                          : "border-border/40 focus:border-primary/50 focus:ring-primary/20"
                      }`}
                    />
                    {emailError && (
                      <p className="mt-1.5 text-xs text-destructive">{emailError}</p>
                    )}
                  </div>
                  {submitError && (
                    <p className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive">
                      {submitError}
                    </p>
                  )}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-medium tracking-wide text-muted-foreground uppercase"
                    >
                      Tell us more (optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={data.message}
                      onChange={(e) =>
                        setData((d) => ({ ...d, message: e.target.value }))
                      }
                      placeholder="Share your goals, timeline, or anything we should know..."
                      className="w-full resize-none rounded-lg border border-border/40 bg-input/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 backdrop-blur-md transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Footer actions */}
            <div className="relative flex items-center justify-between border-t border-border/30 px-8 py-5">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={prev}
                  className="flex items-center gap-1.5 rounded-lg border border-border/40 bg-secondary/20 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/40 hover:text-foreground"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < TOTAL_STEPS - 1 ? (
                <button
                  type="button"
                  onClick={next}
                  disabled={!canAdvance()}
                  className="flex items-center gap-1.5 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!canAdvance() || submitting}
                  className="flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Interest
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Trust signal */}
        <p className="mt-6 text-center text-xs text-muted-foreground/60">
          Your information is encrypted and will never be shared with third parties.
        </p>
      </div>
    </section>
  )
}
