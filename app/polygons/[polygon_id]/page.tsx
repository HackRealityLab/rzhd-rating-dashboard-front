"use client";

import Card from "@/components/Card";
import CardWithMoreInfo from "@/components/CardWithMoreInfo";
import { getPolygonInfo } from "@/utils/apiHandler";
import Link from "next/link";
import { useEffect, useState } from "react";

const PolygonPage = ({ params }: { params: { polygon_id: string } }) => {
  const [polygon, setPolygon] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const polygonObject = await getPolygonInfo(params.polygon_id);
      setPolygon(polygonObject.data);
    })();
  }, [params.polygon_id]);

  if (polygon == null) return <main>Загрузка данных по полигону...</main>;
  return (
    <main>
      <div className="flex flex-col">
        <h1 className="text-h1 font-bold">{polygon["Название полигона"]}</h1>
        <section className="flex">
          <div>
            <h2 className="text-h2 text-[--black-80]">Статитстика</h2>
            <div className="grid grid-cols-2">
              <Card>
                <h3 className="text-h3">Сумма штрафов</h3>
                <span className="text-[--blue-100] text-h0 font-extrabold">
                  {polygon["Сумма штрафов"]}
                </span>
              </Card>
              <Card>
                <h3 className="text-h3">Общий пробег</h3>
                <div className="text-[--blue-100] font-extrabold">
                  <span className="text-h0">{polygon["Общий пробег"]}</span>
                  <span className="ml-[8px] text-h2">км</span>
                </div>
              </Card>
            </div>

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
          <div>
            <h2 className="text-h2 text-[--black-80]">Список подразделений</h2>
            <CardWithMoreInfo></CardWithMoreInfo>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PolygonPage;
