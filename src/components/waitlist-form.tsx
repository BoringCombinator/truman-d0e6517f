"use client";

import { useState, FormEvent } from "react";

interface WaitlistFormProps {
  dark?: boolean;
}

export default function WaitlistForm({ dark = false }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
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
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`flex items-center gap-3 rounded-xl border px-6 py-5 ${
          dark
            ? "border-white/10 bg-white/5 text-white"
            : "border-[#E8500A]/20 bg-[#E8500A]/5 text-[#1A1A2E]"
        }`}
      >
        <span className="text-2xl">🎉</span>
        <div>
          <p className="font-black">You&apos;re on the list!</p>
          <p className={`text-sm ${dark ? "text-white/50" : "text-[#1A1A2E]/50"}`}>
            We&apos;ll be in touch when your access is ready.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={`flex flex-col gap-2 sm:flex-row ${
          dark ? "" : ""
        }`}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="you@company.com"
          disabled={status === "loading"}
          className={`flex-1 rounded-xl border px-4 py-3 text-sm font-medium outline-none transition placeholder:font-normal focus:ring-2 focus:ring-[#E8500A]/40 disabled:opacity-50 ${
            dark
              ? "border-white/10 bg-white/10 text-white placeholder:text-white/30 focus:border-[#E8500A]/50"
              : "border-[#1A1A2E]/15 bg-white text-[#1A1A2E] placeholder:text-[#1A1A2E]/30 focus:border-[#E8500A]/40"
          } ${status === "error" ? "border-red-400" : ""}`}
        />
        <button
          type="submit"
          disabled={status === "loading" || !email}
          className="shrink-0 rounded-xl bg-[#E8500A] px-6 py-3 text-sm font-black text-white transition hover:bg-[#c94208] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <svg
                className="h-4 w-4 animate-spin"
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
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
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
        <p className="mt-2 text-xs font-semibold text-red-500">{errorMsg}</p>
      )}
    </form>
  );
}