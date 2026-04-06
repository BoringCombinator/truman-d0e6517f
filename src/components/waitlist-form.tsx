"use client";

import { useState } from "react";

interface WaitlistFormProps {
  cta: string;
  inverted?: boolean;
}

export default function WaitlistForm({ cta, inverted = false }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("https://boringcombinator.com/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: "truman-d0e6517f", email }),
      });

      if (!res.ok) throw new Error("Something went wrong. Please try again.");

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`flex items-center gap-3 rounded-2xl px-6 py-4 font-mono text-sm ${
          inverted
            ? "bg-white/20 text-white border border-white/30"
            : "bg-[#1A1A2E] text-white"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
        You're on the list. We'll be in touch soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={`flex flex-col sm:flex-row gap-3 p-2 rounded-2xl ${
          inverted
            ? "bg-white/20 backdrop-blur-sm border border-white/30"
            : "bg-[#1A1A2E]"
        }`}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          disabled={status === "loading"}
          className={`flex-1 bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:opacity-40 rounded-xl disabled:opacity-50 ${
            inverted ? "text-white placeholder:text-white" : "text-white"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading" || !email}
          className="bg-[#E84E2A] text-white font-black text-sm px-6 py-3 rounded-xl hover:bg-[#d44424] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
              Joining...
            </span>
          ) : (
            cta
          )}
        </button>
      </div>
      {status === "error" && (
        <p className={`mt-3 text-xs font-mono ${inverted ? "text-white/70" : "text-[#E84E2A]"}`}>
          ⚠ {errorMsg}
        </p>
      )}
      <p
        className={`mt-3 text-xs font-mono ${
          inverted ? "text-white/50" : "text-[#1A1A2E]/40"
        }`}
      >
        Free tier included · No credit card required
      </p>
    </form>
  );
}