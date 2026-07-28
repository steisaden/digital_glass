import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Directions | Stephen.Tech",
  description:
    "Four high-fidelity portfolio directions for Stephen.Tech: Orbit, Showreel, Index, and Cabinet.",
};

export default function ConceptsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
