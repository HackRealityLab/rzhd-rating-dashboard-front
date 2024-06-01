"use client";

import { DataContext } from "@/app/DataContext";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export const getPolygonInfo = async (name: string) => {
  const polygonInfo = await axios.get(
    "http://localhost:8888/api/get_polygon_info?name=" + name
  );
  return polygonInfo;
};

const PolygonPage = ({ params }: { params: { polygon_id: string } }) => {
  const [polygon, setPolygon] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const polygonObject = await getPolygonInfo(params.polygon_id);
      setPolygon(polygonObject.data);
    })();
  }, [params.polygon_id]);

  if (polygon == null) return <div>Загрузка данных по полигону...</div>;
  return (
    <div>
      Метрики по одному полигону
      <h5>{polygon["Название полигона"]}</h5>
      <p>Сумма штрафов: {polygon["Сумма штрафов"]}</p>
      <p>Общий пробег: {polygon["Общий пробег"]}</p>
      <p>Рейтинг подразделений по количеству штрафов: *тут график*</p>
      <p>Рейтинг подразделений по количесту пробега: *тут график*</p>
      <div className="flex flex-col">
        <strong>Список подразделений:</strong>
        {Object.keys(
          polygon["Рейтинг подразделений по количеству пробега"]
        ).map((unit: any) => (
          <Link
            key={unit}
            href={
              "/polygons/" +
              params.polygon_id +
              "/units/" +
              encodeURI(unit).replace("#", "%23")
            }
          >
            {unit}
          </Link>
          // <div key={el}>@ {el}</div>
        ))}
      </div>
    </div>
  );
};

export default PolygonPage;
