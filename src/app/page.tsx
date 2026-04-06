import WaitlistForm from "@/components/waitlist-form";

const valueProps = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
    title: "One call, full stack",
    body:
      "Spin up isolated Docker containers with Chrome instances, residential proxies, and multi-provider LLM access. Everything bundled, nothing to stitch together.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Cut infra costs by 50%+",
    body:
      "No more paying separately for VPS, proxy pools, and API credits. Truman bundles all three. Most teams save 3-4 hours of ops work per day on top of that.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Pick the right model per task",
    body:
      "Use Claude for long-form reasoning, GPT for quick responses, or any other provider. Switch per task through one endpoint. No config files, no env juggling.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Truly isolated environments",
    body:
      "Each user or job gets its own container. No cross-contamination between sessions, no shared IP fingerprints, no noisy neighbors killing your uptime.",
  },
];

const comparisonItems = [
  { label: "Anti-detect browsers", them: "Browser profiles", us: true },
  { label: "Headless Chrome", them: "Chrome only", us: true },
  { label: "Residential proxies", them: "Sold separately", us: true },
  { label: "AI model access", them: "Not included", us: true },
  { label: "Task scheduling", them: "DIY", us: true },
  { label: "File management", them: "DIY", us: true },
  { label: "Isolated per-user env", them: "Shared infra", us: true },
];

const pricingPlans = [
  {
    name: "Free Trial",
    price: "$0",
    period: "",
    description: "See if it fits before you commit.",
    features: ["3 browser instances", "1 proxy line", "10K LLM tokens", "Community support"],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Starter",
    price: "$79",
    period: "/month",
    description: "For teams running steady workloads.",
    features: [
      "20 browser instances",
      "5 proxy lines",
      "100K LLM tokens",
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
    description: "High volume, dedicated infra, SLAs.",
    features: [
      "Unlimited instances",
      "Custom proxy allocation",
      "Dedicated LLM quota",
      "Priority support + SLA",
    ],
    cta: "Talk to us",
    highlight: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-gray-950/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16">
          <span className="text-white font-bold text-lg tracking-tight">
            Truman
          </span>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#comparison" className="hover:text-white transition">Compare</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </nav>
          <a
            href="#waitlist"
            className="rounded-lg bg-indigo-600 hover:bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition"
          >
            Get started
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28 px-4 sm:px-6">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Now in early access
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              One API call.{" "}
              <span className="text-indigo-400">Full browser automation stack.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Isolated browser environments with built-in proxies, AI models, and scheduling.
              Stop babysitting Docker containers.
            </p>

            <div className="max-w-lg mx-auto" id="waitlist">
              <WaitlistForm />
              <p className="mt-3 text-xs text-gray-600">
                No credit card needed. Free trial includes 3 browser instances.
              </p>
            </div>
          </div>
        </section>

        {/* Code snippet */}
        <section className="px-4 sm:px-6 pb-20">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-gray-900 shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-gray-900">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-gray-500">automate.ts</span>
              </div>
              <pre className="p-5 text-sm leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-gray-500">{"// One call. Everything ready.\n"}</span>
                  <span className="text-purple-400">const </span>
                  <span className="text-blue-300">env </span>
                  <span className="text-gray-300">= </span>
                  <span className="text-purple-400">await </span>
                  <span className="text-yellow-300">truman</span>
                  <span className="text-gray-300">.</span>
                  <span className="text-blue-400">spawn</span>
                  <span className="text-gray-300">{"({\n"}</span>
                  <span className="text-gray-300">{"  "}</span>
                  <span className="text-green-300">browsers</span>
                  <span className="text-gray-300">{": "}</span>
                  <span className="text-orange-300">{"5"}</span>
                  <span className="text-gray-300">{",\n"}</span>
                  <span className="text-gray-300">{"  "}</span>
                  <span className="text-green-300">proxy</span>
                  <span className="text-gray-300">{": "}</span>
                  <span className="text-orange-300">{'"residential"'}</span>
                  <span className="text-gray-300">{",\n"}</span>
                  <span className="text-gray-300">{"  "}</span>
                  <span className="text-green-300">llm</span>
                  <span className="text-gray-300">{": { "}</span>
                  <span className="text-green-300">provider</span>
                  <span className="text-gray-300">{": "}</span>
                  <span className="text-orange-300">{'"claude"'}</span>
                  <span className="text-gray-300">{" },\n"}</span>
                  <span className="text-gray-300">{"  "}</span>
                  <span className="text-green-300">schedule</span>
                  <span className="text-gray-300">{": "}</span>
                  <span className="text-orange-300">{'"0 * * * *"'}</span>
                  <span className="text-gray-300">{",\n"}</span>
                  <span className="text-gray-300">{"});\n\n"}</span>
                  <span className="text-gray-500">{"// env.browser, env.llm, env.files — all wired up.\n"}</span>
                  <span className="text-purple-400">await </span>
                  <span className="text-blue-300">env</span>
                  <span className="text-gray-300">.</span>
                  <span className="text-blue-400">browser</span>
                  <span className="text-gray-300">.</span>
                  <span className="text-blue-400">goto</span>
                  <span className="text-gray-300">{"("}</span>
                  <span className="text-orange-300">{'"https://example.com"'}</span>
                  <span className="text-gray-300">{")"}</span>
                  <span className="text-gray-300">{";"}</span>
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Value props */}
        <section id="features" className="px-4 sm:px-6 py-20 border-t border-white/5">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Everything your automation needs. Nothing it doesn&apos;t.
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Built for teams running web workflows at scale: social media management,
                competitive monitoring, data collection.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {valueProps.map((vp) => (
                <div
                  key={vp.title}
                  className="group rounded-2xl border border-white/8 bg-white/3 p-6 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition"
                >
                  <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 p-3">
                    {vp.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{vp.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{vp.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section id="comparison" className="px-4 sm:px-6 py-20 border-t border-white/5">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                The full stack, in one place
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                Anti-detect tools give you profiles. Browserbase gives you headless Chrome.
                Truman gives you all five layers, bundled.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/3">
                    <th className="text-left px-6 py-4 text-gray-400 font-medium">Feature</th>
                    <th className="px-6 py-4 text-gray-400 font-medium">Others</th>
                    <th className="px-6 py-4 text-indigo-400 font-semibold">Truman</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonItems.map((item, i) => (
                    <tr
                      key={item.label}
                      className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? "bg-transparent" : "bg-white/2"}`}
                    >
                      <td className="px-6 py-4 text-gray-300">{item.label}</td>
                      <td className="px-6 py-4 text-center text-gray-500">{item.them}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="px-4 sm:px-6 py-20 border-t border-white/5">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Simple pricing. No surprises.
              </h2>
              <p className="text-gray-400 text-lg">
                Start free. Upgrade when you&apos;re ready.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl border p-7 flex flex-col ${
                    plan.highlight
                      ? "border-indigo-500/50 bg-indigo-600/10 shadow-lg shadow-indigo-500/10"
                      : "border-white/10 bg-white/3"
                  }`}
                >
                  {plan.highlight && (
                    <span className="inline-block self-start text-xs font-semibold text-indigo-300 bg-indigo-500/20 border border-indigo-500/30 rounded-full px-3 py-1 mb-4">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-white font-bold text-lg">{plan.name}</h3>
                  <div className="mt-3 mb-1 flex items-end gap-1">
                    <span className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-gray-200"}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-400 mb-1">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm mb-6">{plan.description}</p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <svg className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#waitlist"
                    className={`block text-center rounded-xl px-5 py-3 text-sm font-semibold transition ${
                      plan.highlight
                        ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                        : "bg-white/8 hover:bg-white/12 text-white border border-white/10"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-4 sm:px-6 py-20 border-t border-white/5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to stop stitching things together?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Get your first 3 browser instances free. No credit card, no lock-in.
            </p>
            <WaitlistForm className="max-w-lg mx-auto" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 px-4 sm:px-6 py-8">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <span className="font-medium text-gray-500">Truman</span>
          <span>Built with <a href="https://boringcombinator.com" className="text-gray-500 hover:text-gray-400 transition">Boring Combinator</a></span>
          <span>&copy; {new Date().getFullYear()} Truman. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
