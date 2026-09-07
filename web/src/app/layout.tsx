import type { Metadata } from "next";
import { Homemade_Apple, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import Header from "./Header";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrument = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
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
    <html lang="en" className={`${plexMono.variable} ${instrument.variable} ${hand.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
