"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("https://boringcombinator.com/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: "truman-d0e6517f", email }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "16px 24px",
          background: "rgba(0, 212, 170, 0.08)",
          border: "1px solid rgba(0, 212, 170, 0.3)",
          borderRadius: "8px",
          fontFamily: "var(--font-mono)",
          fontSize: "0.85rem",
          color: "var(--accent)",
        }}
      >
        <span className="status-dot" />
        <span>You&apos;re in. We&apos;ll be in touch soon.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            style={{
              flex: "1 1 220px",
              padding: "12px 16px",
              background: "var(--bg-3)",
              border: "1px solid var(--border-2)",
              borderRadius: "6px",
              color: "var(--text)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              outline: "none",
              transition: "border-color 0.2s, box-shadow 0.2s",
              minWidth: "0",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "var(--accent)";
              e.target.style.boxShadow = "0 0 0 3px var(--accent-glow)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "var(--border-2)";
              e.target.style.boxShadow = "none";
            }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              padding: "12px 24px",
              background: status === "loading" ? "var(--accent-dim)" : "var(--accent)",
              border: "none",
              borderRadius: "6px",
              color: "#07080c",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "0.9rem",
              cursor: status === "loading" ? "wait" : "pointer",
              whiteSpace: "nowrap",
              transition: "background 0.2s, transform 0.15s",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => {
              if (status !== "loading") {
                (e.target as HTMLButtonElement).style.transform = "translateY(-1px)";
              }
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.transform = "translateY(0)";
            }}
          >
            {status === "loading" ? "Joining..." : "Start building free"}
          </button>
        </div>

        {status === "error" && (
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "var(--red)",
            }}
          >
            {errorMsg}
          </p>
        )}

        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--text-muted)",
          }}
        >
          Free trial includes 3 browser instances. No credit card required.
        </p>
      </div>
    </form>
  );
}
