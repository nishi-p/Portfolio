import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Homemade_Apple, IBM_Plex_Mono } from "next/font/google";
import Header from "./Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const hand = Homemade_Apple({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Nishi Parameshwara",
  description: "Nishi Parameshwara's Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${plexMono.variable} ${cormorant.variable} ${hand.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
