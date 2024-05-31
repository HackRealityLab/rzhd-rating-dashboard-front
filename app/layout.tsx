import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Эффективность парков транспортных средств",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-teal-500 h-20 flex items-center pl-5 *:p-2">
          <Link href="/">to page1</Link>
          <Link href="/page2">to page2</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
