import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter-font", // This defines a CSS variable
});

import "./globals.css";

export const metadata: Metadata = {
  title: "Airbon",
  description: "Regenerative agriculture to rebalance our planet.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.variable}
        style={{ fontFeatureSettings: "'ss01' 1" }}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
