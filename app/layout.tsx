import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Digital Asset Portfolio",
  description: "A luxury digital sales center.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geist.variable} font-sans antialiased bg-slate-950 text-white`}
      >
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
