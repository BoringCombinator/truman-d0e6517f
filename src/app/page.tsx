import WaitlistForm from "@/components/waitlist-form";

const valueProps = [
  {
    title: "Full Stack, One Call",
    description:
      "Spin up isolated Docker containers with Chrome instances, residential proxies, and LLM access in a single API request — no config files, no glue code, no waiting.",
  },
  {
    title: "Cut Infra Costs in Half",
    description:
      "Teams switching from self-managed VPS, proxy pools, and separate API subscriptions typically cut monthly spend by 50% or more, and get back 3 to 4 hours a day of manual ops work.",
  },
  {
    title: "Swap LLMs Per Task",
    description:
      "Route Claude for long-form extraction and GPT for quick lookups without touching a single config — provider switching lives in the API call, not in your codebase.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F3EE] text-[#1A1A2E]">
      {/* Nav */}
      <nav className="border-b border-[#1A1A2E]/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-xl font-black tracking-tight text-[#1A1A2E]">
            Truman
          </span>
          <span className="text-xs font-mono bg-[#E84E2A] text-white px-3 py-1 rounded-full uppercase tracking-widest">
            Early Access
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-8 border border-[#1A1A2E]/20 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-[#E84E2A] animate-pulse" />
            <span className="text-xs font-mono text-[#1A1A2E]/60 uppercase tracking-widest">
              Browser automation, reimagined
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter mb-8 text-[#1A1A2E]">
            One API call.{" "}
            <span className="text-[#E84E2A]">Full browser</span>{" "}
            automation stack.
          </h1>
          <p className="text-lg md:text-xl text-[#1A1A2E]/70 leading-relaxed mb-12 max-w-2xl">
            Stop duct-taping VPS instances, proxy pools, and LLM APIs together.
            Truman gives you isolated browser environments with proxies, AI, and
            scheduling baked in — all from a single endpoint.
          </p>
          <WaitlistForm cta="Start building free" />
        </div>

        {/* Code block */}
        <div className="mt-16 rounded-2xl bg-[#1A1A2E] overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-[#E84E2A]" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-3 text-xs font-mono text-white/30">
              automate.ts
            </span>
          </div>
          <pre className="text-sm md:text-base font-mono text-green-300 p-6 overflow-x-auto leading-relaxed">
            <code>{`const session = await truman.start({
  proxy: "residential",
  llm:   "claude-3-5-sonnet",
  schedule: "0 */6 * * *",
});

const data = await session.extract({
  url:    "https://target.com/pricing",
  prompt: "Get all plan prices and features",
});

// That's it. No containers to babysit.`}</code>
          </pre>
        </div>
      </section>

      {/* Target Audience */}
      <section className="bg-[#1A1A2E] text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl font-mono border-l-4 border-[#E84E2A] pl-6">
            Built for AI developers and ops teams running automated web
            workflows at scale. If you're managing social scraping, competitive
            monitoring, or data pipelines and your current setup involves
            babysitting Docker containers at 2am —{" "}
            <span className="text-white font-semibold">this is for you.</span>
          </p>
        </div>
      </section>

      {/* Value Props */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[#E84E2A] mb-12">
          Why teams switch
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {valueProps.map((prop, i) => (
            <div
              key={i}
              className="group border border-[#1A1A2E]/15 rounded-2xl p-7 hover:border-[#E84E2A]/50 hover:bg-white transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-3xl font-black text-[#1A1A2E]/10 group-hover:text-[#E84E2A]/20 transition-colors font-mono">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight text-[#1A1A2E]">
                {prop.title}
              </h3>
              <p className="text-[#1A1A2E]/60 leading-relaxed text-sm">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiation */}
      <section className="px-6 py-20 bg-[#1A1A2E]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#E84E2A] mb-8">
            The full picture
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <p className="text-2xl md:text-3xl font-black text-white leading-tight">
              Nobody else ships{" "}
              <span className="text-[#E84E2A]">all five</span> together.
            </p>
            <div className="space-y-4">
              {[
                "Isolated browser environments",
                "Residential proxy pools",
                "Multi-provider LLM access",
                "Built-in scheduling",
                "File management",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#E84E2A] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-white/80 font-mono text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-10 text-white/50 text-sm leading-relaxed max-w-2xl border-t border-white/10 pt-8">
            Anti-detect browsers give you profiles. Browserbase gives you
            headless Chrome. Truman gives you the whole thing: browsers,
            proxies, AI, scheduling, and file management in one isolated
            environment per user, controlled through one API.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[#E84E2A] mb-12">
          Pricing
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-[#1A1A2E]/15 rounded-2xl p-8">
            <div className="text-4xl font-black text-[#1A1A2E] mb-1">Free</div>
            <div className="text-[#1A1A2E]/50 text-sm mb-8 font-mono">
              No credit card required
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "3 browser instances",
                "Validate your workflow",
                "Full API access",
              ].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-[#1A1A2E]/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E84E2A]" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="text-xs text-[#1A1A2E]/40 font-mono">
              Start free before spending a dollar
            </div>
          </div>
          <div className="border-2 border-[#E84E2A] rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-[#E84E2A] text-white text-xs font-mono px-3 py-1 rounded-full uppercase tracking-widest">
              Popular
            </div>
            <div className="text-4xl font-black text-[#1A1A2E] mb-1">$79</div>
            <div className="text-[#1A1A2E]/50 text-sm mb-8 font-mono">
              per month
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "20 browser instances",
                "5 proxy lines",
                "100K LLM tokens",
                "Usage-based scaling",
              ].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-[#1A1A2E]/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E84E2A]" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="text-xs text-[#1A1A2E]/40 font-mono">
              Scale from there as your operation grows
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#E84E2A] px-6 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Stop babysitting containers.
            <br />
            Start shipping.
          </h2>
          <p className="text-white/70 text-lg mb-12 max-w-xl mx-auto">
            Join the waitlist and get early access — free tier included, no
            credit card needed.
          </p>
          <div className="max-w-md mx-auto">
            <WaitlistForm cta="Start building free" inverted />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1A1A2E]/10 px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xl font-black tracking-tight text-[#1A1A2E]">
            Truman
          </span>
          <a
            href="https://boringcombinator.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#1A1A2E]/40 hover:text-[#1A1A2E]/70 transition-colors border border-[#1A1A2E]/10 rounded-full px-4 py-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E84E2A]" />
            Built with Boring Combinator
          </a>
        </div>
      </footer>
    </main>
  );
}