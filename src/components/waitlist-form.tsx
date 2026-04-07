"use client";

import { useState, type FormEvent } from "react";

export default function WaitlistForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("https://boringcombinator.com/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: "truman-d0e6517f",
          email,
        }),
      });

      if (!res.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  if (status === "success") {
    return (
      <div className={className}>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "18px",
            color: "var(--color-fg)",
          }}
        >
          You&apos;re on the list. We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={className}
      style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        aria-label="Email address"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "14px",
          padding: "12px 16px",
          border: "0.5px solid var(--color-border)",
          borderRadius: "8px",
          background: "var(--color-bg)",
          color: "var(--color-fg)",
          outline: "none",
          minWidth: "260px",
          flex: "1",
          transition: "border-color 150ms ease",
        }}
        onFocus={(e) =>
          (e.currentTarget.style.borderColor = "rgba(0,0,0,0.24)")
        }
        onBlur={(e) =>
          (e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)")
        }
      />
      <button
        type="submit"
        className="btn-primary"
        disabled={status === "loading"}
        style={{ opacity: status === "loading" ? 0.6 : undefined }}
      >
        {status === "loading" ? "Joining..." : "Join Waitlist"}
      </button>
      {status === "error" && (
        <p
          style={{
            width: "100%",
            fontSize: "13px",
            color: "#b91c1c",
            margin: "4px 0 0",
          }}
        >
          {errorMsg}
        </p>
      )}
    </form>
  );
}
