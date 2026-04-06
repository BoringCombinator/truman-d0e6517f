import WaitlistForm from "@/components/waitlist-form";

const valueProps = [
  {
    title: "Full Stack, One Call",
    description:
      "Spin up isolated Chrome instances with residential proxies and LLM access attached — no Dockerfile, no config juggling, just an API call.",
    icon: "⚡",
  },
  {
    title: "Cut the Infra Bill",
    description:
      "Teams switching from self-managed VPS + proxy + API setups typically cut monthly spend by 50% or more and get back 3 to 4 hours a day they were spending on manual ops.",
    icon: "📉",
  },
  {
    title: "Swap Models Per Task",
    description:
      "Route Claude for long-form reasoning, GPT for quick responses — switch LLM providers per task through one endpoint, no config files touched.",
    icon: "🔀",
  },
];

const stackItems = [
  "Browsers",
  "Proxies",
  "AI / LLMs",
  "Scheduling",
  "File Management",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F4F0] text-[#1A1A2E]">
      {/* Nav */}
      <nav className="border-b border-[#1A1A2E]/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-[#1A1A2E]">
            Truman
          </span>
          <a
            href="#waitlist"
            className="text-sm font-semibold bg-[#E85C2F] text-white px-4 py-2 rounded-md hover:bg-[#d04f25] transition-colors"
          >
            Start free
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-20 pb-16 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#1A1A2E]/5 border border-[#1A1A2E]/10 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#E85C2F] animate-pulse inline-block" />
          <span className="text-sm font-medium text-[#1A1A2E]/70">
            Early access — 3 browser instances free
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 max-w-3xl">
          One API call.{" "}
          <span className="text-[#E85C2F]">Full browser automation stack.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#1A1A2E]/65 max-w-2xl leading-relaxed mb-10">
          Browsers, proxies, AI, scheduling, and file management — all isolated
          per user, all wired together. Stop gluing five tools and a VPS
          together at midnight.
        </p>

        {/* Code snippet */}
        <div className="bg-[#1A1A2E] rounded-xl p-5 mb-10 max-w-xl font-mono text-sm leading-relaxed overflow-x-auto">
          <div className="flex gap-1.5 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#E85C2F]/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <span className="w-3 h-3 rounded-full bg-green-400/70" />
          </div>
          <p className="text-[#E85C2F]">// before truman</p>
          <p className="text-white/40 line-through">
            docker run ... && rotate_proxy.sh && ...
          </p>
          <br />
          <p className="text-[#E85C2F] mt-1">// with truman</p>
          <p className="text-white">
            <span className="text-blue-400">const</span> browser ={" "}
            <span className="text-yellow-300">await</span> truman.
            <span className="text-green-300">launch</span>
            {"({"} userId, proxy:{" "}
            <span className="text-orange-300">&apos;residential&apos;</span>,
            llm: <span className="text-orange-300">&apos;claude&apos;</span>{" "}
            {"})"}
          </p>
        </div>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-2">
          {stackItems.map((item) => (
            <span
              key={item}
              className="px-3 py-1.5 rounded-md bg-[#1A1A2E]/8 border border-[#1A1A2E]/10 text-sm font-medium text-[#1A1A2E]/80"
            >
              {item}
            </span>
          ))}
          <span className="px-3 py-1.5 rounded-md bg-[#E85C2F]/10 border border-[#E85C2F]/20 text-sm font-bold text-[#E85C2F]">
            = 1 API
          </span>
        </div>
      </section>

      {/* Target audience strip */}
      <section className="bg-[#1A1A2E] py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-3xl">
            <span className="text-[#E85C2F] font-semibold">Built for: </span>
            AI developers and ops teams running automated web workflows at
            scale. If you're manually managing Docker containers, rotating proxy
            pools, and juggling LLM API keys — Truman was built for you.
          </p>
        </div>
      </section>

      {/* Value Props */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 tracking-tight">
          Why teams switch to Truman
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueProps.map((vp) => (
            <div
              key={vp.title}
              className="bg-white border border-[#1A1A2E]/8 rounded-2xl p-6 hover:border-[#E85C2F]/40 hover:shadow-lg transition-all duration-200"
            >
              <div className="text-3xl mb-4">{vp.icon}</div>
              <h3 className="font-bold text-lg mb-2 tracking-tight">
                {vp.title}
              </h3>
              <p className="text-[#1A1A2E]/60 text-sm leading-relaxed">
                {vp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiation */}
      <section className="px-6 py-16 bg-[#1A1A2E]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#E85C2F] text-sm font-semibold uppercase tracking-widest mb-4">
            How we&apos;re different
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight tracking-tight">
                Nobody else bundles all five into a single API.
              </h2>
              <p className="text-white/60 leading-relaxed">
                Anti-detect browsers give you profiles. Browserbase gives you
                headless Chrome. Truman gives you everything: browsers, proxies,
                AI, scheduling, and file management in one isolated environment
                per user.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { label: "Anti-detect browsers", has: "Profiles only" },
                { label: "Browserbase", has: "Headless Chrome only" },
                { label: "Truman", has: "All 5 layers", highlight: true },
              ].map((row) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between px-5 py-3.5 rounded-xl border ${
                    row.highlight
                      ? "bg-[#E85C2F] border-[#E85C2F] text-white"
                      : "bg-white/5 border-white/10 text-white/60"
                  }`}
                >
                  <span
                    className={`font-semibold ${row.highlight ? "text-white" : "text-white/80"}`}
                  >
                    {row.label}
                  </span>
                  <span
                    className={`text-sm ${row.highlight ? "text-white/90 font-bold" : ""}`}
                  >
                    {row.has}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#E85C2F] text-sm font-semibold uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Start free. Scale when you&apos;re ready.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-white border border-[#1A1A2E]/10 rounded-2xl p-8">
            <p className="text-sm font-semibold text-[#1A1A2E]/50 uppercase tracking-wide mb-2">
              Free
            </p>
            <p className="text-4xl font-extrabold mb-1">$0</p>
            <p className="text-[#1A1A2E]/50 text-sm mb-6">Forever</p>
            <ul className="space-y-3 text-sm text-[#1A1A2E]/70">
              <li className="flex items-center gap-2">
                <span className="text-[#E85C2F] font-bold">✓</span> 3 browser
                instances
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#E85C2F] font-bold">✓</span> Validate
                the full stack
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#E85C2F] font-bold">✓</span> No credit
                card required
              </li>
            </ul>
          </div>

          <div className="bg-[#1A1A2E] rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-[#E85C2F] text-white text-xs font-bold px-2.5 py-1 rounded-full">
              Popular
            </div>
            <p className="text-sm font-semibold text-white/40 uppercase tracking-wide mb-2">
              Scale
            </p>
            <p className="text-4xl font-extrabold text-white mb-1">$79</p>
            <p className="text-white/40 text-sm mb-6">per month</p>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <span className="text-[#E85C2F] font-bold">✓</span> 20 browser
                instances
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#E85C2F] font-bold">✓</span> 5 proxy
                lines
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#E85C2F] font-bold">✓</span> 100K LLM
                tokens
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#E85C2F] font-bold">✓</span>{" "}
                Usage-based above that
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section
        id="waitlist"
        className="px-6 py-20 bg-[#1A1A2E]"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Start building free
          </h2>
          <p className="text-white/60 mb-10 leading-relaxed">
            Join the waitlist and get early access. 3 browser instances, no
            credit card, no container babysitting.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1A1A2E]/10 px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-bold text-[#1A1A2E]">Truman</span>
          <a
            href="https://boringcombinator.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-[#1A1A2E]/40 hover:text-[#1A1A2E]/70 transition-colors border border-[#1A1A2E]/10 rounded-full px-3 py-1.5"
          >
            <span>🥱</span>
            Built with Boring Combinator
          </a>
        </div>
      </footer>
    </main>
  );
}