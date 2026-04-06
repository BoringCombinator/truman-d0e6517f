import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Truman — Browser Automation Without the Infrastructure Headache",
  description:
    "Browsers, proxies, AI models, and scheduling in one isolated environment per user. One API call to spin it all up. Try free — no credit card needed.",
  openGraph: {
    title: "Truman — Browser Automation Without the Infrastructure Headache",
    description:
      "Browsers, proxies, AI models, and scheduling in one isolated environment per user. One API call to spin it all up. Try free — no credit card needed.",
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
      <body>{children}</body>
    </html>
  );
}