import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Truman — One API call. Full browser automation stack.",
  description:
    "Isolated browser environments with built-in proxies, AI models, and scheduling. Stop stitching together VPS instances, proxy pools, and automation scripts by hand.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-950 text-gray-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
