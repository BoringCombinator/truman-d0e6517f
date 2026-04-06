import WaitlistForm from "@/components/waitlist-form";

/* ---- Icons (inline SVG, zero dependencies) ---- */
function IconBrowser() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 7h16" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="5.5" cy="5" r="1" fill="currentColor" />
      <circle cx="8.5" cy="5" r="1" fill="currentColor" />
    </svg>
  );
}

function IconDollar() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2v16M7 5.5C7 4.12 8.34 3 10 3s3 1.12 3 2.5S11.66 8 10 8s-3 1.12-3 2.5S8.34 14 10 14s3-1.12 3-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconBrain() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 3C7.24 3 5 5.24 5 8c0 1.1.36 2.12.96 2.94C5.36 11.64 5 12.66 5 14c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3 0-1.34-.36-2.36-.96-3.06.6-.82.96-1.84.96-2.94 0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 8v6M8 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconCheck({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconX({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 4l8 8M12 4l-8 8" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ===== NAV ===== */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#" className="nav-logo">
            tru<span>man</span>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <a href="#pricing" className="btn-ghost hide-mobile">Pricing</a>
            <a href="#waitlist" className="btn-primary" style={{ padding: "0.5rem 1.125rem", fontSize: "0.875rem" }}>
              Start free
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section
        className="hero-grid"
        style={{
          paddingTop: "8rem",
          paddingBottom: "6rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div
          className="hero-radial"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative" }}>
          {/* Two-column layout on large screens */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* Left: copy + form */}
            <div>
              <div className="anim-fade-up anim-fade-up-1" style={{ marginBottom: "1.5rem" }}>
                <span className="tag">
                  <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
                  Early access
                </span>
              </div>

              <h1
                className="font-display anim-fade-up anim-fade-up-2"
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                  marginBottom: "1.25rem",
                  color: "var(--text)",
                }}
              >
                One API call.{" "}
                <br />
                <span style={{ color: "var(--accent)" }}>Full browser</span>
                <br />
                automation stack.
              </h1>

              <p
                className="anim-fade-up anim-fade-up-3"
                style={{
                  fontSize: "1.0625rem",
                  color: "var(--text-2)",
                  lineHeight: 1.65,
                  marginBottom: "2rem",
                  maxWidth: "420px",
                }}
              >
                Spin up isolated Chrome environments with residential proxies and AI models
                baked in. No Docker configs. No proxy billing dashboards. No vendor juggling.
                Just a single call.
              </p>

              {/* Form */}
              <div id="waitlist" className="anim-fade-up anim-fade-up-4">
                <WaitlistForm />
                <p style={{ marginTop: "0.75rem", fontSize: "0.8125rem", color: "var(--text-3)" }}>
                  Free tier includes 3 browser instances. No credit card needed.
                </p>
              </div>

              {/* Social proof row */}
              <div
                className="anim-fade-up anim-fade-up-5"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  marginTop: "2rem",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { label: "20 browsers", sub: "per env" },
                  { label: "5 proxy lines", sub: "residential" },
                  { label: "Multi-LLM", sub: "one endpoint" },
                ].map((stat) => (
                  <div key={stat.label} style={{ display: "flex", alignItems: "baseline", gap: "0.375rem" }}>
                    <span
                      className="font-display"
                      style={{ fontWeight: 700, fontSize: "0.9375rem", color: "var(--text)" }}
                    >
                      {stat.label}
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>{stat.sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: code window */}
            <div className="code-window anim-fade-up anim-fade-up-3 hide-mobile" style={{ maxWidth: "520px" }}>
              <div className="code-titlebar">
                <span className="dot dot-red" />
                <span className="dot dot-amber" />
                <span className="dot dot-green" />
                <span className="code-filename">automate.ts</span>
              </div>
              <div className="code-body">
                <pre className="code-block">
                  <span className="t-comment">{"// Spin up an isolated environment"}</span>{"\n"}
                  <span className="t-keyword">const</span>{" "}
                  <span className="t-const">env</span>
                  {" = "}<span className="t-keyword">await</span>{" "}
                  <span className="t-fn">truman</span>
                  {"."}<span className="t-fn">create</span>{"({\n"}
                  {"  "}<span className="t-prop">browsers</span>
                  {": "}<span className="t-num">20</span>
                  {",\n"}
                  {"  "}<span className="t-prop">proxy</span>
                  {": "}<span className="t-str">&quot;residential-us&quot;</span>
                  {",\n"}
                  {"  "}<span className="t-prop">models</span>
                  {": ["}<span className="t-str">&quot;claude-opus-4&quot;</span>
                  {", "}<span className="t-str">&quot;gpt-4o&quot;</span>
                  {"],\n"}
                  {"});\n"}
                  {"\n"}
                  <span className="t-comment">{"// Use it like any browser"}</span>{"\n"}
                  <span className="t-keyword">const</span>{" "}
                  <span className="t-const">page</span>
                  {" = "}<span className="t-keyword">await</span>{" "}
                  <span className="t-fn">env</span>
                  {"."}<span className="t-fn">browser</span>
                  {"."}<span className="t-fn">newPage</span>
                  {"();\n"}
                  <span className="t-keyword">await</span>{" "}
                  <span className="t-fn">page</span>
                  {"."}<span className="t-fn">goto</span>
                  {"("}<span className="t-str">&quot;https://target.com&quot;</span>
                  {");\n"}
                  {"\n"}
                  <span className="t-comment">{"// LLM extraction, same env"}</span>{"\n"}
                  <span className="t-keyword">const</span>{" "}
                  <span className="t-const">data</span>
                  {" = "}<span className="t-keyword">await</span>{" "}
                  <span className="t-fn">env</span>
                  {"."}<span className="t-fn">llm</span>
                  {"."}<span className="t-fn">extract</span>
                  {"({\n"}
                  {"  "}<span className="t-prop">page</span>{",\n"}
                  {"  "}<span className="t-prop">prompt</span>
                  {": "}<span className="t-str">&quot;Get all product prices&quot;</span>
                  {",\n"}
                  {"});\n"}
                  {"\n"}
                  <span className="t-comment">{"// That's it. No config files."}</span>
                  <span className="cursor-blink" />
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section style={{ padding: "5rem 0", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ marginBottom: "3rem" }}>
            <span className="section-label">The problem</span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                maxWidth: "600px",
              }}
            >
              Browser automation is a{" "}
              <span style={{ color: "var(--red)" }}>seven-tool problem</span>{" "}
              today.
            </h2>
            <p style={{ color: "var(--text-2)", marginTop: "0.875rem", maxWidth: "520px", fontSize: "1rem" }}>
              You didn&apos;t sign up to manage infra. But here you are, babysitting five
              different services just to run Chrome with a proxy.
            </p>
          </div>

          <div className="problem-grid">
            {/* Without Truman */}
            <div className="problem-card problem-card-bad">
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.25rem" }}>
                <IconClose />
                <span
                  className="font-display"
                  style={{ fontWeight: 700, fontSize: "1.0625rem", color: "var(--text)" }}
                >
                  Without Truman
                </span>
              </div>
              <p style={{ fontSize: "0.8125rem", color: "var(--text-3)", marginBottom: "0.5rem" }}>
                The current state
              </p>
              <ul className="problem-list">
                {[
                  "Spin up a VPS, configure Docker, install Chrome manually",
                  "Sign up for a proxy provider, rotate IPs, pay per GB",
                  "Set up LLM API keys per provider, manage rate limits yourself",
                  "Build your own scheduler or pay for another SaaS",
                  "3-4 hours a day of ops work just to keep it running",
                  "$200-400/month once you add it all up",
                ].map((item) => (
                  <li key={item}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ color: "var(--red)", flexShrink: 0 }}>
                      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* With Truman */}
            <div className="problem-card problem-card-good">
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.25rem" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8l3.5 3.5L13 5" stroke="#34d399" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span
                  className="font-display"
                  style={{ fontWeight: 700, fontSize: "1.0625rem", color: "var(--text)" }}
                >
                  With Truman
                </span>
              </div>
              <p style={{ fontSize: "0.8125rem", color: "var(--text-3)", marginBottom: "0.5rem" }}>
                What it should feel like
              </p>
              <ul className="problem-list">
                {[
                  "One API call spins up a fully isolated environment",
                  "Residential proxies included, no separate account needed",
                  "Claude, GPT, and others through a single endpoint",
                  "Built-in scheduling with cron support out of the box",
                  "Zero ops work. It just runs.",
                  "$79/month flat. That's it.",
                ].map((item) => (
                  <li key={item}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ color: "var(--green)", flexShrink: 0 }}>
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section style={{ padding: "5rem 0", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ marginBottom: "3rem" }}>
            <span className="section-label">What&apos;s inside</span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Everything you need.{" "}
              <span style={{ color: "var(--accent)" }}>Nothing you don&apos;t.</span>
            </h2>
          </div>

          <div className="feature-grid">
            {/* Card 1: Isolated envs */}
            <div className="feature-card">
              <div className="feature-icon">
                <IconBrowser />
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  marginBottom: "0.625rem",
                }}
              >
                Isolated by default
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-2)", lineHeight: 1.6 }}>
                Each environment is a dedicated Docker container. Your user A never leaks into
                user B. Chrome instances, files, and session data are all scoped per environment.
                Spin up as many as you need.
              </p>
              <div
                style={{
                  marginTop: "1.25rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                {["Chrome x20", "File storage", "Session mgmt"].map((chip) => (
                  <span
                    key={chip}
                    className="font-mono"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-3)",
                      background: "rgba(255,255,255,0.03)",
                      padding: "0.25rem 0.625rem",
                      borderRadius: "4px",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2: Cost */}
            <div className="feature-card">
              <div className="feature-icon feature-icon-amber">
                <IconDollar />
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  marginBottom: "0.625rem",
                }}
              >
                Cut infra costs by 50%
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-2)", lineHeight: 1.6 }}>
                Teams running their own VPS plus proxy pools plus LLM API keys typically pay
                $200-400/month per setup. Truman bundles all three for $79. The math is obvious.
              </p>
              <div
                style={{
                  marginTop: "1.25rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                {["Residential proxies", "No VPS bill", "No op hours"].map((chip) => (
                  <span
                    key={chip}
                    className="font-mono"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-3)",
                      background: "rgba(255,255,255,0.03)",
                      padding: "0.25rem 0.625rem",
                      borderRadius: "4px",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 3: Multi-LLM */}
            <div className="feature-card">
              <div className="feature-icon feature-icon-green">
                <IconBrain />
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  marginBottom: "0.625rem",
                }}
              >
                Any model, any task
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-2)", lineHeight: 1.6 }}>
                Use Claude for complex reasoning. Use GPT-4o for quick responses. Switch per
                task, per environment, per call. One endpoint. No config file rewrites. No new
                API keys to manage.
              </p>
              <div
                style={{
                  marginTop: "1.25rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                {["Claude", "GPT-4o", "Gemini"].map((chip) => (
                  <span
                    key={chip}
                    className="font-mono"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-3)",
                      background: "rgba(255,255,255,0.03)",
                      padding: "0.25rem 0.625rem",
                      borderRadius: "4px",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPARISON ===== */}
      <section style={{ padding: "5rem 0", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ marginBottom: "3rem" }}>
            <span className="section-label">How it stacks up</span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                maxWidth: "600px",
              }}
            >
              Nobody else bundles all five.
            </h2>
            <p style={{ color: "var(--text-2)", marginTop: "0.875rem", maxWidth: "560px", fontSize: "1rem" }}>
              Anti-detect browsers give you profiles. Browserbase gives you headless Chrome.
              Truman gives you the full stack in one isolated environment, controlled through
              one API.
            </p>
          </div>

          <div className="compare-wrap" style={{ overflowX: "auto" }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>DIY stack</th>
                  <th>Anti-detect</th>
                  <th>Browserbase</th>
                  <th className="col-truman-head">Truman</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Headless browser instances",
                    diy: "manual",
                    antidetect: true,
                    browserbase: true,
                    truman: true,
                  },
                  {
                    feature: "Residential proxies",
                    diy: "extra $",
                    antidetect: false,
                    browserbase: false,
                    truman: true,
                  },
                  {
                    feature: "Multi-provider LLM access",
                    diy: "manual",
                    antidetect: false,
                    browserbase: false,
                    truman: true,
                  },
                  {
                    feature: "Task scheduling",
                    diy: "manual",
                    antidetect: false,
                    browserbase: false,
                    truman: true,
                  },
                  {
                    feature: "File management",
                    diy: "manual",
                    antidetect: false,
                    browserbase: false,
                    truman: true,
                  },
                  {
                    feature: "Isolated env per user",
                    diy: "complex",
                    antidetect: "partial",
                    browserbase: "partial",
                    truman: true,
                  },
                  {
                    feature: "Single API for everything",
                    diy: false,
                    antidetect: false,
                    browserbase: false,
                    truman: true,
                  },
                ].map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    <td>
                      {row.diy === true ? (
                        <span className="check-icon"><IconCheck /></span>
                      ) : row.diy === false ? (
                        <span className="x-icon"><IconX /></span>
                      ) : (
                        <span className="partial">{row.diy}</span>
                      )}
                    </td>
                    <td>
                      {row.antidetect === true ? (
                        <span className="check-icon"><IconCheck /></span>
                      ) : row.antidetect === false ? (
                        <span className="x-icon"><IconX /></span>
                      ) : (
                        <span className="partial">{row.antidetect}</span>
                      )}
                    </td>
                    <td>
                      {row.browserbase === true ? (
                        <span className="check-icon"><IconCheck /></span>
                      ) : row.browserbase === false ? (
                        <span className="x-icon"><IconX /></span>
                      ) : (
                        <span className="partial">{row.browserbase}</span>
                      )}
                    </td>
                    <td className="col-truman">
                      {row.truman === true ? (
                        <span className="check-icon"><IconCheck size={18} /></span>
                      ) : (
                        <span className="x-icon"><IconX /></span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" style={{ padding: "5rem 0", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ marginBottom: "3rem" }}>
            <span className="section-label">Pricing</span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Simple, honest pricing.
            </h2>
            <p style={{ color: "var(--text-2)", marginTop: "0.875rem", fontSize: "1rem" }}>
              Start free. Pay when you scale.
            </p>
          </div>

          <div className="pricing-grid">
            {/* Free */}
            <div className="pricing-card">
              <span className="tag" style={{ marginBottom: "1.25rem", display: "inline-flex" }}>
                Free
              </span>
              <div style={{ marginBottom: "1rem" }}>
                <span className="price-amount">$0</span>
                <span className="price-period">/mo</span>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-2)", marginBottom: "0.25rem" }}>
                For teams kicking the tires.
              </p>
              <ul className="pricing-feature-list">
                {[
                  "3 browser instances",
                  "1 proxy line",
                  "10K LLM tokens",
                  "Community support",
                ].map((f) => (
                  <li key={f}>
                    <span style={{ color: "var(--accent)" }}><IconCheck size={14} /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className="btn-ghost" style={{ marginTop: "1.75rem", display: "flex", justifyContent: "center" }}>
                Start free
              </a>
            </div>

            {/* Starter - Featured */}
            <div className="pricing-card pricing-card-featured">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                <span className="tag">Starter</span>
                <span
                  className="font-mono"
                  style={{
                    fontSize: "0.6875rem",
                    background: "rgba(34,211,238,0.1)",
                    color: "var(--accent)",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "4px",
                    fontWeight: 600,
                  }}
                >
                  Most popular
                </span>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <span className="price-amount">$79</span>
                <span className="price-period">/mo</span>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-2)", marginBottom: "0.25rem" }}>
                For teams running real workloads.
              </p>
              <ul className="pricing-feature-list">
                {[
                  "20 browser instances",
                  "5 residential proxy lines",
                  "100K LLM tokens",
                  "Task scheduling",
                  "File management",
                  "Email support",
                ].map((f) => (
                  <li key={f}>
                    <span style={{ color: "var(--accent)" }}><IconCheck size={14} /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className="btn-primary" style={{ marginTop: "1.75rem", display: "flex", justifyContent: "center" }}>
                Get started
                <IconArrow />
              </a>
            </div>

            {/* Scale */}
            <div className="pricing-card">
              <span className="tag tag-amber" style={{ marginBottom: "1.25rem", display: "inline-flex" }}>
                Scale
              </span>
              <div style={{ marginBottom: "1rem" }}>
                <span className="price-amount" style={{ fontSize: "2rem" }}>Custom</span>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-2)", marginBottom: "0.25rem" }}>
                For high-volume operations.
              </p>
              <ul className="pricing-feature-list">
                {[
                  "Unlimited browser instances",
                  "Dedicated proxy pool",
                  "Custom LLM token volume",
                  "Priority scheduling",
                  "SLA + dedicated support",
                  "Custom integrations",
                ].map((f) => (
                  <li key={f}>
                    <span style={{ color: "var(--amber)" }}><IconCheck size={14} /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="mailto:hello@truman.dev" className="btn-ghost" style={{ marginTop: "1.75rem", display: "flex", justifyContent: "center" }}>
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        style={{
          padding: "5rem 0",
          borderTop: "1px solid var(--border)",
          background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(34,211,238,0.05) 0%, transparent 70%)",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "1rem" }}>
            Get started today
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Stop managing infra.
            <br />
            <span style={{ color: "var(--accent)" }}>Start building.</span>
          </h2>
          <p
            style={{
              color: "var(--text-2)",
              fontSize: "1.0625rem",
              marginBottom: "2.5rem",
              maxWidth: "440px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.6,
            }}
          >
            Join the early access waitlist. Free tier available immediately.
            No credit card needed.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container footer-inner">
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <span className="font-display" style={{ fontWeight: 800, fontSize: "0.9375rem", letterSpacing: "-0.02em" }}>
              tru<span style={{ color: "var(--accent)" }}>man</span>
            </span>
            <span style={{ color: "var(--text-3)", fontSize: "0.8125rem" }}>
              &copy; {new Date().getFullYear()} Truman. All rights reserved.
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--text-3)",
              fontSize: "0.8125rem",
            }}
          >
            <span>Built with</span>
            <a
              href="https://boringcombinator.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Boring Combinator
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
