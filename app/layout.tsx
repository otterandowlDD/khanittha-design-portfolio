import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "An Eye for Beautiful Things. — Khanittha Hemngern",
  description: "A personal editorial journal about interiors, fashion, atmosphere, objects, craftsmanship, places and culture. The beauty is in noticing.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
