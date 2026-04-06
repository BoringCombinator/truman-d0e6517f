"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
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

      if (!res.ok) throw new Error("Something went wrong. Try again.");

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white/10 border border-white/20 rounded-2xl px-8 py-10 text-center">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="text-xl font-bold text-white mb-2">You&apos;re on the list</h3>
        <p className="text-white/60 text-sm">
          We&apos;ll reach out with early access. Get ready to stop babysitting containers.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/30 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#E85C2F] focus:ring-2 focus:ring-[#E85C2F]/20 transition-all disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading" || !email}
          className="bg-[#E85C2F] hover:bg-[#d04f25] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors whitespace-nowrap cursor-pointer"
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2 justify-center">
              <svg
                className="animate-spin h-4 w-4"
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
              Joining...
            </span>
          ) : (
            "Start building free"
          )}
        </button>
      </div>

      {status === "error" && (
        <p className="mt-3 text-sm text-red-400 text-center">{errorMsg}</p>
      )}

      <p className="mt-4 text-white/30 text-xs text-center">
        No credit card. No spam. Unsubscribe any time.
      </p>
    </form>
  );
}