"use client";

import { DataContext } from "@/components/PolygonsPageWrapper";
import Link from "next/link";
import { useContext } from "react";

const PolygonsPage = () => {
  const data = useContext(DataContext);
  if (data == null) return <div>Данные не найдены!</div>;
  return (
    <div>
      <p>{data.polygonsMetrics}</p>
      <div className="flex flex-col">
        <strong>Список полигонов:</strong>
        {data.polygonsList.map((polygon: any) => (
          <Link href={"/polygons/" + polygon.polygon_id} key={polygon.name}>
            {polygon.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PolygonsPage;
