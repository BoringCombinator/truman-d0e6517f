import WaitlistForm from "@/components/waitlist-form";

const valueProps = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    title: "Everything in one box",
    body: "Browsers, residential proxies, LLM access, scheduling, and file management. One user. One container. One API call. No duct tape required.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Cut infra spend in half",
    body: "Self-managed VPS + proxy pool + AI APIs adds up fast. Teams typically save 50%+ switching to Truman, plus 3 to 4 hours a day they were spending on maintenance.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    title: "Switch AI models per task",
    body: "Use Claude for long-form reasoning, GPT for fast replies, or any other provider. Swap models per task without touching config files. One endpoint handles all of it.",
  },
];

const comparisonItems = [
  { feature: "Isolated containers per user", truman: true, antiDetect: false, browserbase: false },
  { feature: "Residential proxies included", truman: true, antiDetect: false, browserbase: false },
  { feature: "Multi-provider LLM access", truman: true, antiDetect: false, browserbase: false },
  { feature: "Task scheduling built in", truman: true, antiDetect: false, browserbase: false },
  { feature: "File management", truman: true, antiDetect: false, browserbase: false },
  { feature: "Single API to control everything", truman: true, antiDetect: false, browserbase: false },
];

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Kick the tires before you commit.",
    features: [
      "3 browser instances",
      "Shared proxy access",
      "10K LLM tokens/month",
      "Community support",
    ],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Starter",
    price: "$79",
    period: "/month",
    description: "For teams running real workflows.",
    features: [
      "20 browser instances",
      "5 residential proxy lines",
      "100K LLM tokens/month",
      "Email support",
      "Usage-based overages",
    ],
    cta: "Start building free",
    highlight: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    description: "For high-volume operations.",
    features: [
      "Unlimited instances",
      "Dedicated proxy pools",
      "Custom LLM token limits",
      "SLA + dedicated support",
      "Custom integrations",
    ],
    cta: "Talk to us",
    highlight: false,
  },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-4 h-4 text-gray-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f0f13", color: "#e5e7eb" }}>
      {/* Nav */}
      <nav className="border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}>
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <span className="font-semibold text-white text-base tracking-tight">Truman</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">Pricing</a>
            <a
              href="#waitlist"
              className="text-sm font-medium px-4 py-2 rounded-lg text-white transition-colors"
              style={{ backgroundColor: "#4f46e5" }}
            >
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.15), transparent)",
          }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center relative">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8"
            style={{ backgroundColor: "rgba(99,102,241,0.12)", color: "#a5b4fc", border: "1px solid rgba(99,102,241,0.25)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Now in early access
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 max-w-4xl mx-auto">
            One API call.{" "}
            <span style={{ background: "linear-gradient(135deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Full browser automation stack.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Isolated environments with browsers, proxies, AI, and scheduling baked in.
            Stop wiring together VPS instances and proxy pools by hand.
          </p>

          <div id="waitlist" className="flex justify-center mb-6">
            <WaitlistForm />
          </div>

          <p className="text-sm text-gray-500">
            Free plan includes 3 browser instances. No credit card needed.
          </p>

          {/* Code snippet */}
          <div className="mt-16 max-w-2xl mx-auto text-left">
            <div className="rounded-2xl overflow-hidden border" style={{ backgroundColor: "#17171d", borderColor: "rgba(255,255,255,0.07)" }}>
              <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ef4444" }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#f59e0b" }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#22c55e" }} />
                <span className="ml-3 text-xs" style={{ color: "#4b5563" }}>truman.ts</span>
              </div>
              <pre className="p-5 text-sm overflow-x-auto leading-relaxed" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}>
                <code>
                  <span style={{ color: "#6b7280" }}>{"// Spin up a full environment in one call\n"}</span>
                  <span style={{ color: "#c084fc" }}>{"const "}</span>
                  <span style={{ color: "#e5e7eb" }}>env</span>
                  <span style={{ color: "#6366f1" }}>{" = "}</span>
                  <span style={{ color: "#f59e0b" }}>{"await "}</span>
                  <span style={{ color: "#e5e7eb" }}>truman</span>
                  <span style={{ color: "#6b7280" }}>{"."}</span>
                  <span style={{ color: "#34d399" }}>{"create"}</span>
                  <span style={{ color: "#e5e7eb" }}>{"({"}</span>
                  <span>{"\n"}</span>
                  <span style={{ color: "#e5e7eb" }}>{"  "}</span>
                  <span style={{ color: "#818cf8" }}>{"browsers"}</span>
                  <span style={{ color: "#6b7280" }}>{": "}</span>
                  <span style={{ color: "#f59e0b" }}>{"5"}</span>
                  <span style={{ color: "#e5e7eb" }}>{","}</span>
                  <span>{"\n"}</span>
                  <span style={{ color: "#e5e7eb" }}>{"  "}</span>
                  <span style={{ color: "#818cf8" }}>{"proxy"}</span>
                  <span style={{ color: "#6b7280" }}>{": "}</span>
                  <span style={{ color: "#86efac" }}>{'"residential"'}</span>
                  <span style={{ color: "#e5e7eb" }}>{","}</span>
                  <span>{"\n"}</span>
                  <span style={{ color: "#e5e7eb" }}>{"  "}</span>
                  <span style={{ color: "#818cf8" }}>{"model"}</span>
                  <span style={{ color: "#6b7280" }}>{": "}</span>
                  <span style={{ color: "#86efac" }}>{'"claude-3-5-sonnet"'}</span>
                  <span style={{ color: "#e5e7eb" }}>{","}</span>
                  <span>{"\n"}</span>
                  <span style={{ color: "#e5e7eb" }}>{"});"}</span>
                  <span>{"\n\n"}</span>
                  <span style={{ color: "#6b7280" }}>{"// Full stack, running, ready\n"}</span>
                  <span style={{ color: "#e5e7eb" }}>{"await env"}</span>
                  <span style={{ color: "#6b7280" }}>{"."}</span>
                  <span style={{ color: "#34d399" }}>{"run"}</span>
                  <span style={{ color: "#e5e7eb" }}>{"("}</span>
                  <span style={{ color: "#86efac" }}>{"myWorkflow"}</span>
                  <span style={{ color: "#e5e7eb" }}>{")"}</span>
                  <span style={{ color: "#6b7280" }}>{";"}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <div className="border-y" style={{ borderColor: "rgba(255,255,255,0.06)", backgroundColor: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-xs uppercase tracking-widest text-gray-600 mb-4">Built for teams running automated workflows at scale</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-gray-500 text-sm font-medium">
            {["Social media automation", "Competitive monitoring", "Data collection pipelines", "Web testing at scale"].map((use) => (
              <span key={use} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-indigo-500" />
                {use}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Value props */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Everything your workflow needs. Nothing it doesn&apos;t.
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              No more gluing together six different services and praying they all stay up.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="rounded-2xl p-6 border transition-colors"
                style={{ backgroundColor: "#17171d", borderColor: "rgba(255,255,255,0.07)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(99,102,241,0.12)", color: "#818cf8" }}
                >
                  {prop.icon}
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">{prop.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{prop.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The only full stack option
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Anti-detect browsers give you profiles. Browserbase gives you headless Chrome.
              Truman gives you everything else too.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[540px] rounded-2xl border overflow-hidden" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
              {/* Header */}
              <div className="grid grid-cols-4 text-sm font-medium border-b" style={{ backgroundColor: "#17171d", borderColor: "rgba(255,255,255,0.07)" }}>
                <div className="px-6 py-4 text-gray-500">Feature</div>
                <div className="px-6 py-4 text-center" style={{ color: "#818cf8" }}>Truman</div>
                <div className="px-6 py-4 text-center text-gray-500">Anti-detect</div>
                <div className="px-6 py-4 text-center text-gray-500">Browserbase</div>
              </div>
              {comparisonItems.map((item, i) => (
                <div
                  key={item.feature}
                  className="grid grid-cols-4 text-sm border-b last:border-b-0"
                  style={{
                    borderColor: "rgba(255,255,255,0.06)",
                    backgroundColor: i % 2 === 0 ? "#0f0f13" : "rgba(255,255,255,0.015)",
                  }}
                >
                  <div className="px-6 py-4 text-gray-300">{item.feature}</div>
                  <div className="px-6 py-4 flex justify-center items-center">
                    {item.truman ? <CheckIcon /> : <XIcon />}
                  </div>
                  <div className="px-6 py-4 flex justify-center items-center">
                    {item.antiDetect ? <CheckIcon /> : <XIcon />}
                  </div>
                  <div className="px-6 py-4 flex justify-center items-center">
                    {item.browserbase ? <CheckIcon /> : <XIcon />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How it works
            </h2>
            <p className="text-gray-400 text-lg">
              From API call to running workflow in under 30 seconds.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create an environment",
                body: "One API call spins up an isolated Docker container for your user. Chrome instances, proxy lines, and LLM access are all configured and ready.",
              },
              {
                step: "02",
                title: "Write your workflow",
                body: "Use any Playwright or Puppeteer script. Call our LLM endpoint to make decisions mid-workflow. Schedule it to run on a cron or trigger.",
              },
              {
                step: "03",
                title: "Ship and scale",
                body: "Each user gets their own isolated environment. Add more instances as you grow. We handle the infra. You handle the logic.",
              },
            ].map((s) => (
              <div key={s.step} className="relative">
                <div className="text-5xl font-bold mb-4" style={{ color: "rgba(99,102,241,0.2)" }}>{s.step}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple pricing
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Start free. Pay when you ship. Scale when you grow.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-2xl p-7 border flex flex-col relative"
                style={{
                  backgroundColor: tier.highlight ? "rgba(99,102,241,0.07)" : "#17171d",
                  borderColor: tier.highlight ? "rgba(99,102,241,0.4)" : "rgba(255,255,255,0.07)",
                }}
              >
                {tier.highlight && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: "#4f46e5", color: "#fff" }}
                  >
                    Most popular
                  </div>
                )}
                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-400 mb-1">{tier.name}</div>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    {tier.period && <span className="text-gray-500 text-sm mb-1">{tier.period}</span>}
                  </div>
                  <p className="text-gray-500 text-sm">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className="block text-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors"
                  style={{
                    backgroundColor: tier.highlight ? "#4f46e5" : "rgba(255,255,255,0.05)",
                    color: tier.highlight ? "#fff" : "#9ca3af",
                    border: tier.highlight ? "none" : "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mt-8">
            All plans include a 14-day money-back guarantee. No questions asked.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="rounded-3xl p-12 border relative overflow-hidden"
            style={{ backgroundColor: "#17171d", borderColor: "rgba(255,255,255,0.07)" }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(99,102,241,0.12), transparent)" }}
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 relative">
              Stop managing infra. Start shipping.
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto relative">
              Three instances free. No credit card. Get your workflow running in minutes, not days.
            </p>
            <div className="flex justify-center relative">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}>
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-400">Truman</span>
          </div>
          <p className="text-sm text-gray-600">
            Built with{" "}
            <a
              href="https://boringcombinator.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-400 transition-colors"
            >
              Boring Combinator
            </a>
          </p>
          <p className="text-xs text-gray-700">&copy; {new Date().getFullYear()} Truman. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
