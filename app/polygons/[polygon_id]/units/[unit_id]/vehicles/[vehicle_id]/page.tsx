"use client";

import { DataContext } from "@/components/PolygonsPageWrapper";
import { useContext } from "react";

const VehiclePage = ({
  params,
}: {
  params: { polygon_id: string; unit_id: string; vehicle_id: string };
}) => {
  const data = useContext(DataContext);
  const polygon = data.polygonsList.filter(
    (polygon) => polygon.polygon_id == Number(params.polygon_id)
  )[0];
  const unit = polygon.units.filter(
    (unit) => unit.unit_id == Number(params.unit_id)
  )[0];
  const vehicle = unit.vehicles.filter(
    (vehicle) => vehicle.vehicle_id == Number(params.vehicle_id)
  )[0];

  return (
    <div>
      <h6>{vehicle.name}</h6>
      <p>{vehicle.metrics}</p>
    </div>
  );
};

export default VehiclePage;
