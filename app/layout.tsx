import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "@next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Add the necessary weights
  variable: "--font-poppins",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // Add the necessary weights
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "OTM Designs",
  description: "fashion website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfairDisplay.variable}`}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
