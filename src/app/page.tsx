import WaitlistForm from "@/components/waitlist-form";

const valueProps = [
  {
    title: "Full Stack, One Call",
    description:
      "Spin up an isolated environment with Chrome instances, residential proxies, and LLM access in a single API call — no YAML files, no container babysitting, no glue code.",
    icon: "⚡",
  },
  {
    title: "Cut Infra Costs in Half",
    description:
      "Teams switching from self-managed VPS plus proxy pools plus API subscriptions typically save 50%+ per month and get back 3 to 4 hours a day they were spending on manual ops.",
    icon: "📉",
  },
  {
    title: "Route AI Per Task",
    description:
      "Use Claude for long-form reasoning and GPT for fast responses — switch providers per task through one endpoint, no config file digging required.",
    icon: "🔀",
  },
];

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    highlight: false,
    features: [
      "3 browser instances",
      "Community proxy access",
      "Shared LLM routing",
      "Good for validation",
    ],
  },
  {
    name: "Growth",
    price: "$79",
    period: "/month",
    highlight: true,
    features: [
      "20 browser instances",
      "5 dedicated proxy lines",
      "100K LLM tokens/mo",
      "Usage-based scaling",
    ],
  },
  {
    name: "Scale",
    price: "Custom",
    period: "pricing",
    highlight: false,
    features: [
      "Unlimited instances",
      "Custom proxy pools",
      "Unlimited LLM routing",
      "Dedicated support",
    ],
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F3EE] text-[#1A1A2E]">
      {/* Nav */}
      <nav className="border-b border-[#1A1A2E]/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-xl font-black tracking-tight text-[#1A1A2E]">
            Truman
            <span className="text-[#E85C2E]">.</span>
          </span>
          <a
            href="#waitlist"
            className="text-sm font-semibold text-[#E85C2E] hover:underline underline-offset-4"
          >
            Get early access →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#E85C2E]/10 border border-[#E85C2E]/30 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#E85C2E] animate-pulse" />
              <span className="text-xs font-semibold text-[#E85C2E] uppercase tracking-widest">
                Early Access Open
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-[#1A1A2E] mb-8">
              One API call.{" "}
              <span className="text-[#E85C2E]">Full browser</span>{" "}
              automation stack.
            </h1>

            <p className="text-lg md:text-xl text-[#1A1A2E]/65 leading-relaxed max-w-2xl mb-12">
              Stop duct-taping VPS instances, proxy pools, and LLM APIs
              together. Truman gives you isolated browsers, residential proxies,
              AI routing, and scheduling — bundled, managed, ready to go.
            </p>

            <div id="waitlist" className="max-w-md">
              <WaitlistForm />
              <p className="mt-3 text-xs text-[#1A1A2E]/40">
                No credit card required. Free tier includes 3 browser instances.
              </p>
            </div>
          </div>

          {/* Code block preview */}
          <div className="mt-16 md:mt-20">
            <div className="bg-[#1A1A2E] rounded-2xl overflow-hidden border border-[#1A1A2E]/20 shadow-2xl max-w-2xl">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-white/30 font-mono">
                  automate.js
                </span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <div className="text-white/40">
                  {"// Your entire infra stack. One call."}
                </div>
                <div className="mt-3">
                  <span className="text-[#E85C2E]">const</span>
                  <span className="text-white"> session </span>
                  <span className="text-white/50">= </span>
                  <span className="text-[#E85C2E]">await</span>
                  <span className="text-white"> truman</span>
                  <span className="text-white/50">.</span>
                  <span className="text-yellow-300">create</span>
                  <span className="text-white/50">{"({"}</span>
                </div>
                <div className="pl-4 text-white/70">
                  <div>
                    <span className="text-blue-300">browser</span>
                    <span className="text-white/50">: </span>
                    <span className="text-green-300">{"'chrome'"}</span>
                    <span className="text-white/50">,</span>
                  </div>
                  <div>
                    <span className="text-blue-300">proxy</span>
                    <span className="text-white/50">: </span>
                    <span className="text-green-300">{"'residential'"}</span>
                    <span className="text-white/50">,</span>
                  </div>
                  <div>
                    <span className="text-blue-300">ai</span>
                    <span className="text-white/50">: </span>
                    <span className="text-green-300">{"'claude'"}</span>
                    <span className="text-white/50">,</span>
                  </div>
                  <div>
                    <span className="text-blue-300">schedule</span>
                    <span className="text-white/50">: </span>
                    <span className="text-green-300">{"'*/5 * * * *'"}</span>
                  </div>
                </div>
                <div>
                  <span className="text-white/50">{"});"}</span>
                </div>
                <div className="mt-3 text-white/40">
                  {"// That's it. No YAML. No babysitting."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="px-6 py-16 md:py-24 bg-[#1A1A2E]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-semibold text-[#E85C2E] uppercase tracking-widest">
              Why Truman
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3 max-w-xl leading-tight">
              Built for the 2am incident you're tired of having.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#E85C2E]/40 transition-colors duration-300"
              >
                <div className="text-3xl mb-5">{prop.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {prop.title}
                </h3>
                <p className="text-white/55 leading-relaxed text-sm">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold text-[#E85C2E] uppercase tracking-widest">
                The Difference
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#1A1A2E] mt-3 mb-6 leading-tight">
                Nobody else bundles all five.
              </h2>
              <p className="text-[#1A1A2E]/65 leading-relaxed">
                Anti-detect browsers give you profiles. Browserbase gives you
                headless Chrome. Truman gives you the whole thing: browsers,
                proxies, AI, scheduling, and file management in one isolated
                environment per user, controlled through a single API.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  label: "Isolated Browser Environment",
                  them: false,
                  us: true,
                },
                { label: "Residential Proxies", them: false, us: true },
                { label: "Multi-Provider AI Routing", them: false, us: true },
                { label: "Built-in Scheduling", them: false, us: true },
                { label: "File Management", them: false, us: true },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center gap-4 bg-white border border-[#1A1A2E]/10 rounded-xl px-5 py-4"
                >
                  <div className="flex-1 text-sm font-medium text-[#1A1A2E]">
                    {row.label}
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2 w-24">
                      <span className="text-[#1A1A2E]/25">Others</span>
                      <span className="text-red-400 font-bold">✗</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#1A1A2E]/50 font-medium">
                        Truman
                      </span>
                      <span className="text-[#E85C2E] font-bold">✓</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16 md:py-24 bg-[#1A1A2E]/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-[#E85C2E] uppercase tracking-widest">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A2E] mt-3 mb-4">
              Validate free. Scale when ready.
            </h2>
            <p className="text-[#1A1A2E]/55 max-w-lg mx-auto">
              Start with 3 browser instances — enough for your team to validate
              before spending a cent.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 border-2 transition-all ${
                  tier.highlight
                    ? "bg-[#1A1A2E] border-[#E85C2E] shadow-xl scale-[1.02]"
                    : "bg-white border-[#1A1A2E]/10"
                }`}
              >
                {tier.highlight && (
                  <div className="text-xs font-bold text-[#E85C2E] uppercase tracking-widest mb-4">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <div
                    className={`text-sm font-semibold mb-1 ${tier.highlight ? "text-white/50" : "text-[#1A1A2E]/50"}`}
                  >
                    {tier.name}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-black ${tier.highlight ? "text-white" : "text-[#1A1A2E]"}`}
                    >
                      {tier.price}
                    </span>
                    <span
                      className={`text-sm ${tier.highlight ? "text-white/40" : "text-[#1A1A2E]/40"}`}
                    >
                      {tier.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feat) => (
                    <li
                      key={feat}
                      className={`flex items-start gap-2 text-sm ${tier.highlight ? "text-white/70" : "text-[#1A1A2E]/65"}`}
                    >
                      <span className="text-[#E85C2E] mt-0.5 shrink-0">→</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href="#waitlist"
                  className={`block text-center text-sm font-bold py-3 px-6 rounded-xl transition-all ${
                    tier.highlight
                      ? "bg-[#E85C2E] text-white hover:bg-[#d14e23]"
                      : "bg-[#1A1A2E]/5 text-[#1A1A2E] hover:bg-[#1A1A2E]/10"
                  }`}
                >
                  {tier.name === "Scale" ? "Contact us" : "Get started"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 md:py-24 bg-[#E85C2E]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Stop babysitting infra.
            <br />
            Start building.
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            For AI developers and ops teams running automated web workflows at
            scale — scraping, social management, competitive monitoring.
          </p>
          <div className="max-w-md mx-auto">
            <WaitlistForm variant="light" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 border-t border-[#1A1A2E]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-black text-[#1A1A2E]">
              Truman<span className="text-[#E85C2E]">.</span>
            </span>
            <span className="text-[#1A1A2E]/30 text-sm">
              Browser automation infrastructure, all in one API.
            </span>
          </div>
          <a
            href="https://boringcombinator.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1A1A2E]/5 hover:bg-[#1A1A2E]/10 transition-colors rounded-full px-4 py-2 text-xs font-semibold text-[#1A1A2E]/50"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E85C2E]" />
            Built with Boring Combinator
          </a>
        </div>
      </footer>
    </main>
  );
}