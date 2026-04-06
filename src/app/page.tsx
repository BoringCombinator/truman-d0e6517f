import WaitlistForm from "@/components/waitlist-form";

const valueProps = [
  {
    title: "Full Stack, One Call",
    description:
      "Spin up an isolated environment with Chrome instances, residential proxies, multi-provider LLM access, and a scheduler — all from a single API call, no config files required.",
    icon: "⚡",
  },
  {
    title: "Cut Infra Costs in Half",
    description:
      "Teams switching from self-managed VPS, proxy, and API setups typically save 50%+ per month and get back 3 to 4 hours a day that used to go toward keeping things from breaking.",
    icon: "📉",
  },
  {
    title: "Swap LLMs Per Task",
    description:
      "Route Claude for long-form reasoning, GPT for fast responses, and anything else you need — all through one endpoint, no provider-hopping or credential juggling.",
    icon: "🔀",
  },
];

const stackItems = [
  { label: "Chrome Instances", competitor: "Browserbase ✓", truman: "✓" },
  { label: "Residential Proxies", competitor: "Proxy tools ✓", truman: "✓" },
  { label: "AI Models (multi)", competitor: "✗", truman: "✓" },
  { label: "Task Scheduling", competitor: "✗", truman: "✓" },
  { label: "File Management", competitor: "✗", truman: "✓" },
];

export default function Page() {
  return (
    <main className="bg-[#F5F4EF] text-[#1A1A2E] min-h-screen font-sans">
      {/* Nav */}
      <header className="px-6 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <span className="text-xl font-black tracking-tight text-[#1A1A2E]">
          Truman
        </span>
        <a
          href="#waitlist"
          className="bg-[#E8C547] text-[#1A1A2E] text-sm font-bold px-4 py-2 rounded-full hover:brightness-95 transition-all"
        >
          Start free →
        </a>
      </header>

      {/* Hero */}
      <section className="px-6 pt-16 pb-24 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#1A1A2E] text-[#E8C547] text-xs font-semibold px-3 py-1.5 rounded-full mb-8 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8C547] animate-pulse"></span>
          Now in early access
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-[#1A1A2E] max-w-4xl mb-6">
          One API call.{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Full browser</span>
            <span
              className="absolute bottom-1 left-0 w-full h-3 bg-[#E8C547] -z-0 opacity-60"
              aria-hidden="true"
            ></span>
          </span>{" "}
          automation stack.
        </h1>

        <p className="text-lg sm:text-xl text-[#1A1A2E]/70 max-w-2xl mb-10 leading-relaxed">
          Stop duct-taping VPS instances, proxy pools, and LLM APIs together.
          Truman gives you isolated browser environments with proxies, AI, and
          scheduling baked in — ready in seconds, not sprints.
        </p>

        <div
          className="bg-[#1A1A2E] rounded-2xl p-4 sm:p-5 max-w-lg font-mono text-sm mb-10 overflow-x-auto"
          aria-label="API example"
        >
          <div className="text-[#E8C547]/50 text-xs mb-2 font-sans font-medium uppercase tracking-widest">
            example request
          </div>
          <pre className="text-[#E8C547] whitespace-pre leading-relaxed">
{`const env = await truman.create({
  browser: true,
  proxy: "residential",
  llm: "claude-3-5-sonnet",
  schedule: "0 9 * * *"
});`}
          </pre>
        </div>

        <div id="waitlist" className="max-w-md">
          <WaitlistForm />
          <p className="text-xs text-[#1A1A2E]/40 mt-3">
            Free tier includes 3 browser instances. No credit card required.
          </p>
        </div>
      </section>

      {/* Value Props */}
      <section className="px-6 py-20 bg-[#1A1A2E]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#E8C547] text-xs font-bold uppercase tracking-widest mb-4">
            Why Truman
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-12 max-w-xl leading-tight">
            Built for teams who ship, not teams who maintain.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {valueProps.map((vp) => (
              <div
                key={vp.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl mb-4">{vp.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{vp.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {vp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation / Comparison */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <p className="text-[#E8C547] text-xs font-bold uppercase tracking-widest mb-4">
          The difference
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A2E] mb-4 max-w-2xl leading-tight">
          Nobody else ships all five together.
        </h2>
        <p className="text-[#1A1A2E]/60 max-w-xl mb-12 leading-relaxed">
          Anti-detect tools give you browser profiles. Browserbase gives you
          headless Chrome. Truman gives you browsers, proxies, AI models,
          scheduling, and file management — bundled into one isolated
          environment per user.
        </p>

        <div className="border border-[#1A1A2E]/10 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 bg-[#1A1A2E] text-white text-sm font-bold px-6 py-4">
            <span className="text-white/50">Feature</span>
            <span className="text-white/50 text-center">Others</span>
            <span className="text-[#E8C547] text-center">Truman</span>
          </div>
          {stackItems.map((item, i) => (
            <div
              key={item.label}
              className={`grid grid-cols-3 px-6 py-4 text-sm border-t border-[#1A1A2E]/8 ${
                i % 2 === 0 ? "bg-white" : "bg-[#F5F4EF]"
              }`}
            >
              <span className="font-medium text-[#1A1A2E]">{item.label}</span>
              <span className="text-center text-[#1A1A2E]/40">
                {item.competitor}
              </span>
              <span className="text-center font-bold text-[#1A1A2E]">
                {item.truman}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-20 bg-[#1A1A2E]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#E8C547] text-xs font-bold uppercase tracking-widest mb-4">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-12 max-w-xl leading-tight">
            Simple. Usage-based. No surprises.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-3">
                Free
              </div>
              <div className="text-4xl font-black text-white mb-1">$0</div>
              <div className="text-white/40 text-sm mb-5">forever</div>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="text-[#E8C547]">✓</span> 3 browser instances
                </li>
                <li className="flex gap-2">
                  <span className="text-[#E8C547]">✓</span> Test your workflows
                </li>
                <li className="flex gap-2">
                  <span className="text-[#E8C547]">✓</span> No credit card needed
                </li>
              </ul>
            </div>
            <div className="bg-[#E8C547] rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-[#1A1A2E] text-[#E8C547] text-xs font-bold px-2 py-1 rounded-full">
                Popular
              </div>
              <div className="text-[#1A1A2E]/60 text-xs font-semibold uppercase tracking-widest mb-3">
                Scale
              </div>
              <div className="text-4xl font-black text-[#1A1A2E] mb-1">$79</div>
              <div className="text-[#1A1A2E]/50 text-sm mb-5">/month</div>
              <ul className="space-y-2 text-sm text-[#1A1A2E]/80">
                <li className="flex gap-2">
                  <span className="font-bold">✓</span> 20 browser instances
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">✓</span> 5 proxy lines
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">✓</span> 100K LLM tokens
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">✓</span> Usage-based beyond that
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A1A2E] mb-4 leading-tight">
          Ready to stop maintaining
          <br />
          infrastructure?
        </h2>
        <p className="text-[#1A1A2E]/55 mb-10 max-w-md mx-auto">
          Join AI developers and ops teams who are shipping faster with Truman.
        </p>
        <div className="max-w-md mx-auto">
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1A1A2E]/10 px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-[#1A1A2E] text-lg">Truman</span>
          <a
            href="https://boringcombinator.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1A1A2E]/5 hover:bg-[#1A1A2E]/10 transition-colors text-[#1A1A2E]/50 text-xs font-medium px-3 py-1.5 rounded-full"
          >
            Built with Boring Combinator
          </a>
          <span className="text-[#1A1A2E]/30 text-xs">
            © {new Date().getFullYear()} Truman. All rights reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}