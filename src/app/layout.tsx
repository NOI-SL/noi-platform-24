import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logo from "../../public/goldlogoonly.png";
import { NextAuthProvider } from './providers'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NOI 25 | National Olympiad in Informatics 25 ",
  description: "The official website of the National Olympiad in Informatics Sri Lanka 2025",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={logo.src} />
      </head>
      <body className={inter.className}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
