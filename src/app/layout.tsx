import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Truman — Browser Automation Without the Infrastructure Headache",
  description:
    "One API call gives you isolated Chrome instances, residential proxies, multi-provider AI, and scheduling. Stop managing the stack. Start shipping.",
  openGraph: {
    title: "Truman — Browser Automation Without the Infrastructure Headache",
    description:
      "One API call gives you isolated Chrome instances, residential proxies, multi-provider AI, and scheduling. Stop managing the stack. Start shipping.",
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