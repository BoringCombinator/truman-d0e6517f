"use client";

import { useState } from "react";

interface WaitlistFormProps {
  inverted?: boolean;
}

export default function WaitlistForm({ inverted = false }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

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
        className={`rounded-2xl px-6 py-5 text-center border ${
          inverted
            ? "bg-white/10 border-white/20"
            : "bg-[#1A1A2E]/5 border-[#1A1A2E]/10"
        }`}
      >
        <div className="text-2xl mb-2">🎉</div>
        <p
          className={`font-bold text-base ${
            inverted ? "text-white" : "text-[#1A1A2E]"
          }`}
        >
          You&apos;re on the list.
        </p>
        <p
          className={`text-sm mt-1 ${
            inverted ? "text-white/60" : "text-[#1A1A2E]/60"
          }`}
        >
          We&apos;ll reach out when your access is ready.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className={`flex-1 rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all border focus:ring-2 disabled:opacity-60 ${
            inverted
              ? "bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:ring-[#E05C2A]/50 focus:border-[#E05C2A]/60"
              : "bg-white border-[#1A1A2E]/15 text-[#1A1A2E] placeholder:text-[#1A1A2E]/40 focus:ring-[#E05C2A]/30 focus:border-[#E05C2A]/50"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading" || !email}
          className="bg-[#E05C2A] text-white font-bold text-sm px-6 py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
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
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
              Joining…
            </span>
          ) : (
            "Start building free"
          )}
        </button>
      </div>

      {status === "error" && (
        <p className={`text-sm mt-2 ${inverted ? "text-red-300" : "text-red-600"}`}>
          {errorMsg}
        </p>
      )}
    </form>
  );
}