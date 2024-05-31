"use client";

import { DataContext } from "@/components/PolygonsPageWrapper";
import Link from "next/link";
import { useContext } from "react";

const UnitPage = ({
  params,
}: {
  params: { polygon_id: string; unit_id: string };
}) => {
  const data = useContext(DataContext);
  const polygon = data.polygonsList.filter(
    (polygon) => polygon.polygon_id == Number(params.polygon_id)
  )[0];
  const unit = polygon.units.filter(
    (unit) => unit.unit_id == Number(params.unit_id)
  )[0];
  return (
    <div>
      <h6>{unit.name}</h6>
      <div>{unit.metrics}</div>
      <strong>Список транспортных средств:</strong>
      {unit.vehicles.map((vehicle) => (
        <div key={vehicle.vehicle_id}>
          <Link
            href={
              "/polygons/" +
              params.polygon_id +
              "/units/" +
              params.unit_id +
              "/vehicles/" +
              vehicle.vehicle_id
            }
          >
            {vehicle.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UnitPage;
