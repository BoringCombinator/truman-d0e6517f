import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Truman — Browser Automation Infrastructure, All in One API",
  description:
    "Truman bundles isolated browsers, residential proxies, multi-provider AI routing, and scheduling into a single API call. Cut infra costs, kill manual ops work, and ship faster.",
  openGraph: {
    title: "Truman — Browser Automation Infrastructure, All in One API",
    description:
      "Truman bundles isolated browsers, residential proxies, multi-provider AI routing, and scheduling into a single API call.",
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