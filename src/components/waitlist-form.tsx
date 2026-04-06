"use client";

import { useState } from "react";

interface WaitlistFormProps {
  theme?: "dark" | "light";
}

export default function WaitlistForm({ theme = "dark" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isLight = theme === "light";

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
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || "Something went wrong. Try again.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`rounded-xl px-6 py-5 flex items-start gap-3 ${
          isLight
            ? "bg-white/20 border border-white/30"
            : "bg-[#1A1A2E]/5 border border-[#1A1A2E]/15"
        }`}
      >
        <span className="text-2xl mt-0.5">🎉</span>
        <div>
          <p className={`font-bold text-sm ${isLight ? "text-white" : "text-[#1A1A2E]"}`}>
            You're on the list!
          </p>
          <p className={`text-sm mt-0.5 ${isLight ? "text-white/70" : "text-[#1A1A2E]/60"}`}>
            We'll reach out as soon as your spot is ready.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <div className="flex-1">
        <input
          type="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          className={`w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-200 ${
            isLight
              ? "bg-white/20 border border-white/40 text-white placeholder:text-white/50 focus:border-white focus:bg-white/30"
              : "bg-white border border-[#1A1A2E]/15 text-[#1A1A2E] placeholder:text-[#1A1A2E]/35 focus:border-[#E84E2A] focus:ring-2 focus:ring-[#E84E2A]/15"
          }`}
          disabled={status === "loading"}
        />
        {status === "error" && (
          <p className={`text-xs mt-2 ${isLight ? "text-white/80" : "text-[#E84E2A]"}`}>
            {errorMsg}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading" || !email}
        className={`shrink-0 rounded-xl px-6 py-3.5 text-sm font-bold transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${
          isLight
            ? "bg-white text-[#E84E2A] hover:bg-[#F5F2EE] active:scale-[0.98]"
            : "bg-[#E84E2A] text-white hover:bg-[#d1421e] active:scale-[0.98]"
        }`}
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
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
    </form>
  );
}