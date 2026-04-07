import WaitlistForm from "@/components/waitlist-form";

export default function Home() {
  return (
    <main>
      {/* Nav */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 32px",
          maxWidth: "1120px",
          margin: "0 auto",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "20px",
            fontWeight: 700,
            color: "var(--color-fg)",
            letterSpacing: "-0.01em",
          }}
        >
          Truman
        </span>
        <a href="#waitlist" className="btn-primary" style={{ padding: "8px 20px", fontSize: "13px" }}>
          Join Waitlist
        </a>
      </nav>

      {/* Hero */}
      <section
        style={{
          padding: "100px 32px 120px",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 400,
            lineHeight: 1.15,
            color: "var(--color-fg)",
            margin: "0 0 24px",
            letterSpacing: "-0.02em",
          }}
        >
          One API call.
          <br />
          Full browser automation stack.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "18px",
            lineHeight: 1.65,
            color: "var(--color-muted)",
            maxWidth: "580px",
            margin: "0 auto 48px",
          }}
        >
          Isolated browser environments with built-in proxies, AI models, and
          scheduling. Stop babysitting Docker containers and stitching
          infrastructure together by hand.
        </p>
        <WaitlistForm
          className="hero-form"
        />
        <style>{`
          .hero-form {
            display: flex;
            justify-content: center;
            max-width: 480px;
            margin: 0 auto;
          }
          @media (max-width: 520px) {
            .hero-form {
              flex-direction: column;
            }
          }
        `}</style>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          borderTop: "0.5px solid var(--color-border)",
        }}
      />

      {/* What you get */}
      <section
        style={{
          padding: "100px 32px",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(28px, 3.5vw, 36px)",
            fontWeight: 400,
            color: "var(--color-fg)",
            margin: "0 0 16px",
            letterSpacing: "-0.015em",
          }}
        >
          What you get with one API call
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "16px",
            color: "var(--color-muted)",
            margin: "0 0 56px",
            maxWidth: "560px",
          }}
        >
          Each user gets a fully isolated environment. Browsers, proxies, AI,
          scheduling, and file storage. No assembly required.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "16px",
          }}
        >
          <div className="card">
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                fontWeight: 600,
                margin: "0 0 12px",
                color: "var(--color-fg)",
              }}
            >
              Isolated Chrome instances
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                color: "var(--color-muted)",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              N concurrent browsers per user, each in its own Docker container.
              No crosstalk. No shared state. Spin them up or tear them down
              through the API.
            </p>
          </div>

          <div className="card">
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                fontWeight: 600,
                margin: "0 0 12px",
                color: "var(--color-fg)",
              }}
            >
              Built-in residential proxies
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                color: "var(--color-muted)",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              Rotating residential IPs assigned per environment. No third-party
              proxy dashboard. No credential juggling. It just works.
            </p>
          </div>

          <div className="card">
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                fontWeight: 600,
                margin: "0 0 12px",
                color: "var(--color-fg)",
              }}
            >
              Multi-provider LLM access
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                color: "var(--color-muted)",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              Route tasks to Claude, GPT, or any supported model. Switch
              providers per request without touching config. One endpoint, every
              model.
            </p>
          </div>

          <div className="card">
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                fontWeight: 600,
                margin: "0 0 12px",
                color: "var(--color-fg)",
              }}
            >
              Scheduling and file management
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                color: "var(--color-muted)",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              Cron-style task scheduling and persistent file storage per
              environment. Run workflows on autopilot. Access outputs anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          borderTop: "0.5px solid var(--color-border)",
        }}
      />

      {/* Why this exists */}
      <section
        style={{
          padding: "100px 32px",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(28px, 3.5vw, 36px)",
            fontWeight: 400,
            color: "var(--color-fg)",
            margin: "0 0 16px",
            letterSpacing: "-0.015em",
          }}
        >
          You know the pain
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "16px",
            color: "var(--color-muted)",
            margin: "0 0 56px",
            maxWidth: "560px",
            lineHeight: 1.65,
          }}
        >
          You&apos;re running social media automation, data collection, or competitive
          monitoring. Right now your stack probably looks like this:
        </p>

        <div
          className="comparison-grid"
          style={{
            gap: "0",
            maxWidth: "720px",
          }}
        >
          {/* Before column */}
          <div
            style={{
              padding: "32px",
              borderRight: "0.5px solid var(--color-border)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase" as const,
                letterSpacing: "0.06em",
                color: "var(--color-muted)",
                margin: "0 0 24px",
              }}
            >
              Without Truman
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {[
                "3-4 VPS providers to manage",
                "Separate proxy pool subscription",
                "Multiple LLM API keys and configs",
                "Custom Docker orchestration",
                "3-4 hours/day on ops and debugging",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    color: "var(--color-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After column */}
          <div style={{ padding: "32px" }}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase" as const,
                letterSpacing: "0.06em",
                color: "var(--color-fg)",
                margin: "0 0 24px",
              }}
            >
              With Truman
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {[
                "One API. One bill.",
                "Proxies built in per environment",
                "Switch models per request",
                "Containers managed for you",
                "Back to building, not firefighting",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    color: "var(--color-fg)",
                    lineHeight: 1.5,
                    fontWeight: 500,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          borderTop: "0.5px solid var(--color-border)",
        }}
      />

      {/* How it's different */}
      <section
        style={{
          padding: "100px 32px",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(28px, 3.5vw, 36px)",
            fontWeight: 400,
            color: "var(--color-fg)",
            margin: "0 0 16px",
            letterSpacing: "-0.015em",
          }}
        >
          Not another browser tool
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "16px",
            color: "var(--color-muted)",
            margin: "0 0 56px",
            maxWidth: "600px",
            lineHeight: 1.65,
          }}
        >
          Anti-detect browsers give you profiles. Browserbase gives you headless
          Chrome. Truman gives you the full stack: browsers, proxies, AI,
          scheduling, and file management in one isolated environment per user.
          Nobody else bundles all five.
        </p>

        <div
          className="stats-grid"
          style={{
            gap: "0",
            border: "0.5px solid var(--color-border)",
            borderRadius: "12px",
            overflow: "hidden",
            background: "var(--color-surface)",
          }}
        >
          {[
            {
              stat: "50%+",
              label: "lower infra cost vs. self-managed setups",
            },
            {
              stat: "3-4 hrs",
              label: "of daily ops work eliminated",
            },
            {
              stat: "1",
              label: "API to replace your entire automation stack",
            },
          ].map((item, i) => (
            <div
              key={item.stat}
              className="stats-cell"
              style={{
                padding: "40px 32px",
                borderRight:
                  i < 2 ? "0.5px solid var(--color-border)" : "none",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "32px",
                  fontWeight: 400,
                  color: "var(--color-fg)",
                  margin: "0 0 8px",
                  letterSpacing: "-0.02em",
                }}
              >
                {item.stat}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "var(--color-muted)",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {item.label}
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
          borderTop: "0.5px solid var(--color-border)",
        }}
      />

      {/* Pricing */}
      <section
        style={{
          padding: "100px 32px",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(28px, 3.5vw, 36px)",
            fontWeight: 400,
            color: "var(--color-fg)",
            margin: "0 0 16px",
            letterSpacing: "-0.015em",
          }}
        >
          Simple pricing
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "16px",
            color: "var(--color-muted)",
            margin: "0 0 56px",
            maxWidth: "480px",
            lineHeight: 1.65,
          }}
        >
          Start free. Pay when you scale.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
            maxWidth: "640px",
          }}
        >
          <div className="card">
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase" as const,
                letterSpacing: "0.06em",
                color: "var(--color-muted)",
                margin: "0 0 16px",
              }}
            >
              Free trial
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "36px",
                color: "var(--color-fg)",
                margin: "0 0 20px",
              }}
            >
              $0
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {[
                "3 browser instances",
                "1 proxy line",
                "10K LLM tokens",
                "No credit card required",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    color: "var(--color-muted)",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="card"
            style={{
              background: "var(--color-fg)",
              color: "var(--color-bg)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase" as const,
                letterSpacing: "0.06em",
                color: "rgba(255,255,255,0.5)",
                margin: "0 0 16px",
              }}
            >
              Pro
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "36px",
                color: "var(--color-bg)",
                margin: "0 0 4px",
              }}
            >
              $79
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "rgba(255,255,255,0.5)",
                margin: "0 0 20px",
              }}
            >
              per month
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {[
                "20 browser instances",
                "5 proxy lines",
                "100K LLM tokens",
                "Usage-based tiers above",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          borderTop: "0.5px solid var(--color-border)",
        }}
      />

      {/* Final CTA */}
      <section
        id="waitlist"
        style={{
          padding: "100px 32px 120px",
          textAlign: "center",
          maxWidth: "640px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(28px, 3.5vw, 36px)",
            fontWeight: 400,
            color: "var(--color-fg)",
            margin: "0 0 16px",
            letterSpacing: "-0.015em",
          }}
        >
          Ready to stop managing infra?
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "16px",
            color: "var(--color-muted)",
            margin: "0 0 40px",
            lineHeight: 1.65,
          }}
        >
          Get early access. Free trial with 3 browser instances, no credit card.
        </p>
        <WaitlistForm
          className="cta-form"
        />
        <style>{`
          .cta-form {
            display: flex;
            justify-content: center;
            max-width: 480px;
            margin: 0 auto;
          }
          @media (max-width: 520px) {
            .cta-form {
              flex-direction: column;
            }
          }
        `}</style>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "0.5px solid var(--color-border)",
          padding: "32px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "13px",
            color: "var(--color-muted)",
            margin: 0,
          }}
        >
          Built with Boring Combinator
        </p>
      </footer>
    </main>
  );
}
