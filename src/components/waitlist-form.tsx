"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch(
        "https://boringcombinator.com/api/waitlist",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            slug: "truman-d0e6517f",
            email,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Something went wrong. Try again.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "24px 0",
        }}
      >
        <p
          style={{
            fontSize: "16px",
            color: "var(--color-foreground)",
            fontFamily: "var(--font-sans)",
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
      style={{
        display: "flex",
        gap: "12px",
        maxWidth: "440px",
        width: "100%",
      }}
    >
      <input
        type="email"
        required
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          flex: 1,
          padding: "12px 16px",
          fontSize: "14px",
          fontFamily: "var(--font-sans)",
          border: "0.5px solid var(--color-border)",
          borderRadius: "8px",
          backgroundColor: "var(--color-background)",
          color: "var(--color-foreground)",
          outline: "none",
          transition: "border-color 150ms ease",
        }}
        onFocus={(e) =>
          (e.currentTarget.style.borderColor = "rgba(0,0,0,0.24)")
        }
        onBlur={(e) =>
          (e.currentTarget.style.borderColor = "var(--color-border)")
        }
      />
      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          padding: "12px 24px",
          fontSize: "14px",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          backgroundColor: "var(--color-foreground)",
          color: "var(--color-background)",
          border: "none",
          borderRadius: "8px",
          cursor: status === "loading" ? "wait" : "pointer",
          transition: "opacity 150ms ease",
          whiteSpace: "nowrap",
          opacity: status === "loading" ? 0.7 : 1,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.opacity = status === "loading" ? "0.7" : "1")
        }
      >
        {status === "loading" ? "Joining..." : "Join Waitlist"}
      </button>
      {status === "error" && (
        <p
          style={{
            position: "absolute",
            marginTop: "52px",
            fontSize: "13px",
            color: "#c0392b",
            fontFamily: "var(--font-sans)",
          }}
        >
          {errorMessage}
        </p>
      )}
    </form>
  );
}
