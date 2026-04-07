import WaitlistForm from "@/components/waitlist-form";

const valueProps = [
  {
    title: "One environment per user. Fully isolated.",
    description:
      "Each user gets their own Docker container with concurrent Chrome instances, residential proxies, and multi-provider LLM access. Spin it all up with a single API call. No YAML files. No orchestration headaches.",
  },
  {
    title: "Cut your infra bill in half.",
    description:
      "Stop paying for separate VPS instances, proxy pools, and API subscriptions. Truman bundles everything into one predictable monthly cost. Most teams save 50%+ on their first invoice.",
  },
  {
    title: "Switch AI models per task.",
    description:
      "Use Claude for long-form analysis. GPT for quick classification. Gemini for vision tasks. Switch between providers on a per-request basis through one endpoint. No config changes, no API key juggling.",
  },
];

const stackItems = [
  { label: "Browser instances", detail: "Concurrent Chrome sessions per user" },
  { label: "Residential proxies", detail: "Auto-rotating, geo-targeted" },
  { label: "LLM access", detail: "Multi-provider, switchable per request" },
  { label: "Task scheduling", detail: "Cron-based, with retry logic" },
  { label: "File management", detail: "Per-environment persistent storage" },
];

const pricingTiers = [
  {
    name: "Free Trial",
    price: "$0",
    period: "",
    features: [
      "3 browser instances",
      "1 proxy line",
      "10K LLM tokens",
      "7-day trial",
    ],
    cta: true,
  },
  {
    name: "Starter",
    price: "$79",
    period: "/month",
    features: [
      "20 browser instances",
      "5 proxy lines",
      "100K LLM tokens",
      "Priority support",
    ],
    cta: true,
    highlighted: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    features: [
      "Unlimited instances",
      "Dedicated proxies",
      "Usage-based tokens",
      "SLA + onboarding",
    ],
    cta: true,
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          padding: "120px 24px 100px",
          textAlign: "center",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            fontFamily: "var(--font-mono)",
            color: "var(--color-muted)",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Truman
        </p>
        <h1
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: "24px",
            color: "var(--color-foreground)",
          }}
        >
          One API call.
          <br />
          Full browser automation stack.
        </h1>
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.6,
            color: "var(--color-muted)",
            maxWidth: "580px",
            margin: "0 auto 48px",
            fontFamily: "var(--font-sans)",
          }}
        >
          Isolated browser environments with built-in proxies, AI models, and
          scheduling. Stop babysitting Docker containers.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <WaitlistForm />
        </div>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            height: "0.5px",
            backgroundColor: "var(--color-border)",
          }}
        />
      </div>

      {/* What you get */}
      <section
        style={{
          padding: "100px 24px",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 3.5vw, 40px)",
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Five tools. One API.
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--color-muted)",
            fontSize: "16px",
            maxWidth: "520px",
            margin: "0 auto 64px",
            fontFamily: "var(--font-sans)",
          }}
        >
          Anti-detect browsers give you profiles. Browserbase gives you headless
          Chrome. Truman gives you the full stack.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1px",
            backgroundColor: "var(--color-border)",
            border: "0.5px solid var(--color-border)",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {stackItems.map((item) => (
            <div
              key={item.label}
              style={{
                padding: "32px",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  fontFamily: "var(--font-sans)",
                  marginBottom: "6px",
                  color: "var(--color-foreground)",
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--color-muted)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            height: "0.5px",
            backgroundColor: "var(--color-border)",
          }}
        />
      </div>

      {/* Value props */}
      <section
        style={{
          padding: "100px 24px",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "64px",
          }}
        >
          {valueProps.map((prop, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                maxWidth: "640px",
              }}
            >
              <h3
                style={{
                  fontSize: "clamp(22px, 3vw, 28px)",
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                {prop.title}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "var(--color-muted)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            height: "0.5px",
            backgroundColor: "var(--color-border)",
          }}
        />
      </div>

      {/* Who it's for */}
      <section
        style={{
          padding: "100px 24px",
          maxWidth: "960px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 3.5vw, 40px)",
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            marginBottom: "16px",
          }}
        >
          Built for teams running web automation at scale
        </h2>
        <p
          style={{
            color: "var(--color-muted)",
            fontSize: "16px",
            maxWidth: "560px",
            margin: "0 auto 48px",
            fontFamily: "var(--font-sans)",
            lineHeight: 1.7,
          }}
        >
          If you&apos;re stitching together VPS instances, proxy pools, and
          browser automation by hand, you already know the pain. Truman replaces
          that entire stack.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
            textAlign: "left",
          }}
        >
          {[
            {
              heading: "Social media ops",
              text: "Manage hundreds of accounts across platforms without sharing browser fingerprints.",
            },
            {
              heading: "Data collection",
              text: "Scrape at scale with rotating proxies and AI-powered extraction. No more broken selectors.",
            },
            {
              heading: "Competitive monitoring",
              text: "Track pricing, inventory, and content changes across competitor sites automatically.",
            },
          ].map((item) => (
            <div
              key={item.heading}
              style={{
                padding: "32px",
                backgroundColor: "var(--color-surface)",
                borderRadius: "12px",
                border: "0.5px solid var(--color-border)",
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  fontFamily: "var(--font-sans)",
                  marginBottom: "8px",
                  color: "var(--color-foreground)",
                }}
              >
                {item.heading}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--color-muted)",
                  fontFamily: "var(--font-sans)",
                  lineHeight: 1.6,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            height: "0.5px",
            backgroundColor: "var(--color-border)",
          }}
        />
      </div>

      {/* Pricing */}
      <section
        style={{
          padding: "100px 24px",
          maxWidth: "960px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 3.5vw, 40px)",
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            marginBottom: "16px",
          }}
        >
          Simple pricing
        </h2>
        <p
          style={{
            color: "var(--color-muted)",
            fontSize: "16px",
            maxWidth: "460px",
            margin: "0 auto 48px",
            fontFamily: "var(--font-sans)",
          }}
        >
          Start free. Scale when you&apos;re ready.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
            textAlign: "left",
          }}
        >
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              style={{
                padding: "36px 32px",
                backgroundColor: tier.highlighted
                  ? "var(--color-foreground)"
                  : "var(--color-surface)",
                borderRadius: "12px",
                border: tier.highlighted
                  ? "0.5px solid var(--color-foreground)"
                  : "0.5px solid var(--color-border)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  fontFamily: "var(--font-mono)",
                  color: tier.highlighted
                    ? "rgba(255,255,255,0.6)"
                    : "var(--color-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "12px",
                }}
              >
                {tier.name}
              </p>
              <p
                style={{
                  fontSize: "36px",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 400,
                  color: tier.highlighted
                    ? "#ffffff"
                    : "var(--color-foreground)",
                  marginBottom: "4px",
                  lineHeight: 1,
                }}
              >
                {tier.price}
                <span
                  style={{
                    fontSize: "14px",
                    color: tier.highlighted
                      ? "rgba(255,255,255,0.5)"
                      : "var(--color-muted)",
                  }}
                >
                  {tier.period}
                </span>
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "24px 0 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  flex: 1,
                }}
              >
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    style={{
                      fontSize: "14px",
                      fontFamily: "var(--font-sans)",
                      color: tier.highlighted
                        ? "rgba(255,255,255,0.8)"
                        : "var(--color-muted)",
                    }}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#top"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "12px 24px",
                  fontSize: "14px",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  backgroundColor: tier.highlighted
                    ? "#ffffff"
                    : "var(--color-foreground)",
                  color: tier.highlighted
                    ? "var(--color-foreground)"
                    : "#ffffff",
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "opacity 150ms ease",
                }}
              >
                Join Waitlist
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          padding: "100px 24px",
          textAlign: "center",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            height: "0.5px",
            backgroundColor: "var(--color-border)",
            marginBottom: "100px",
          }}
        />
        <h2
          style={{
            fontSize: "clamp(28px, 3.5vw, 40px)",
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            marginBottom: "16px",
          }}
        >
          Stop managing infrastructure.
          <br />
          Start shipping automations.
        </h2>
        <p
          style={{
            color: "var(--color-muted)",
            fontSize: "16px",
            maxWidth: "480px",
            margin: "0 auto 48px",
            fontFamily: "var(--font-sans)",
          }}
        >
          Free trial with 3 browser instances. No credit card required.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "48px 24px",
          textAlign: "center",
          borderTop: "0.5px solid var(--color-border)",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            color: "var(--color-muted)",
            fontFamily: "var(--font-sans)",
          }}
        >
          Built with Boring Combinator
        </p>
      </footer>
    </main>
  );
}
