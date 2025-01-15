import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AnimatedTabsHover } from "@/components/ui/AnimatedTabsHover";
import Footer from "@/components/GlobalComponents/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-400 bg-black`}
      >
        <AnimatedTabsHover />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
