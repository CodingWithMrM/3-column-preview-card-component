import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import { Big_Shoulders_Display } from "next/font/google";
import "./globals.css";

const LexendDeca = Lexend_Deca({ subsets: ["latin"] });
export const BigShouldersDisplayFont = Big_Shoulders_Display({ subsets: ["latin"] });


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
      <body className={LexendDeca.className}>{children}</body>
    </html>
  );
}
