import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./shared/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIRBNB CLONE",
  description: "AIRBNB Tickets System Manageing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
