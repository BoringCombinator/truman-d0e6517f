import WaitlistForm from "@/components/waitlist-form";

/* ── Small reusable inline components (server-side, no "use client") ── */

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "4px 10px",
        background: "rgba(0, 212, 170, 0.08)",
        border: "1px solid rgba(0, 212, 170, 0.2)",
        borderRadius: "4px",
        fontFamily: "var(--font-mono)",
        fontSize: "0.72rem",
        color: "var(--accent)",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          width: "20px",
          height: "1px",
          background: "var(--accent)",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.72rem",
          color: "var(--accent)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        {children}
      </span>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  tag,
}: {
  icon: string;
  title: string;
  description: string;
  tag?: string;
}) {
  return (
    <div
      className="glow-hover"
      style={{
        padding: "28px",
        background: "var(--bg-2)",
        border: "1px solid var(--border)",
        borderRadius: "10px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle corner accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "60px",
          height: "60px",
          background:
            "radial-gradient(circle at top right, rgba(0,212,170,0.07), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          fontSize: "1.6rem",
          marginBottom: "16px",
          display: "block",
          lineHeight: 1,
        }}
      >
        {icon}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "8px",
          marginBottom: "10px",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.05rem",
            color: "var(--text)",
          }}
        >
          {title}
        </h3>
        {tag && <Tag>{tag}</Tag>}
      </div>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.875rem",
          color: "var(--text-muted)",
          lineHeight: 1.65,
        }}
      >
        {description}
      </p>
    </div>
  );
}

function PainPoint({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "flex-start",
        padding: "16px 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.78rem",
          color: "var(--red)",
          marginTop: "2px",
          flexShrink: 0,
        }}
      >
        ✗
      </span>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.9rem",
          color: "var(--text-muted)",
          lineHeight: 1.6,
        }}
      >
        {children}
      </p>
    </div>
  );
}

function CompareRow({
  feature,
  antiDetect,
  browserbase,
  truman,
}: {
  feature: string;
  antiDetect: boolean | string;
  browserbase: boolean | string;
  truman: boolean | string;
}) {
  const cell = (val: boolean | string) => (
    <td
      style={{
        padding: "14px 16px",
        textAlign: "center",
        fontFamily: "var(--font-mono)",
        fontSize: "0.8rem",
      }}
    >
      {typeof val === "boolean" ? (
        <span style={{ color: val ? "var(--accent)" : "var(--text-dim)", fontSize: "1rem" }}>
          {val ? "✓" : "–"}
        </span>
      ) : (
        <span style={{ color: "var(--text-muted)" }}>{val}</span>
      )}
    </td>
  );

  return (
    <tr style={{ borderBottom: "1px solid var(--border)" }}>
      <td
        style={{
          padding: "14px 16px",
          fontFamily: "var(--font-body)",
          fontSize: "0.875rem",
          color: "var(--text)",
        }}
      >
        {feature}
      </td>
      {cell(antiDetect)}
      {cell(browserbase)}
      <td
        style={{
          padding: "14px 16px",
          textAlign: "center",
          fontFamily: "var(--font-mono)",
          fontSize: "0.8rem",
          background: "rgba(0, 212, 170, 0.04)",
        }}
      >
        {typeof truman === "boolean" ? (
          <span style={{ color: "var(--accent)", fontSize: "1rem" }}>✓</span>
        ) : (
          <span style={{ color: "var(--accent)", fontWeight: 500 }}>{truman}</span>
        )}
      </td>
    </tr>
  );
}

/* ── Main page ── */
export default function Home() {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      {/* ── Nav ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 24px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(7, 8, 12, 0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1.1rem",
            letterSpacing: "0.04em",
            color: "var(--text)",
          }}
        >
          TRU<span style={{ color: "var(--accent)" }}>MAN</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          <nav
            style={{
              display: "flex",
              gap: "24px",
              listStyle: "none",
            }}
          >
            {["Features", "Pricing", "Docs"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#waitlist"
            style={{
              padding: "7px 18px",
              background: "transparent",
              border: "1px solid var(--accent)",
              borderRadius: "5px",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "0.8rem",
              color: "var(--accent)",
              textDecoration: "none",
              letterSpacing: "0.04em",
              transition: "background 0.2s, color 0.2s",
            }}
          >
            Start free
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section
        id="hero"
        className="grid-bg"
        style={{
          paddingTop: "140px",
          paddingBottom: "100px",
          paddingLeft: "24px",
          paddingRight: "24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(0,212,170,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* Left: copy */}
          <div>
            <div className="animate-fade-up" style={{ marginBottom: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="status-dot" />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--accent)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Now in private beta
                </span>
              </div>
            </div>

            <h1
              className="animate-fade-up delay-100"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--text)",
                marginBottom: "24px",
              }}
            >
              One API call.{" "}
              <span className="shimmer-text">Full browser automation stack.</span>
            </h1>

            <p
              className="animate-fade-up delay-200"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: "1.05rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                marginBottom: "36px",
                maxWidth: "480px",
              }}
            >
              Isolated containers with Chrome, residential proxies, and your choice of LLM.
              Spun up instantly. Torn down when you&apos;re done. No more YAML. No more SSH.
            </p>

            <div className="animate-fade-up delay-300" style={{ marginBottom: "20px" }}>
              <WaitlistForm />
            </div>

            <div
              className="animate-fade-up delay-400"
              style={{
                display: "flex",
                gap: "24px",
                flexWrap: "wrap",
                marginTop: "32px",
              }}
            >
              {[
                { n: "50%+", label: "lower infra cost" },
                { n: "3–4 hrs", label: "saved daily on ops" },
                { n: "5 tools", label: "in one API" },
              ].map(({ n, label }) => (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "1.5rem",
                      color: "var(--text)",
                      lineHeight: 1,
                    }}
                  >
                    {n}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "var(--text-muted)",
                      marginTop: "4px",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: code block */}
          <div className="animate-fade-in delay-400">
            <div
              style={{
                background: "var(--bg-2)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px var(--border)",
              }}
            >
              {/* window chrome */}
              <div
                style={{
                  padding: "12px 16px",
                  background: "var(--bg-3)",
                  borderBottom: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: "#ff5f57",
                    display: "block",
                  }}
                />
                <span
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: "#febc2e",
                    display: "block",
                  }}
                />
                <span
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: "#28c840",
                    display: "block",
                  }}
                />
                <span
                  style={{
                    marginLeft: "auto",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    color: "var(--text-muted)",
                  }}
                >
                  truman_example.py
                </span>
              </div>

              {/* code */}
              <div className="code-block" style={{ padding: "24px" }}>
                <div style={{ marginBottom: "4px" }}>
                  <span className="code-comment"># Spin up an isolated env for a user</span>
                </div>
                <div style={{ marginBottom: "16px" }}>
                  <span className="code-keyword">import</span>
                  <span> truman</span>
                </div>

                <div>
                  <span className="code-property">env</span>
                  <span className="code-punct"> = </span>
                  <span>truman</span>
                  <span className="code-punct">.</span>
                  <span style={{ color: "#a8d8ff" }}>create_env</span>
                  <span className="code-punct">(</span>
                </div>
                <div style={{ paddingLeft: "24px" }}>
                  <span className="code-property">user_id</span>
                  <span className="code-punct"> = </span>
                  <span className="code-string">&quot;usr_42&quot;</span>
                  <span className="code-punct">,</span>
                </div>
                <div style={{ paddingLeft: "24px" }}>
                  <span className="code-property">browsers</span>
                  <span className="code-punct"> = </span>
                  <span className="code-value">5</span>
                  <span className="code-punct">,</span>
                </div>
                <div style={{ paddingLeft: "24px" }}>
                  <span className="code-property">proxy</span>
                  <span className="code-punct"> = </span>
                  <span className="code-string">&quot;residential&quot;</span>
                  <span className="code-punct">,</span>
                </div>
                <div style={{ paddingLeft: "24px" }}>
                  <span className="code-property">llm</span>
                  <span className="code-punct"> = </span>
                  <span className="code-string">&quot;claude-3-7-sonnet&quot;</span>
                  <span className="code-punct">,</span>
                </div>
                <div style={{ paddingLeft: "24px" }}>
                  <span className="code-property">schedule</span>
                  <span className="code-punct"> = </span>
                  <span className="code-string">&quot;0 9 * * *&quot;</span>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <span className="code-punct">)</span>
                </div>

                <div>
                  <span className="code-comment"># env is ready. That&apos;s it.</span>
                </div>
                <div>
                  <span className="code-property">print</span>
                  <span className="code-punct">(</span>
                  <span>env</span>
                  <span className="code-punct">.</span>
                  <span className="code-value">status</span>
                  <span className="code-punct">)</span>
                  <span className="code-comment"> # &quot;running&quot;</span>
                </div>
              </div>

              {/* spinning up footer */}
              <div
                style={{
                  borderTop: "1px solid var(--border)",
                  padding: "12px 24px",
                  background: "var(--bg-3)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  {[
                    "Chrome ×5",
                    "Proxy",
                    "Claude",
                    "Scheduler",
                    "Storage",
                  ].map((label, i) => (
                    <div
                      key={label}
                      className="container-card"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        padding: "4px 8px",
                        background: "var(--bg)",
                        border: "1px solid var(--border)",
                        borderRadius: "4px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        color: "var(--text-muted)",
                        animationDelay: `${1.2 + i * 0.25}s`,
                      }}
                    >
                      <span
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "var(--accent)",
                          flexShrink: 0,
                        }}
                      />
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pain section ── */}
      <section
        id="problem"
        style={{
          padding: "100px 24px",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          <div>
            <SectionLabel>The problem</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                color: "var(--text)",
                marginBottom: "20px",
              }}
            >
              Your stack looks fine on paper.
              <br />
              <span style={{ color: "var(--text-muted)" }}>
                Until Friday at 2am.
              </span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
              }}
            >
              Most teams running browser automation at scale cobble together a VPS, a proxy
              provider, a headless browser library, an LLM API, and a cron job.
              Each piece has its own billing, its own failure modes, and its own
              3am pager alerts.
            </p>
          </div>

          <div>
            <PainPoint>
              VPS provider goes down. Your 200 browser jobs fail silently. You find
              out from a customer.
            </PainPoint>
            <PainPoint>
              Proxy pool gets blocked. You spend four hours sourcing a replacement
              vendor and updating credentials everywhere.
            </PainPoint>
            <PainPoint>
              Switching from GPT to Claude requires touching three config files, two
              environment variables, and a deployment.
            </PainPoint>
            <PainPoint>
              Each new customer means manually provisioning a new VPS or hoping
              your shared containers don&apos;t bleed into each other.
            </PainPoint>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section
        id="features"
        style={{
          padding: "100px 24px",
          background: "var(--bg-2)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <SectionLabel>What you get</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                letterSpacing: "-0.02em",
                color: "var(--text)",
                marginBottom: "16px",
              }}
            >
              Five tools. One call. One bill.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                color: "var(--text-muted)",
                maxWidth: "500px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Every environment gets the full stack out of the box. Nothing to wire up.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "16px",
            }}
          >
            <FeatureCard
              icon="🖥️"
              title="Isolated Chrome Instances"
              tag="Core"
              description="Each user gets their own Docker container with N concurrent Chrome
                instances. No shared state, no fingerprint leakage. You set the count;
                we handle the provisioning."
            />
            <FeatureCard
              icon="🌐"
              title="Residential Proxies"
              description="Proxy lines are baked in at the container level. Traffic routes
                through residential IPs automatically. No proxy provider account,
                no credential rotation, no IP management."
            />
            <FeatureCard
              icon="🤖"
              title="Multi-Provider LLM Access"
              tag="New"
              description="Switch between Claude, GPT, Gemini, or others per task. Long-form
                analysis? Claude. Quick structured extraction? GPT-4o. Set it in the
                API call, not in a config file."
            />
            <FeatureCard
              icon="⏱️"
              title="Built-in Scheduling"
              description="Pass a cron string and your workflow runs on schedule. No
                external cron service. No Lambda function. The environment wakes up,
                runs your job, and goes back to sleep."
            />
            <FeatureCard
              icon="📁"
              title="Persistent File Storage"
              description="Cookies, session data, screenshots, scraped files. All stored
                per-environment and accessible via the API. Your browser state
                survives restarts."
            />
          </div>
        </div>
      </section>

      {/* ── Comparison ── */}
      <section
        id="compare"
        style={{ padding: "100px 24px" }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <SectionLabel>How it compares</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                letterSpacing: "-0.02em",
                color: "var(--text)",
                marginBottom: "12px",
              }}
            >
              The full stack, not a slice of it
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
              }}
            >
              Anti-detect browsers give you profiles. Browserbase gives you headless Chrome.
              Truman gives you both, plus four more things you currently manage yourself.
            </p>
          </div>

          <div
            style={{
              background: "var(--bg-2)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <th
                    style={{
                      padding: "16px",
                      textAlign: "left",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                      fontWeight: 400,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Capability
                  </th>
                  {[
                    { name: "Anti-detect", sub: "e.g. Multilogin" },
                    { name: "Browserbase", sub: "headless cloud" },
                    { name: "Truman", sub: "full stack", accent: true },
                  ].map(({ name, sub, accent }) => (
                    <th
                      key={name}
                      style={{
                        padding: "16px",
                        textAlign: "center",
                        background: accent ? "rgba(0, 212, 170, 0.04)" : "transparent",
                        borderLeft: accent
                          ? "1px solid rgba(0, 212, 170, 0.2)"
                          : "1px solid var(--border)",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          color: accent ? "var(--accent)" : "var(--text)",
                        }}
                      >
                        {name}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.68rem",
                          color: "var(--text-muted)",
                          marginTop: "2px",
                        }}
                      >
                        {sub}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <CompareRow
                  feature="Browser fingerprint isolation"
                  antiDetect={true}
                  browserbase="partial"
                  truman={true}
                />
                <CompareRow
                  feature="Headless Chrome in the cloud"
                  antiDetect={false}
                  browserbase={true}
                  truman={true}
                />
                <CompareRow
                  feature="Built-in residential proxies"
                  antiDetect={false}
                  browserbase={false}
                  truman={true}
                />
                <CompareRow
                  feature="Multi-provider LLM access"
                  antiDetect={false}
                  browserbase={false}
                  truman={true}
                />
                <CompareRow
                  feature="Built-in task scheduling"
                  antiDetect={false}
                  browserbase={false}
                  truman={true}
                />
                <CompareRow
                  feature="Per-user isolation"
                  antiDetect="manual"
                  browserbase="manual"
                  truman="automatic"
                />
                <CompareRow
                  feature="Persistent file storage"
                  antiDetect={false}
                  browserbase={false}
                  truman={true}
                />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section
        id="pricing"
        style={{
          padding: "100px 24px",
          background: "var(--bg-2)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <SectionLabel>Pricing</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                letterSpacing: "-0.02em",
                color: "var(--text)",
                marginBottom: "12px",
              }}
            >
              Validate first. Pay after.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
              }}
            >
              Free trial with 3 browser instances. No credit card to get started.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
            }}
          >
            {/* Free */}
            <div
              className="glow-hover"
              style={{
                padding: "32px",
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "12px",
                }}
              >
                Trial
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "2.2rem",
                  color: "var(--text)",
                  marginBottom: "4px",
                }}
              >
                Free
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginBottom: "28px",
                }}
              >
                No card required
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                {[
                  "3 browser instances",
                  "1 proxy line",
                  "10K LLM tokens/mo",
                  "Community support",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: "8px",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    <span style={{ color: "var(--accent)", flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "11px",
                  background: "transparent",
                  border: "1px solid var(--border-2)",
                  borderRadius: "6px",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: "var(--text)",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
              >
                Get started
              </a>
            </div>

            {/* Starter */}
            <div
              style={{
                padding: "32px",
                background: "var(--bg)",
                border: "1px solid var(--accent)",
                borderRadius: "12px",
                position: "relative",
                boxShadow: "0 0 40px rgba(0, 212, 170, 0.08)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-1px",
                  left: "32px",
                  padding: "4px 12px",
                  background: "var(--accent)",
                  borderRadius: "0 0 6px 6px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  color: "var(--bg)",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Most popular
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "12px",
                  marginTop: "8px",
                }}
              >
                Starter
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "4px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "2.2rem",
                    color: "var(--text)",
                  }}
                >
                  $79
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                  }}
                >
                  /month
                </span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginBottom: "28px",
                }}
              >
                vs. $150–200 DIY equivalent
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                {[
                  "20 browser instances",
                  "5 proxy lines",
                  "100K LLM tokens/mo",
                  "Claude + GPT + Gemini",
                  "Built-in scheduler",
                  "Email support",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: "8px",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--text)",
                    }}
                  >
                    <span style={{ color: "var(--accent)", flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "11px",
                  background: "var(--accent)",
                  border: "none",
                  borderRadius: "6px",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: "var(--bg)",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
              >
                Start building free
              </a>
            </div>

            {/* Scale */}
            <div
              className="glow-hover"
              style={{
                padding: "32px",
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "12px",
                }}
              >
                Scale
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "2.2rem",
                  color: "var(--text)",
                  marginBottom: "4px",
                }}
              >
                Usage
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginBottom: "28px",
                }}
              >
                Based on what you consume
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                {[
                  "Unlimited browser instances",
                  "Dedicated proxy pool",
                  "Custom LLM token bundles",
                  "SLA + uptime guarantee",
                  "Dedicated Slack channel",
                  "Custom integrations",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: "8px",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    <span style={{ color: "var(--accent)", flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:hello@truman.dev"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "11px",
                  background: "transparent",
                  border: "1px solid var(--border-2)",
                  borderRadius: "6px",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: "var(--text)",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
              >
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA / Waitlist ── */}
      <section
        id="waitlist"
        className="grid-bg"
        style={{
          padding: "120px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(0,212,170,0.06), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              background: "var(--amber-dim)",
              border: "1px solid rgba(245, 166, 35, 0.2)",
              borderRadius: "4px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "var(--amber)",
              marginBottom: "24px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Private beta — limited spots
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
              color: "var(--text)",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            Stop wiring things together.
            <br />
            <span className="shimmer-text">Start shipping.</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              marginBottom: "40px",
            }}
          >
            Join teams already running their browser automation on Truman.
            Three instances free. No card. Cancel anytime.
          </p>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "100%", maxWidth: "480px" }}>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{
          padding: "32px 24px",
          borderTop: "1px solid var(--border)",
          background: "var(--bg)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "1rem",
              letterSpacing: "0.04em",
              color: "var(--text-muted)",
            }}
          >
            TRU<span style={{ color: "var(--accent)" }}>MAN</span>
          </div>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "var(--text-dim)",
            }}
          >
            Built with{" "}
            <a
              href="https://boringcombinator.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border-2)",
                paddingBottom: "1px",
                transition: "color 0.2s",
              }}
            >
              Boring Combinator
            </a>
          </p>

          <div style={{ display: "flex", gap: "20px" }}>
            {["Privacy", "Terms", "Docs"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--text-dim)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
