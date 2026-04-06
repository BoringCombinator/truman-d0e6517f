import WaitlistForm from "@/components/waitlist-form";

const valueProps = [
  {
    title: "Full Stack, One Call",
    description:
      "Spin up isolated Chrome instances with residential proxies and LLM access baked in — no config files, no infrastructure glue, just a single API call.",
    icon: "⚡",
  },
  {
    title: "Cut the Infra Bill",
    description:
      "Teams running self-managed VPS, proxy pools, and API subscriptions typically save 50%+ switching to Truman — and claw back 3 to 4 hours a day in manual ops work.",
    icon: "📉",
  },
  {
    title: "Swap Models Mid-Flight",
    description:
      "Route tasks to Claude, GPT, or whatever fits — per task, per workflow — without touching a single config file or redeploying anything.",
    icon: "🔀",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F2EE] text-[#1A1A2E]">
      {/* Nav */}
      <nav className="px-6 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <span className="text-xl font-black tracking-tight text-[#1A1A2E]">
          Truman
          <span className="text-[#E84E2A]">.</span>
        </span>
        <a
          href="#waitlist"
          className="text-sm font-semibold px-4 py-2 rounded-full border-2 border-[#1A1A2E] hover:bg-[#1A1A2E] hover:text-[#F5F2EE] transition-colors duration-200"
        >
          Join waitlist
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-[#E84E2A]/10 border border-[#E84E2A]/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E84E2A] animate-pulse"></span>
            <span className="text-sm font-medium text-[#E84E2A]">
              Now in early access
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            One API call.
            <br />
            <span className="text-[#E84E2A]">The whole browser stack.</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#1A1A2E]/70 max-w-2xl leading-relaxed mb-4">
            Browsers, proxies, AI models, scheduling, file management — isolated
            per user, ready in seconds.
          </p>
          <p className="text-lg text-[#1A1A2E]/50 max-w-xl leading-relaxed mb-12">
            Stop duct-taping five services together.
          </p>

          <div id="waitlist" className="max-w-md">
            <WaitlistForm />
            <p className="text-sm text-[#1A1A2E]/40 mt-3">
              Free tier includes 3 browser instances. No credit card required.
            </p>
          </div>
        </div>

        {/* Code snippet decoration */}
        <div className="mt-16 md:mt-20 rounded-2xl bg-[#1A1A2E] p-6 md:p-8 max-w-2xl font-mono text-sm overflow-x-auto">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-3 h-3 rounded-full bg-[#E84E2A]"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
          </div>
          <pre className="text-[#F5F2EE]/80 leading-relaxed">
            <span className="text-[#E84E2A]">const</span>
            <span className="text-[#F5F2EE]"> session </span>
            <span className="text-[#E84E2A]">=</span>
            <span className="text-[#F5F2EE]"> await truman.</span>
            <span className="text-yellow-300">create</span>
            <span className="text-[#F5F2EE]">({"{"}</span>
            {"\n"}
            <span className="text-[#F5F2EE]">  </span>
            <span className="text-blue-300">userId</span>
            <span className="text-[#F5F2EE]">: </span>
            <span className="text-green-300">"user_42"</span>
            <span className="text-[#F5F2EE]">,</span>
            {"\n"}
            <span className="text-[#F5F2EE]">  </span>
            <span className="text-blue-300">proxy</span>
            <span className="text-[#F5F2EE]">: </span>
            <span className="text-green-300">"residential"</span>
            <span className="text-[#F5F2EE]">,</span>
            {"\n"}
            <span className="text-[#F5F2EE]">  </span>
            <span className="text-blue-300">model</span>
            <span className="text-[#F5F2EE]">: </span>
            <span className="text-green-300">"claude-3-5-sonnet"</span>
            <span className="text-[#F5F2EE]">,</span>
            {"\n"}
            <span className="text-[#F5F2EE]">  </span>
            <span className="text-blue-300">schedule</span>
            <span className="text-[#F5F2EE]">: </span>
            <span className="text-green-300">"0 9 * * 1-5"</span>
            {"\n"}
            <span className="text-[#F5F2EE]">{"}"});</span>
            {"\n\n"}
            <span className="text-[#F5F2EE]/40">
              {"// "}Browser + proxy + LLM + scheduler. Done.
            </span>
          </pre>
        </div>
      </section>

      {/* Target Audience */}
      <section className="border-t border-[#1A1A2E]/10 bg-[#1A1A2E] text-[#F5F2EE]">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <p className="text-lg md:text-xl text-[#F5F2EE]/70 max-w-3xl leading-relaxed">
            Built for{" "}
            <span className="text-[#F5F2EE] font-semibold">
              AI developers and ops teams
            </span>{" "}
            running automated web workflows at scale. If you've ever manually
            restarted a Docker container at 2am,{" "}
            <span className="text-[#E84E2A] font-semibold">
              this is for you.
            </span>
          </p>
        </div>
      </section>

      {/* Value Props */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
            Why teams switch to Truman
          </h2>
          <div className="w-12 h-1.5 bg-[#E84E2A] rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="bg-white rounded-2xl p-8 border border-[#1A1A2E]/8 hover:border-[#E84E2A]/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-3xl mb-5">{prop.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#E84E2A] transition-colors duration-200">
                {prop.title}
              </h3>
              <p className="text-[#1A1A2E]/60 leading-relaxed text-[0.95rem]">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiation */}
      <section className="bg-[#1A1A2E] text-[#F5F2EE]">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#E84E2A]/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-sm font-semibold text-[#E84E2A]">
                  Why not the others?
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 leading-tight">
                Nobody else bundles all five.
                <br />
                <span className="text-[#E84E2A]">That's the whole point.</span>
              </h2>
              <p className="text-[#F5F2EE]/60 leading-relaxed text-lg">
                Anti-detect browsers give you profiles. Browserbase gives you
                headless Chrome. Truman gives you{" "}
                <span className="text-[#F5F2EE] font-medium">everything</span>:
                browsers, proxies, AI, scheduling, and file management in one
                isolated environment per user.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  label: "Anti-detect browsers",
                  features: ["Profiles", "", "", "", ""],
                },
                {
                  label: "Browserbase",
                  features: ["Browsers", "", "", "", ""],
                },
                {
                  label: "You, duct-taping",
                  features: ["Browsers", "Proxies", "AI", "", ""],
                },
                {
                  label: "Truman",
                  features: [
                    "Browsers",
                    "Proxies",
                    "AI",
                    "Scheduling",
                    "Files",
                  ],
                  highlight: true,
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className={`rounded-xl p-4 flex items-center justify-between gap-4 ${
                    row.highlight
                      ? "bg-[#E84E2A] text-white"
                      : "bg-[#F5F2EE]/5"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold w-36 shrink-0 ${row.highlight ? "text-white" : "text-[#F5F2EE]/50"}`}
                  >
                    {row.label}
                  </span>
                  <div className="flex gap-2 flex-wrap">
                    {row.features.map((f, i) =>
                      f ? (
                        <span
                          key={i}
                          className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                            row.highlight
                              ? "bg-white/20 text-white"
                              : "bg-[#F5F2EE]/10 text-[#F5F2EE]/70"
                          }`}
                        >
                          {f}
                        </span>
                      ) : (
                        <span key={i} className="w-[60px]"></span>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
            Pricing that makes sense
          </h2>
          <div className="w-12 h-1.5 bg-[#E84E2A] rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 border border-[#1A1A2E]/10">
            <div className="text-sm font-semibold text-[#1A1A2E]/40 uppercase tracking-widest mb-4">
              Free
            </div>
            <div className="text-4xl font-black mb-1">$0</div>
            <p className="text-[#1A1A2E]/50 text-sm mb-6">forever</p>
            <ul className="space-y-3 text-sm text-[#1A1A2E]/70">
              <li className="flex items-center gap-2">
                <span className="text-[#E84E2A]">✓</span> 3 browser instances
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#E84E2A]">✓</span> Full API access
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#E84E2A]">✓</span> Enough to validate
              </li>
            </ul>
          </div>

          <div className="bg-[#1A1A2E] text-[#F5F2EE] rounded-2xl p-8 border-2 border-[#E84E2A] relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E84E2A] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Most popular
            </div>
            <div className="text-sm font-semibold text-[#F5F2EE]/40 uppercase tracking-widest mb-4">
              Pro
            </div>
            <div className="text-4xl font-black mb-1">$79</div>
            <p className="text-[#F5F2EE]/40 text-sm mb-6">per month</p>
            <ul className="space-y-3 text-sm text-[#F5F2EE]/70">
              <li className="flex items-center gap-2">
                <span className="text-[#E84E2A]">✓</span> 20 browser instances
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#E84E2A]">✓</span> 5 proxy lines
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#E84E2A]">✓</span> 100K LLM tokens
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#E84E2A]">✓</span> Priority support
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-[#1A1A2E]/10">
            <div className="text-sm font-semibold text-[#1A1A2E]/40 uppercase tracking-widest mb-4">
              Scale
            </div>
            <div className="text-4xl font-black mb-1">Usage</div>
            <p className="text-[#1A1A2E]/50 text-sm mb-6">based pricing</p>
            <ul className="space-y-3 text-sm text-[#1A1A2E]/70">
              <li className="flex items-center gap-2">
                <span className="text-[#E84E2A]">✓</span> Unlimited instances
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#E84E2A]">✓</span> Pay for what you run
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#E84E2A]">✓</span> Enterprise SLA
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#E84E2A]">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Stop duct-taping.
            <br />
            Start building.
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-lg mx-auto">
            Free tier. No credit card. 3 browser instances to validate your
            workflow before you commit to anything.
          </p>
          <div className="max-w-md mx-auto">
            <WaitlistForm theme="light" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1A1A2E]/10 bg-[#F5F2EE]">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xl font-black tracking-tight text-[#1A1A2E]">
            Truman<span className="text-[#E84E2A]">.</span>
          </span>
          <p className="text-sm text-[#1A1A2E]/40">
            © {new Date().getFullYear()} Truman. All rights reserved.
          </p>
          <a
            href="https://boringcombinator.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-[#1A1A2E]/40 hover:text-[#1A1A2E]/70 transition-colors duration-200 border border-[#1A1A2E]/15 rounded-full px-3 py-1.5"
          >
            <span>🥱</span>
            <span>Built with Boring Combinator</span>
          </a>
        </div>
      </footer>
    </main>
  );
}