import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import classnames from "classnames";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Casado, the software dev",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={classnames(inter.className, "bg-gray-900 text-white")}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
