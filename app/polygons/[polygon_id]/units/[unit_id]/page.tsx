"use client";

import { getUnitInfo } from "@/utils/apiHandler";
import Link from "next/link";
import { useEffect, useState } from "react";

const UnitPage = ({
  params,
}: {
  params: { polygon_id: string; unit_id: string };
}) => {
  const [unit, setUnit] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const polygonObject = await getUnitInfo(params.unit_id);
      console.log("unit found: ", polygonObject.data);
      setUnit(polygonObject.data);
    })();
  }, [params.unit_id]);

  if (unit == null) return <div>Загрузка данных по подразделению...</div>;

  return (
    <div>
      <h6>{unit["Название подразделения"]}</h6>
      <p>Соотношение ТС: {unit["Соотношение ТС"]}</p>
      <p>Соотношение пробега: {unit["Соотношение пробега"]}</p>
      <p>Средняя манера вождения: {unit["Средняя манера вождения"]}</p>
      <p>Сумма штрафов: {unit["Сумма штрафов"]}</p>
      <p>
        Топ-3 часто используемых ТС:{" "}
        {unit["Топ-3 часто используемых ТС"].map((vehicle: any) => (
          <div key={vehicle}>{vehicle}</div>
        ))}
      </p>
      <p>
        Топ-3 редко используемых ТС:{" "}
        {unit["Топ-3 редко используемых ТС"].map((vehicle: any) => (
          <div key={vehicle}>{vehicle}</div>
        ))}
      </p>

      <strong>Список транспортных средств:</strong>
      {unit["Топ-3 часто используемых ТС"].map((vehicle: any) => (
        <div key={vehicle.vehicle_id}>
          <Link
            href={
              "/polygons/" +
              params.polygon_id +
              "/units/" +
              params.unit_id +
              "/vehicles/" +
              vehicle
            }
          >
            {vehicle}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UnitPage;
