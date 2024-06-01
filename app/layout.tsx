import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Эффективность парков транспортных средств",
  description: "",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ru" className="w-full h-full">
      <body className={inter.className + " w-full h-full"}>
        <Navbar />
        <div className="pt-8 px-20">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
