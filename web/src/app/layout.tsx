import type { Metadata } from "next";
import { Geist, Geist_Mono, Homemade_Apple, Newsreader } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} ${hand.variable}`}>
      <body>
        <header>
          <a href="/">NISHI PARAMESHWARA</a>
          <nav>
            <a href="/">HOME</a>
            <a href="/#work">WORK</a>
            <a href="/#about">ABOUT</a>
          </nav>
          <p className="header-index">01</p>
        </header>
        {children}
      </body>
    </html>
  );
}
