import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khanittha Hemngern — A Personal Design Journal",
  description: "Engineering, design, business and technology. An editorial portfolio shaped by curiosity.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
