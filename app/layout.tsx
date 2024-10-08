import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
const LexendDeca = Lexend_Deca({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "3 Columns Preview Card Component | Coding With Mr.M",
  description: "Built by Coding With Mr.M",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={LexendDeca.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
