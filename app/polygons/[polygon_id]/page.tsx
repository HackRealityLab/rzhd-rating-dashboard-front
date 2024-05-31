"use client";

import { DataContext } from "@/components/PolygonsPageWrapper";
import Link from "next/link";
import { useContext } from "react";

const PolygonPage = ({ params }: { params: { polygon_id: string } }) => {
  const data = useContext(DataContext);
  const polygon = data.polygonsList.filter(
    (polygon) => polygon.polygon_id == Number(params.polygon_id)
  )[0];
  return (
    <div>
      Метрики по одному полигону #{params.polygon_id}
      <h5>{polygon.name}</h5>
      <p>{polygon.metrics}</p>
      <div className="flex flex-col">
        <strong>Список подразделений:</strong>
        {polygon.units.map((unit) => (
          <Link
            key={unit.unit_id}
            href={"/polygons/" + params.polygon_id + "/units/" + unit.unit_id}
          >
            {unit.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PolygonPage;
