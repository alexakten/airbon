import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"]});

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
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
