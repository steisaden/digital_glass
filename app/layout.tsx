import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "../public/fonts/inter-latin-variable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const geist = localFont({
  src: "../public/fonts/geist-latin-variable.woff2",
  variable: "--font-geist",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Stephen.Tech | Design, Development & Automation",
  description:
    "A hybrid studio portfolio for distinct websites, AI follow-up systems, and custom automation.",
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
        {children}
      </body>
    </html>
  );
}
