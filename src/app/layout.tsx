import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Truman — Full browser automation stack in one API call",
  description:
    "Isolated browser environments with built-in proxies, AI models, and scheduling. Stop babysitting Docker containers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
