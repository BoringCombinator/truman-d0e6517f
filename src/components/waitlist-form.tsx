"use client";

import { useState } from "react";

interface WaitlistFormProps {
  variant?: "dark" | "light";
}

export default function WaitlistForm({ variant = "dark" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isLight = variant === "light";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    setErrorMessage("");

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
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`flex items-center gap-3 px-5 py-4 rounded-2xl border ${
          isLight
            ? "bg-white/20 border-white/30 text-white"
            : "bg-green-50 border-green-200 text-green-800"
        }`}
      >
        <span className="text-xl">🎉</span>
        <div>
          <p className="font-bold text-sm">You're on the list!</p>
          <p className={`text-xs mt-0.5 ${isLight ? "text-white/70" : "text-green-600"}`}>
            We'll reach out when your free instances are ready.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="your@email.com"
          className={`flex-1 px-5 py-3.5 rounded-full text-sm font-medium outline-none transition-all border-2 ${
            isLight
              ? "bg-white text-[#1A1A2E] placeholder-[#1A1A2E]/40 border-transparent focus:border-white"
              : "bg-white text-[#1A1A2E] placeholder-[#1A1A2E]/40 border-transparent focus:border-[#E85A2F]"
          } ${status === "error" ? "border-red-400" : ""}`}
        />
        <button
          type="submit"
          disabled={status === "loading" || !email}
          className={`px-6 py-3.5 rounded-full text-sm font-bold transition-all whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed ${
            isLight
              ? "bg-[#1A1A2E] text-white hover:bg-[#2a2a3e]"
              : "bg-[#E85A2F] text-white hover:bg-[#d04e26]"
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
              Joining…
            </span>
          ) : (
            "Start building free"
          )}
        </button>
      </div>

      {status === "error" && (
        <p className={`text-xs mt-2.5 font-medium ${isLight ? "text-white/80" : "text-red-500"}`}>
          ⚠ {errorMessage}
        </p>
      )}
    </form>
  );
}