import WaitlistForm from "@/components/waitlist-form";

const valueProps = [
  {
    title: "Everything, One Call",
    description:
      "Spin up an isolated environment with N Chrome instances, residential proxies, and multi-provider LLM access using a single API call — no YAML files, no Docker babysitting.",
    icon: "⚡",
  },
  {
    title: "Cut Your Infra Bill",
    description:
      "Teams switching from self-managed VPS, proxy pools, and separate API plans typically cut monthly spend by 50% or more — and get back 3 to 4 hours a day in manual ops work.",
    icon: "📉",
  },
  {
    title: "Swap Models Per Task",
    description:
      "Route Claude for long-form reasoning, GPT for quick hits — switch LLM providers per task through one endpoint, no config changes, no redeployments.",
    icon: "🔀",
  },
];

const stackItems = [
  { label: "Anti-detect browsers", competitor: true, truman: true },
  { label: "Headless Chrome", competitor: true, truman: true },
  { label: "Residential proxies", competitor: false, truman: true },
  { label: "Multi-provider AI", competitor: false, truman: true },
  { label: "Scheduling", competitor: false, truman: true },
  { label: "File management", competitor: false, truman: true },
  { label: "Isolated per user", competitor: false, truman: true },
  { label: "Single API", competitor: false, truman: true },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F4F0] text-[#1A1A2E]">
      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <span className="text-xl font-black tracking-tight text-[#1A1A2E]">
          Truman
        </span>
        <a
          href="#waitlist"
          className="bg-[#E05C2A] text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
        >
          Start free
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-[#1A1A2E] text-[#F5F4F0] text-xs font-semibold px-3 py-1.5 rounded-full mb-8 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 bg-[#E05C2A] rounded-full animate-pulse" />
            Early access open
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            One API call.
            <br />
            <span className="text-[#E05C2A]">Full browser</span>
            <br />
            automation stack.
          </h1>
          <p className="text-lg md:text-xl text-[#1A1A2E]/70 max-w-2xl leading-relaxed mb-12">
            Browsers, proxies, AI, scheduling, file management — isolated per
            user, ready in seconds. Stop duct-taping five tools together at 2am.
          </p>

          <div id="waitlist" className="max-w-md">
            <WaitlistForm />
            <p className="text-xs text-[#1A1A2E]/50 mt-3">
              Free plan includes 3 browser instances. No credit card required.
            </p>
          </div>
        </div>

        {/* Code snippet */}
        <div className="mt-16 max-w-2xl">
          <div className="bg-[#1A1A2E] rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-[#E05C2A]/60" />
              <div className="w-3 h-3 rounded-full bg-white/20" />
              <div className="w-3 h-3 rounded-full bg-white/20" />
              <span className="ml-2 text-white/30 text-xs font-mono">
                truman.js
              </span>
            </div>
            <pre className="px-6 py-6 text-sm font-mono overflow-x-auto leading-relaxed">
              <code>
                <span className="text-[#E05C2A]">const</span>
                <span className="text-white"> env </span>
                <span className="text-[#E05C2A]">=</span>
                <span className="text-white"> await truman.</span>
                <span className="text-[#E8A87C]">create</span>
                <span className="text-white">{"({"}</span>
                {"\n"}
                <span className="text-white/40">{"  "}</span>
                <span className="text-[#7EC8E3]">browsers</span>
                <span className="text-white">: </span>
                <span className="text-[#98D982]">5</span>
                <span className="text-white">,</span>
                {"\n"}
                <span className="text-white/40">{"  "}</span>
                <span className="text-[#7EC8E3]">proxies</span>
                <span className="text-white">: </span>
                <span className="text-[#98D982]">"residential"</span>
                <span className="text-white">,</span>
                {"\n"}
                <span className="text-white/40">{"  "}</span>
                <span className="text-[#7EC8E3]">llm</span>
                <span className="text-white">: [</span>
                <span className="text-[#98D982]">"claude"</span>
                <span className="text-white">, </span>
                <span className="text-[#98D982]">"gpt-4o"</span>
                <span className="text-white">],</span>
                {"\n"}
                <span className="text-white/40">{"  "}</span>
                <span className="text-[#7EC8E3]">schedule</span>
                <span className="text-white">: </span>
                <span className="text-[#98D982]">"*/15 * * * *"</span>
                {"\n"}
                <span className="text-white">{"});"}</span>
                {"\n\n"}
                <span className="text-white/40">
                  {"// "}Ready in {"<"}3 seconds. Every time.
                </span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-[#1A1A2E] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#E05C2A] text-sm font-semibold uppercase tracking-widest mb-4">
            Why Truman
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-16 max-w-2xl leading-tight">
            Built for teams who can&apos;t afford to babysit infra.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors"
              >
                <div className="text-3xl mb-5">{prop.icon}</div>
                <h3 className="text-white font-bold text-xl mb-3">
                  {prop.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#E05C2A] text-sm font-semibold uppercase tracking-widest mb-4">
                The full stack
              </p>
              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
                Nobody else ships all five.
              </h2>
              <p className="text-[#1A1A2E]/70 leading-relaxed text-base max-w-md">
                Anti-detect browsers give you profiles. Browserbase gives you
                headless Chrome. Truman gives you the whole thing: browsers,
                proxies, AI, scheduling, and file management, bundled into one
                isolated environment per user and controlled through a single
                API.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#1A1A2E]/10 overflow-hidden shadow-xl">
              <div className="grid grid-cols-3 text-xs font-bold uppercase tracking-wider text-[#1A1A2E]/40 border-b border-[#1A1A2E]/10 px-6 py-4">
                <span>Feature</span>
                <span className="text-center">Others</span>
                <span className="text-center text-[#E05C2A]">Truman</span>
              </div>
              {stackItems.map((item, i) => (
                <div
                  key={item.label}
                  className={`grid grid-cols-3 items-center px-6 py-4 text-sm ${
                    i % 2 === 0 ? "bg-[#F5F4F0]/50" : ""
                  }`}
                >
                  <span className="font-medium text-[#1A1A2E]">
                    {item.label}
                  </span>
                  <span className="text-center">
                    {item.competitor ? (
                      <span className="text-green-500 font-bold">✓</span>
                    ) : (
                      <span className="text-[#1A1A2E]/25 font-bold">✗</span>
                    )}
                  </span>
                  <span className="text-center">
                    <span className="text-[#E05C2A] font-bold">✓</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing hint */}
      <section className="bg-[#1A1A2E]/5 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#E05C2A] text-sm font-semibold uppercase tracking-widest mb-4">
              Pricing
            </p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
              Start free. Scale when it clicks.
            </h2>
            <p className="text-[#1A1A2E]/70 text-base leading-relaxed mb-12">
              Start free with 3 browser instances — enough to validate before
              you commit to anything. The $79/month plan gets you 20 browser
              instances, 5 proxy lines, and 100K LLM tokens. Usage-based tiers
              scale from there as your workloads grow.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl border border-[#1A1A2E]/10 p-6 text-left">
                <div className="text-2xl font-black mb-1">Free</div>
                <div className="text-[#1A1A2E]/50 text-sm mb-4">
                  To validate
                </div>
                <ul className="space-y-2 text-sm text-[#1A1A2E]/70">
                  <li className="flex items-center gap-2">
                    <span className="text-[#E05C2A]">✓</span> 3 browser
                    instances
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#E05C2A]">✓</span> Full API access
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#E05C2A]">✓</span> No credit card
                  </li>
                </ul>
              </div>
              <div className="bg-[#E05C2A] rounded-2xl p-6 text-left text-white relative">
                <div className="absolute top-4 right-4 text-xs bg-white/20 rounded-full px-2 py-0.5 font-semibold">
                  Popular
                </div>
                <div className="text-2xl font-black mb-1">$79/mo</div>
                <div className="text-white/70 text-sm mb-4">To grow</div>
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-center gap-2">
                    <span className="text-white font-bold">✓</span> 20 browser
                    instances
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-white font-bold">✓</span> 5 proxy
                    lines
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-white font-bold">✓</span> 100K LLM
                    tokens
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-[#1A1A2E]/10 p-6 text-left">
                <div className="text-2xl font-black mb-1">Custom</div>
                <div className="text-[#1A1A2E]/50 text-sm mb-4">To scale</div>
                <ul className="space-y-2 text-sm text-[#1A1A2E]/70">
                  <li className="flex items-center gap-2">
                    <span className="text-[#E05C2A]">✓</span> Usage-based
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#E05C2A]">✓</span> SLA support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#E05C2A]">✓</span> Dedicated infra
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#1A1A2E] rounded-3xl px-8 py-16 md:py-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E05C2A] rounded-full blur-3xl -translate-y-1/2" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E05C2A] rounded-full blur-3xl translate-y-1/2" />
            </div>
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 max-w-2xl mx-auto">
                Ready to throw away your 2am ops runbook?
              </h2>
              <p className="text-white/60 text-base mb-10 max-w-lg mx-auto">
                Join AI developers and ops teams already on the waitlist. Free
                to start, no credit card needed.
              </p>
              <div className="max-w-md mx-auto">
                <WaitlistForm inverted />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1A1A2E]/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[#1A1A2E]/50 text-sm font-semibold tracking-tight">
            Truman
          </span>
          <a
            href="https://boringcombinator.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-[#1A1A2E]/40 hover:text-[#1A1A2E]/70 transition-colors"
          >
            <span className="bg-[#1A1A2E]/8 border border-[#1A1A2E]/10 rounded-full px-3 py-1.5 font-medium">
              Built with Boring Combinator
            </span>
          </a>
        </div>
      </footer>
    </main>
  );
}