"use client";

import { getVehicleInfo } from "@/utils/apiHandler";
import { useEffect, useState } from "react";

const VehiclePage = ({
  params,
}: {
  params: { polygon_id: string; unit_id: string; vehicle_id: string };
}) => {
  const [vehicle, setVehicle] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const vehicleObject = await getVehicleInfo(params.vehicle_id);
      setVehicle(vehicleObject.data);
    })();
  }, [params.vehicle_id]);

  console.log("@vehicle page", vehicle);

  if (vehicle == null) return <div>Загрузка данных по подразделению...</div>;

  return (
    <div>
      <h6>Номерной знак ТС: {vehicle["Номерной знак ТС"]}</h6>
      <p>Средняя манера вождения: {vehicle["Средняя манера вождения"]}</p>
      <p>Сложный коэффициент: {vehicle["Сложный коэффициент"]}</p>
      <p>Суммарный пробег: {vehicle["Суммарный пробег"]}</p>
      <p>Убитость: {vehicle["Убитость"]}</p>
      <p>Частота использования: {vehicle["Частота использования"]}</p>
    </div>
  );
};

export default VehiclePage;
