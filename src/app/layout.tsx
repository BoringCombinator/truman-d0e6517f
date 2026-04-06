import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Truman — Full browser automation stack, one API call",
  description:
    "Isolated browser environments with built-in proxies, AI models, and scheduling. Stop managing infrastructure. Start shipping. Free trial, no credit card required.",
  openGraph: {
    title: "Truman — Full browser automation stack, one API call",
    description:
      "Isolated browser environments with built-in proxies, AI models, and scheduling. Stop managing infrastructure. Start shipping.",
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