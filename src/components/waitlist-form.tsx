"use client";

import { useState } from "react";

export default function WaitlistForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
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

      if (!res.ok) throw new Error("Something went wrong");

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Try again.");
    }
  }

  if (status === "success") {
    return (
      <div className={`flex items-center gap-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 px-5 py-4 ${className ?? ""}`}>
        <svg className="w-5 h-5 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <p className="text-indigo-300 font-medium text-sm">
          You&apos;re on the list. We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className ?? ""}`}>
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
        className="flex-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:opacity-50 transition"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="shrink-0 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 px-6 py-3 text-sm font-semibold text-white transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-950 cursor-pointer"
      >
        {status === "loading" ? "Sending..." : "Start building free"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-xs mt-1 sm:col-span-2">{errorMessage}</p>
      )}
    </form>
  );
}
