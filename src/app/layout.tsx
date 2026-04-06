import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Truman — Browser Automation Without the Infrastructure Nightmare",
  description:
    "Truman gives AI developers one API to run isolated browser environments with built-in proxies, LLM routing, and scheduling. No VPS stitching. No container babysitting. Start free.",
  openGraph: {
    title: "Truman — Browser Automation Without the Infrastructure Nightmare",
    description:
      "Truman gives AI developers one API to run isolated browser environments with built-in proxies, LLM routing, and scheduling. No VPS stitching. No container babysitting. Start free.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}