import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Truman — Browser Automation With Proxies, AI, and Scheduling Built In",
  description:
    "One API call gives you isolated Chrome instances, residential proxies, and multi-provider LLM access. No more stitching together VPS setups by hand. Start free with 3 browser instances.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}