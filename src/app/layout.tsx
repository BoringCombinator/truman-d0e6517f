import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Truman — Full Browser Automation Stack, One API Call",
  description:
    "Truman bundles browsers, proxies, AI models, scheduling, and file management into one isolated environment per user. Spin it up with a single API call. Free trial, no credit card required.",
  openGraph: {
    title: "Truman — Full Browser Automation Stack, One API Call",
    description:
      "Truman bundles browsers, proxies, AI models, scheduling, and file management into one isolated environment per user. Spin it up with a single API call.",
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