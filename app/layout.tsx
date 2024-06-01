import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import PolygonPageWrapper from "@/components/PolygonsPageWrapper";
import axios, { AxiosResponse } from "axios";

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

// TYPES FROM BACKEND

const getHeadings = async () => {
  const res = await axios.get("http://localhost:8000/api/get_values/");
  return res.data;
};

const getData = async (headings: string[]) => {
  const headingsFiltered = headings.filter((heading) => {
    if (
      heading != "Выполняемые функции" &&
      heading != "Должность за кем закреплен ТС" &&
      heading != "Данные путевых листов, пробег" &&
      heading != "Данные телематики, пробег" &&
      heading != "Штрафы" &&
      heading != "манера вождения"
    )
      return true;
    return false;
  });

  const promises = headingsFiltered.map((heading) => {
    return axios.get("http://localhost:8000/api/get_values/?name=" + heading);
  });
  const res = await Promise.all(promises);
  return res;
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const headings = await getHeadings();
  const data = await getData(headings);
  // console.log("1", headings);

  return (
    <html lang="ru" className="w-full h-full">
      <body className={inter.className + " w-full h-full"}>
        <PolygonPageWrapper data={data}>
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
