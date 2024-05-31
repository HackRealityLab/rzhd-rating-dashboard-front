import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import PolygonPageWrapper from "@/components/PolygonsPageWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Эффективность парков транспортных средств",
  description: "",
};

type Vehicle = {
  vehicle_id: number;
  name: string;
  metrics: string;
};

type Unit = {
  unit_id: number;
  name: string;
  metrics: string;
  vehicles: Vehicle[];
};

type Polygon = {
  polygon_id: number;
  name: string;
  metrics: string;
  units: Unit[];
};

export type PolygonsList = Polygon[];

export type Data = {
  polygonsMetrics: string;
  polygonsList: PolygonsList;
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ru" className="w-full h-full">
      <body className={inter.className + " w-full h-full"}>
        <PolygonPageWrapper>
          <div className="bg-teal-500 h-20 flex items-center pl-5 *:p-2 text-white">
            <Link href="/">Главная</Link>
            <Link href="/polygons">Все полигоны</Link>
          </div>
          {children}
        </PolygonPageWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
