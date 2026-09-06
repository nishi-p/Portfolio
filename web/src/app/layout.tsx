import type { Metadata } from "next";
import { Geist, Geist_Mono, Homemade_Apple, Playfair_Display } from "next/font/google";
import Header from "./Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const hand = Homemade_Apple({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Nishi",
  description: "Nishi Parameshwara's Portfolio and Blog",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${hand.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
