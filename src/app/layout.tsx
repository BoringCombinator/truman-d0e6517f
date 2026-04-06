import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Truman — One API call. Full browser automation stack.",
  description:
    "Isolated browser environments with built-in proxies, AI models, and scheduling. Stop babysitting Docker containers.",
  openGraph: {
    title: "Truman — One API call. Full browser automation stack.",
    description:
      "Isolated browser environments with built-in proxies, AI models, and scheduling. Stop babysitting Docker containers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="noise">{children}</body>
    </html>
  );
}
