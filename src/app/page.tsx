import WaitlistForm from "@/components/waitlist-form";

const valueProps = [
  {
    title: "Full Stack, One Call",
    description:
      "Spin up isolated Docker containers with concurrent Chrome instances, residential proxies, and multi-provider LLM access in a single API call — no YAML files, no manual provisioning.",
    icon: "⚡",
  },
  {
    title: "Cut Infra Bills in Half",
    description:
      "Teams switching from self-managed VPS, proxy pools, and separate LLM subscriptions consistently save 50%+ per month and get back 3 to 4 hours a day they were burning on ops.",
    icon: "📉",
  },
  {
    title: "Switch LLMs Per Task",
    description:
      "Route Claude for long-form reasoning, GPT for quick hits — all through one endpoint, no config changes, no redeployment.",
    icon: "🔀",
  },
];

const stackItems = [
  { label: "Browsers", detail: "Isolated Chrome instances per user" },
  { label: "Proxies", detail: "Residential proxy pools, built-in" },
  { label: "AI Models", detail: "Multi-provider LLM routing" },
  { label: "Scheduling", detail: "Cron and event-based triggers" },
  { label: "File Management", detail: "Persistent storage per session" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F4F0] text-[#1A1A2E]">
      {/* Nav */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-xl font-black tracking-tight text-[#1A1A2E]">
          Truman
        </span>
        <a
          href="#waitlist"
          className="rounded-full bg-[#E8500A] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#c94208]"
        >
          Start free
        </a>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-28">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1A1A2E]/15 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#E8500A]">
            Browser Automation Infrastructure
          </div>
          <h1 className="mb-6 text-5xl font-black leading-[1.05] tracking-tight text-[#1A1A2E] md:text-7xl">
            One API call.{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Full browser</span>
              <span
                className="absolute bottom-1 left-0 z-0 h-3 w-full opacity-30"
                style={{ background: "#E8500A" }}
              />
            </span>{" "}
            automation stack.
          </h1>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-[#1A1A2E]/70 md:text-xl">
            Stop gluing together VPS instances, proxy pools, and LLM configs by
            hand. Truman gives every user isolated browsers, residential
            proxies, AI, and scheduling — bundled, managed, and ready to go.
          </p>
          <div id="waitlist" className="max-w-md">
            <WaitlistForm />
          </div>
          <p className="mt-3 text-xs text-[#1A1A2E]/40">
            Free tier includes 3 browser instances. No credit card required.
          </p>
        </div>

        {/* Code snippet hero visual */}
        <div className="mt-16 rounded-2xl border border-[#1A1A2E]/10 bg-[#1A1A2E] p-6 font-mono text-sm text-white shadow-2xl md:mt-20">
          <div className="mb-4 flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="overflow-x-auto">
            <pre className="text-sm leading-7">
              <span className="text-[#E8500A]">const</span>{" "}
              <span className="text-white">session</span>{" "}
              <span className="text-[#E8500A]">=</span>{" "}
              <span className="text-[#7dd3fc]">await</span>{" "}
              <span className="text-white">truman</span>
              <span className="text-[#E8500A]/80">.</span>
              <span className="text-[#86efac]">create</span>
              <span className="text-white">({"{"}</span>
              {"\n"}
              {"  "}
              <span className="text-[#fde68a]">browser</span>
              <span className="text-white">:</span>{" "}
              <span className="text-[#86efac]">&quot;chrome&quot;</span>
              <span className="text-white">,</span>
              {"\n"}
              {"  "}
              <span className="text-[#fde68a]">proxy</span>
              <span className="text-white">:</span>{" "}
              <span className="text-[#86efac]">&quot;residential&quot;</span>
              <span className="text-white">,</span>
              {"\n"}
              {"  "}
              <span className="text-[#fde68a]">llm</span>
              <span className="text-white">:</span>{" "}
              <span className="text-[#86efac]">&quot;claude-3-5-sonnet&quot;</span>
              <span className="text-white">,</span>
              {"\n"}
              {"  "}
              <span className="text-[#fde68a]">schedule</span>
              <span className="text-white">:</span>{" "}
              <span className="text-[#86efac]">&quot;*/15 * * * *&quot;</span>
              <span className="text-white">,</span>
              {"\n"}
              {"  "}
              <span className="text-[#fde68a]">userId</span>
              <span className="text-white">:</span>{" "}
              <span className="text-[#86efac]">&quot;user_abc123&quot;</span>
              {"\n"}
              <span className="text-white">{"})"};</span>
              {"\n\n"}
              <span className="text-[#1A1A2E]/40">
                {"// "}
              </span>
              <span className="text-[#E8500A]/70">
                Isolated browser + proxy + AI + scheduler. Done.
              </span>
            </pre>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#E8500A]">
            Why teams switch
          </div>
          <h2 className="mb-16 max-w-xl text-3xl font-black tracking-tight text-[#1A1A2E] md:text-4xl">
            Built for teams who build, not babysit.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {valueProps.map((vp) => (
              <div
                key={vp.title}
                className="group rounded-2xl border border-[#1A1A2E]/8 bg-[#F5F4F0] p-8 transition hover:border-[#E8500A]/30 hover:shadow-lg"
              >
                <div className="mb-5 text-4xl">{vp.icon}</div>
                <h3 className="mb-3 text-lg font-black tracking-tight text-[#1A1A2E]">
                  {vp.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#1A1A2E]/60">
                  {vp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation / Stack */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#E8500A]">
                What makes Truman different
              </div>
              <h2 className="mb-6 text-3xl font-black tracking-tight text-[#1A1A2E] md:text-4xl">
                Nobody else bundles all five.
              </h2>
              <p className="mb-8 leading-relaxed text-[#1A1A2E]/65">
                Anti-detect browsers give you profiles. Browserbase gives you
                headless Chrome. Truman gives you everything: browsers,
                proxies, AI, scheduling, and file management — isolated per
                user, controlled through one API.
              </p>
              <p className="text-sm font-semibold text-[#1A1A2E]/50">
                Perfect for AI devs and ops teams running social monitoring,
                data collection, and competitive intel at scale — who are tired
                of babysitting infrastructure instead of shipping product.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {stackItems.map((item, i) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-xl border border-[#1A1A2E]/8 bg-white px-6 py-5 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8500A] text-xs font-black text-white">
                      {i + 1}
                    </span>
                    <span className="font-black text-[#1A1A2E]">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-right text-xs text-[#1A1A2E]/50">
                    {item.detail}
                  </span>
                </div>
              ))}
              <div className="mt-2 rounded-xl border border-[#E8500A]/30 bg-[#E8500A]/5 px-6 py-4 text-center">
                <span className="text-sm font-bold text-[#E8500A]">
                  All five. One API endpoint. Isolated per user.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#E8500A]">
            Pricing
          </div>
          <h2 className="mb-16 text-3xl font-black tracking-tight text-[#1A1A2E] md:text-4xl">
            Start free. Scale when you&apos;re ready.
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Free */}
            <div className="rounded-2xl border border-[#1A1A2E]/10 bg-[#F5F4F0] p-8">
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#1A1A2E]/40">
                Free
              </div>
              <div className="mb-6 text-4xl font-black text-[#1A1A2E]">$0</div>
              <ul className="mb-8 space-y-3 text-sm text-[#1A1A2E]/70">
                <li className="flex items-center gap-2">
                  <span className="text-[#E8500A]">✓</span> 3 browser instances
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#E8500A]">✓</span> Validate your workflow
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#E8500A]">✓</span> No credit card needed
                </li>
              </ul>
              <span className="text-xs font-semibold text-[#1A1A2E]/40">
                Get started today
              </span>
            </div>

            {/* Pro */}
            <div className="relative rounded-2xl border-2 border-[#E8500A] bg-[#1A1A2E] p-8 text-white shadow-xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#E8500A] px-4 py-1 text-xs font-black uppercase tracking-wider text-white">
                Most Popular
              </div>
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-white/40">
                Pro
              </div>
              <div className="mb-1 text-4xl font-black text-white">$79</div>
              <div className="mb-6 text-sm text-white/40">/month</div>
              <ul className="mb-8 space-y-3 text-sm text-white/75">
                <li className="flex items-center gap-2">
                  <span className="text-[#E8500A]">✓</span> 20 browser instances
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#E8500A]">✓</span> 5 proxy lines
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#E8500A]">✓</span> 100K LLM tokens
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#E8500A]">✓</span> Scheduling included
                </li>
              </ul>
              <span className="text-xs font-semibold text-white/40">
                ~50% less than DIY
              </span>
            </div>

            {/* Scale */}
            <div className="rounded-2xl border border-[#1A1A2E]/10 bg-[#F5F4F0] p-8">
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#1A1A2E]/40">
                Scale
              </div>
              <div className="mb-1 text-4xl font-black text-[#1A1A2E]">
                Usage
              </div>
              <div className="mb-6 text-sm text-[#1A1A2E]/40">-based</div>
              <ul className="mb-8 space-y-3 text-sm text-[#1A1A2E]/70">
                <li className="flex items-center gap-2">
                  <span className="text-[#E8500A]">✓</span> Unlimited instances
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#E8500A]">✓</span> Pay for what you use
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#E8500A]">✓</span> Volume discounts
                </li>
              </ul>
              <span className="text-xs font-semibold text-[#1A1A2E]/40">
                Grows with you
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A2E] py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#E8500A]">
            Early Access
          </div>
          <h2 className="mb-6 text-4xl font-black tracking-tight text-white md:text-5xl">
            Start building free.
            <br />
            Ship faster.
          </h2>
          <p className="mb-10 text-lg text-white/50">
            Join the waitlist and be first to get access. 3 browser instances
            free, no credit card required.
          </p>
          <div className="mx-auto max-w-md">
            <WaitlistForm dark />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1A1A2E]/10 bg-[#F5F4F0] px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <span className="text-lg font-black tracking-tight text-[#1A1A2E]">
            Truman
          </span>
          <p className="text-xs text-[#1A1A2E]/40">
            Browsers, proxies, AI, scheduling — one API.
          </p>
          <a
            href="https://boringcombinator.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#1A1A2E]/10 bg-white px-4 py-2 text-xs font-semibold text-[#1A1A2E]/50 transition hover:text-[#1A1A2E]"
          >
            <span>🥱</span>
            Built with Boring Combinator
          </a>
        </div>
      </footer>
    </main>
  );
}