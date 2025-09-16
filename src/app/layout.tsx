import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AntdStyledComponentsRegistry from "./components/antd";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AppContextProvider } from "./context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lifthouse",
  description: "A workout tracker for the modern lifter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {
          <AppContextProvider>
            <AntdStyledComponentsRegistry>
              {children}
              <Analytics />
              <SpeedInsights />
            </AntdStyledComponentsRegistry>
          </AppContextProvider>
        }
      </body>
    </html>
  );
}
