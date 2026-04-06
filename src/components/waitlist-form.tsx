"use client";

import { useState } from "react";

interface WaitlistFormProps {
  variant?: "dark" | "light";
}

export default function WaitlistForm({ variant = "dark" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isLight = variant === "light";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("https://boringcombinator.com/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: "truman-d0e6517f", email }),
      });

      if (!res.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

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
        className={`rounded-2xl px-6 py-5 border-2 ${
          isLight
            ? "bg-white/20 border-white/40 text-white"
            : "bg-[#E85C2E]/10 border-[#E85C2E]/30 text-[#1A1A2E]"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
              isLight ? "bg-white/30" : "bg-[#E85C2E]/20"
            }`}
          >
            <svg
              className={`w-4 h-4 ${isLight ? "text-white" : "text-[#E85C2E]"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className={`font-bold text-sm ${isLight ? "text-white" : "text-[#1A1A2E]"}`}>
              You're on the list.
            </p>
            <p className={`text-xs mt-0.5 ${isLight ? "text-white/70" : "text-[#1A1A2E]/50"}`}>
              We'll reach out when early access opens.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={`flex flex-col sm:flex-row gap-3 p-1.5 rounded-2xl border-2 transition-colors ${
          isLight
            ? "bg-white/20 border-white/30 focus-within:border-white/60"
            : "bg-white border-[#1A1A2E]/15 focus-within:border-[#E85C2E]/40"
        }`}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          required
          disabled={status === "loading"}
          className={`flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-sm disabled:opacity-50 ${
            isLight
              ? "text-white placeholder:text-white/50"
              : "text-[#1A1A2E] placeholder:text-[#1A1A2E]/35"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading" || !email}
          className={`shrink-0 px-6 py-3 rounded-xl text-sm font-bold transition-all disabled:opacity-60 disabled:cursor-not-allowed ${
            isLight
              ? "bg-white text-[#E85C2E] hover:bg-white/90 active:scale-95"
              : "bg-[#E85C2E] text-white hover:bg-[#d14e23] active:scale-95"
          }`}
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 animate-spin"
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
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              Joining...
            </span>
          ) : (
            "Start building free"
          )}
        </button>
      </div>

      {status === "error" && (
        <p className={`mt-2 text-xs ${isLight ? "text-white/80" : "text-red-500"}`}>
          {errorMsg}
        </p>
      )}
    </form>
  );
}