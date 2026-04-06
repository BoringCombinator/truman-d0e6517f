"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

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
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 bg-[#1A1A2E] text-white rounded-xl px-5 py-4">
        <span className="text-[#E8C547] text-xl">✓</span>
        <div>
          <p className="font-bold text-sm">You're on the list.</p>
          <p className="text-white/50 text-xs mt-0.5">
            We'll reach out when your access is ready.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          disabled={status === "loading"}
          className="flex-1 bg-white border border-[#1A1A2E]/15 text-[#1A1A2E] placeholder-[#1A1A2E]/35 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#E8C547] focus:ring-2 focus:ring-[#E8C547]/30 transition-all disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading" || !email}
          className="bg-[#E8C547] text-[#1A1A2E] font-bold text-sm px-5 py-3 rounded-xl hover:brightness-95 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
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
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              Joining...
            </span>
          ) : (
            "Start building free →"
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="text-red-500 text-xs mt-2 font-medium">{errorMessage}</p>
      )}
    </form>
  );
}