import WaitlistForm from "@/components/waitlist-form";

const valueProps = [
  {
    title: "Everything in one call",
    description:
      "Spin up isolated Docker containers with concurrent Chrome instances, residential proxies, and multi-provider LLM access in a single API request — no config files, no setup scripts.",
    icon: "⚡",
  },
  {
    title: "Cut infra costs in half",
    description:
      "Teams switching from self-managed VPS, proxy pools, and separate LLM APIs typically cut monthly spend by 50% or more, and get back 3 to 4 hours a day they were spending on manual ops.",
    icon: "📉",
  },
  {
    title: "Swap LLMs per task",
    description:
      "Route Claude for long-form reasoning, GPT for quick responses, or any other provider — all through one endpoint, no code changes, no credential juggling.",
    icon: "🔀",
  },
];

const stackComparison = [
  { label: "Anti-detect browsers", them: "Profiles only", us: "✓" },
  { label: "Headless Chrome", them: "Limited", us: "✓" },
  { label: "Residential proxies", them: "Separate vendor", us: "✓" },
  { label: "AI models (multi-provider)", them: "DIY", us: "✓" },
  { label: "Scheduling", them: "Roll your own", us: "✓" },
  { label: "File management", them: "S3 + glue code", us: "✓" },
  { label: "Isolated per user", them: "Complex config", us: "✓" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F3EE] text-[#1A1A2E]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#F5F3EE]/90 backdrop-blur-sm border-b border-[#1A1A2E]/8">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-black text-xl tracking-tight text-[#1A1A2E]">
            Truman
          </span>
          <a
            href="#waitlist"
            className="text-sm font-semibold bg-[#E85A2F] text-white px-4 py-2 rounded-full hover:bg-[#d04e26] transition-colors"
          >
            Start free →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-[#1A1A2E] text-[#E85A2F] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-[#E85A2F] rounded-full animate-pulse"></span>
            Early access — free to start
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            One API call.{" "}
            <span className="text-[#E85A2F]">Full browser</span>{" "}
            automation stack.
          </h1>
          <p className="text-lg md:text-xl text-[#1A1A2E]/70 leading-relaxed max-w-2xl mb-10">
            Stop duct-taping VPS instances, proxy pools, and LLM APIs together.
            Truman gives you isolated browser environments with proxies, AI, and
            scheduling built in — ready in seconds, not days.
          </p>

          <div id="waitlist" className="max-w-md">
            <WaitlistForm />
            <p className="text-xs text-[#1A1A2E]/40 mt-3">
              No credit card required. 3 free browser instances to start.
            </p>
          </div>
        </div>

        {/* Code snippet */}
        <div className="mt-16 max-w-2xl">
          <div className="bg-[#1A1A2E] rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
              <span className="ml-2 text-white/30 text-xs font-mono">
                truman.js
              </span>
            </div>
            <pre className="p-6 text-sm font-mono overflow-x-auto leading-relaxed">
              <code>
                <span className="text-[#E85A2F]">const</span>
                <span className="text-white"> session </span>
                <span className="text-[#E85A2F]">=</span>
                <span className="text-white"> await truman.</span>
                <span className="text-green-400">spawn</span>
                <span className="text-white">{"({"}</span>
                {"\n"}
                <span className="text-white">{"  "}</span>
                <span className="text-blue-300">proxy</span>
                <span className="text-white">{": "}</span>
                <span className="text-yellow-300">"residential"</span>
                <span className="text-white">,</span>
                {"\n"}
                <span className="text-white">{"  "}</span>
                <span className="text-blue-300">llm</span>
                <span className="text-white">{": "}</span>
                <span className="text-yellow-300">"claude-3-5-sonnet"</span>
                <span className="text-white">,</span>
                {"\n"}
                <span className="text-white">{"  "}</span>
                <span className="text-blue-300">schedule</span>
                <span className="text-white">{": "}</span>
                <span className="text-yellow-300">"*/15 * * * *"</span>
                <span className="text-white">,</span>
                {"\n"}
                <span className="text-white">{"  "}</span>
                <span className="text-blue-300">isolated</span>
                <span className="text-white">{": "}</span>
                <span className="text-purple-400">true</span>
                {"\n"}
                <span className="text-white">{"});"}</span>
                {"\n\n"}
                <span className="text-white/40">
                  {"// That's it. Browser + proxy + AI + schedule."}
                </span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="border-y border-[#1A1A2E]/10 bg-[#1A1A2E]/4 py-5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-8 justify-center md:justify-start text-sm text-[#1A1A2E]/50 font-medium">
            <span>Built for:</span>
            <span className="text-[#1A1A2E]/70">AI developers</span>
            <span className="text-[#1A1A2E]/20">·</span>
            <span className="text-[#1A1A2E]/70">Ops teams</span>
            <span className="text-[#1A1A2E]/20">·</span>
            <span className="text-[#1A1A2E]/70">Web scrapers</span>
            <span className="text-[#1A1A2E]/20">·</span>
            <span className="text-[#1A1A2E]/70">Social media managers</span>
            <span className="text-[#1A1A2E]/20">·</span>
            <span className="text-[#1A1A2E]/70">Competitive intel teams</span>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
            Why teams switch to Truman
          </h2>
          <p className="text-[#1A1A2E]/60 text-lg">
            Less glue code. More shipping.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {valueProps.map((prop, i) => (
            <div
              key={i}
              className="bg-white border border-[#1A1A2E]/8 rounded-2xl p-8 hover:border-[#E85A2F]/40 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="text-3xl mb-5">{prop.icon}</div>
              <h3 className="text-lg font-black mb-3 group-hover:text-[#E85A2F] transition-colors">
                {prop.title}
              </h3>
              <p className="text-[#1A1A2E]/60 leading-relaxed text-sm">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiation / Comparison */}
      <section className="bg-[#1A1A2E] text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#E85A2F] text-xs font-bold uppercase tracking-widest mb-4">
                The full stack
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 leading-tight">
                Nobody else bundles all five.
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Anti-detect browsers give you profiles. Browserbase gives you
                headless Chrome. Truman gives you the whole thing: browsers,
                residential proxies, AI models, scheduling, and file management
                — isolated per user, controlled through a single API.
              </p>
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 bg-[#E85A2F] text-white font-bold px-6 py-3 rounded-full hover:bg-[#d04e26] transition-colors"
              >
                Get early access →
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 text-xs font-bold uppercase tracking-widest text-white/40 px-6 py-4 border-b border-white/10">
                <span className="col-span-1">Feature</span>
                <span className="text-center">Others</span>
                <span className="text-center text-[#E85A2F]">Truman</span>
              </div>
              {stackComparison.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 px-6 py-4 border-b border-white/5 last:border-0 hover:bg-white/3 transition-colors"
                >
                  <span className="text-sm text-white/80 font-medium">
                    {row.label}
                  </span>
                  <span className="text-center text-sm text-white/30">
                    {row.them}
                  </span>
                  <span className="text-center text-sm text-[#E85A2F] font-bold">
                    {row.us}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <div className="text-[#E85A2F] text-xs font-bold uppercase tracking-widest mb-4">
            Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
            Start free. Scale when ready.
          </h2>
          <p className="text-[#1A1A2E]/60 text-lg max-w-xl mx-auto">
            Pay for what you actually run. No surprise bills from idle infra.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Free tier */}
          <div className="bg-white border-2 border-[#1A1A2E]/10 rounded-2xl p-8">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1A1A2E]/40 mb-4">
              Free tier
            </div>
            <div className="text-4xl font-black mb-1">$0</div>
            <p className="text-[#1A1A2E]/50 text-sm mb-6">Forever free</p>
            <ul className="space-y-3 text-sm">
              {["3 browser instances", "Validate your workflow", "Full API access", "No credit card required"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#1A1A2E]/8 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span className="text-[#1A1A2E]/70">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Growth tier */}
          <div className="bg-[#1A1A2E] text-white rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#E85A2F] text-white text-xs font-bold px-4 py-2 rounded-bl-xl">
              Most popular
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Growth
            </div>
            <div className="text-4xl font-black mb-1">$79</div>
            <p className="text-white/40 text-sm mb-6">per month</p>
            <ul className="space-y-3 text-sm">
              {[
                "20 browser instances",
                "5 residential proxy lines",
                "100K LLM tokens",
                "Usage-based above that",
                "Priority support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#E85A2F]/20 flex items-center justify-center text-xs text-[#E85A2F]">
                    ✓
                  </span>
                  <span className="text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-[#1A1A2E]/40 text-sm mt-8">
          Enterprise? Custom proxy pools, dedicated infra, SLAs.{" "}
          <a href="mailto:hello@truman.dev" className="underline hover:text-[#E85A2F] transition-colors">
            Let's talk.
          </a>
        </p>
      </section>

      {/* Final CTA */}
      <section className="bg-[#E85A2F] py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Stop managing infra.
            <br />
            Start shipping.
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Free trial, no credit card required. Get 3 browser instances and
            start automating in minutes.
          </p>
          <div className="max-w-md mx-auto">
            <WaitlistForm variant="light" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1A1A2E]/10 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-black text-[#1A1A2E]">Truman</span>
            <span className="text-[#1A1A2E]/20">·</span>
            <span className="text-[#1A1A2E]/40 text-sm">
              Full browser automation stack
            </span>
          </div>

          <a
            href="https://boringcombinator.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1A1A2E]/5 hover:bg-[#1A1A2E]/10 transition-colors text-[#1A1A2E]/50 text-xs font-medium px-4 py-2 rounded-full"
          >
            <span>🥱</span>
            <span>Built with Boring Combinator</span>
          </a>
        </div>
      </footer>
    </main>
  );
}