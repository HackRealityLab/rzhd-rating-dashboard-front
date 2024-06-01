"use client";

import { DataContext } from "@/app/DataContext";
import Card from "@/components/Card";
import { declination } from "@/utils/declinationHandler";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import PieChart from "@/components/charts/PieChart";

const getAllPolygons = async () => {
  const polygonInfo = await axios.get(
    "http://localhost:8888/api/get_values?name=Полигон"
  );
  return polygonInfo;
};

const getPolygonInfo = async (name: string) => {
  const polygonInfo = await axios.get(
    "http://localhost:8888/api/get_polygon_info?name=" + name
  );
  return polygonInfo;
};

const getUnitInfo = async (name: string) => {
  const unitInfo = await axios.get(
    "http://localhost:8888/api/get_vehicle_division_info?name=" + name
  );
  return unitInfo;
};

const PolygonsPage = () => {
  // const data = useContext(DataContext);
  // if (data == null) return <div>Данные не найдены!</div>;
  const [polygonsWithInfo, setPolygonsWithInfo] = useState<any>([]);
  const [vehiclesMap, setVehiclesMap] = useState<any>(new Map());
  useEffect(() => {
    (async () => {
      const polygonsObject = await getAllPolygons();

      polygonsObject.data.map(async (polygon: any) => {
        const polygonInfoObject: any = await getPolygonInfo(polygon);
        const polygonInfo = polygonInfoObject.data;
        setVehiclesMap(
          new Map(vehiclesMap.set(polygonInfo["Название полигона"], 0))
        );
        const feeNum = polygonInfo["Сумма штрафов"];
        const mileage = polygonInfo["Общий пробег"];
        const unitsNum = Object.keys(
          polygonInfo["Рейтинг подразделений по количеству штрафов"]
        ).length;
        const resObj = {
          name: polygon,
          feeNum: feeNum,
          mileage: mileage,
          unitsNum: unitsNum,
        };

        const unitsListObject = Object.keys(
          polygonInfo["Рейтинг подразделений по количеству штрафов"]
        );

        unitsListObject.map(async (unitName: any) => {
          const unitInfoObject: any = await getUnitInfo(unitName);
          const unitInfo = unitInfoObject.data;
          const vehiclesNum = unitInfo["Топ-3 часто используемых ТС"]
            ? unitInfo["Топ-3 часто используемых ТС"].length
            : 0;
          const vehiclesCountBefore = vehiclesMap.get(
            polygonInfo["Название полигона"]
          );
          console.log("veh count before", vehiclesCountBefore);
          setVehiclesMap(
            new Map(
              vehiclesMap.set(
                polygonInfo["Название полигона"],
                vehiclesCountBefore + vehiclesNum
              )
            )
          );
        });

        setPolygonsWithInfo((pwinfo: any) => [...pwinfo, resObj]);
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("@polygons w info", polygonsWithInfo);
  console.log("@vehicles by polygon map", vehiclesMap);

  if (polygonsWithInfo == null) return <div>Загрузка списка полигонов...</div>;

  return (
    <main>
      <div className="flex flex-col">
        <h1 className="text-h1 font-bold">Полигоны</h1>
        <div className="grid grid-cols-3">
          {polygonsWithInfo?.map((polygon: any) => (
            <Card key={polygon.name} href={"/polygons/" + polygon.name}>
              <h2 className="text-h2 font-bold mb-3">{polygon.name}</h2>
              <ul
                role="list"
                className="ml-3 marker:text-sky-400 marker:text-3xl list-disc pl-5 space-y-3"
              >
                <li>Средний пробег ТС: {polygon.mileage}</li>
                <li>Штрафов в месяц: {polygon.feeNum}</li>
              </ul>

              <div className="absolute bottom-5 left-5 text-[--black-80]">
                {polygon.unitsNum}{" "}
                {declination(polygon.unitsNum, [
                  "подразделение",
                  "подразделения",
                  "подразделений",
                ])}
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div>
        <div className="flex gap-16 items-center">
          <h1 className="text-h1 font-bold">Статистика</h1>
          <select className="border p-2 rounded-xl">
            <option>Всё время</option>
            <option>Год</option>
            <option>Месяц</option>
            <option>Неделя</option>
            <option>День</option>
          </select>
        </div>
        <PieChart
          labels={Array.from(vehiclesMap.keys())}
          chartName="Соотношение кол-ва транспорта"
          dataName="Кол-во транспорта"
          data={Array.from(vehiclesMap.values())}
        />
      </div>
    </main>
  );
};

export default PolygonsPage;
