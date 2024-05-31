"use client";

import { Data, PolygonsList } from "@/app/layout";
import {
  Context,
  PropsWithChildren,
  ReactNode,
  createContext,
  useState,
} from "react";

interface PolygonPageWrapperProps {
  context: Context<Data>;
  data: Data;
  children: ReactNode | ReactNode[];
}

const polygonsList: PolygonsList = [
  {
    polygon_id: 1,
    name: "Полигон 1",
    metrics: "Набор метрик по полигону 1",
    units: [
      {
        unit_id: 1,
        name: "Подразделение АБОБА",
        metrics: "Набор метрик по подразделению АБОБА",
        vehicles: [
          {
            vehicle_id: 1,
            name: "toyota mark 2",
            metrics: "Набор метрик по toyota mark 2",
          },
          {
            vehicle_id: 2,
            name: "subaru impreza",
            metrics: "Набор метрик по impreza",
          },
          {
            vehicle_id: 3,
            name: "nissan skyline gtr r35",
            metrics: "Набор метрик по skyline r35",
          },
        ],
      },
      {
        unit_id: 2,
        name: "Подразделение ОГУРЧИК",
        metrics: "Набор метрик по подразделению ОГУРЧИК",
        vehicles: [
          {
            vehicle_id: 4,
            name: "toyota mark 2",
            metrics: "Набор метрик по toyota mark 2",
          },
          {
            vehicle_id: 5,
            name: "subaru impreza",
            metrics: "Набор метрик по impreza",
          },
          {
            vehicle_id: 6,
            name: "nissan skyline gtr r35",
            metrics: "Набор метрик по skyline r35",
          },
        ],
      },
      {
        unit_id: 3,
        name: "Подразделение ЧЕБУПЕЛЯ",
        metrics: "Набор метрик по подразделению ЧЕБУПЕЛЯ",
        vehicles: [
          {
            vehicle_id: 7,
            name: "toyota mark 2",
            metrics: "Набор метрик по toyota mark 2",
          },
          {
            vehicle_id: 8,
            name: "subaru impreza",
            metrics: "Набор метрик по impreza",
          },
          {
            vehicle_id: 9,
            name: "nissan skyline gtr r35",
            metrics: "Набор метрик по skyline r35",
          },
        ],
      },
    ],
  },
  {
    polygon_id: 2,
    name: "Полигон 2",
    metrics: "Набор метрик по полигону 2",
    units: [
      {
        unit_id: 1,
        name: "Подразделение АБОБА",
        metrics: "Набор метрик по подразделению АБОБА",
        vehicles: [
          {
            vehicle_id: 1,
            name: "toyota mark 2",
            metrics: "Набор метрик по toyota mark 2",
          },
          {
            vehicle_id: 2,
            name: "subaru impreza",
            metrics: "Набор метрик по impreza",
          },
          {
            vehicle_id: 3,
            name: "nissan skyline gtr r35",
            metrics: "Набор метрик по skyline r35",
          },
        ],
      },
      {
        unit_id: 2,
        name: "Подразделение ОГУРЧИК",
        metrics: "Набор метрик по подразделению ОГУРЧИК",
        vehicles: [
          {
            vehicle_id: 4,
            name: "toyota mark 2",
            metrics: "Набор метрик по toyota mark 2",
          },
          {
            vehicle_id: 5,
            name: "subaru impreza",
            metrics: "Набор метрик по impreza",
          },
          {
            vehicle_id: 6,
            name: "nissan skyline gtr r35",
            metrics: "Набор метрик по skyline r35",
          },
        ],
      },
      {
        unit_id: 3,
        name: "Подразделение ЧЕБУПЕЛЯ",
        metrics: "Набор метрик по подразделению ЧЕБУПЕЛЯ",
        vehicles: [
          {
            vehicle_id: 7,
            name: "toyota mark 2",
            metrics: "Набор метрик по toyota mark 2",
          },
          {
            vehicle_id: 8,
            name: "subaru impreza",
            metrics: "Набор метрик по impreza",
          },
          {
            vehicle_id: 9,
            name: "nissan skyline gtr r35",
            metrics: "Набор метрик по skyline r35",
          },
        ],
      },
    ],
  },
  {
    polygon_id: 3,
    name: "Полигон 3",
    metrics: "Набор метрик по полигону 3",
    units: [
      {
        unit_id: 1,
        name: "Подразделение АБОБА",
        metrics: "Набор метрик по подразделению АБОБА",
        vehicles: [
          {
            vehicle_id: 1,
            name: "toyota mark 2",
            metrics: "Набор метрик по toyota mark 2",
          },
          {
            vehicle_id: 2,
            name: "subaru impreza",
            metrics: "Набор метрик по impreza",
          },
          {
            vehicle_id: 3,
            name: "nissan skyline gtr r35",
            metrics: "Набор метрик по skyline r35",
          },
        ],
      },
      {
        unit_id: 2,
        name: "Подразделение ОГУРЧИК",
        metrics: "Набор метрик по подразделению ОГУРЧИК",
        vehicles: [
          {
            vehicle_id: 4,
            name: "toyota mark 2",
            metrics: "Набор метрик по toyota mark 2",
          },
          {
            vehicle_id: 5,
            name: "subaru impreza",
            metrics: "Набор метрик по impreza",
          },
          {
            vehicle_id: 6,
            name: "nissan skyline gtr r35",
            metrics: "Набор метрик по skyline r35",
          },
        ],
      },
      {
        unit_id: 3,
        name: "Подразделение ЧЕБУПЕЛЯ",
        metrics: "Набор метрик по подразделению ЧЕБУПЕЛЯ",
        vehicles: [
          {
            vehicle_id: 7,
            name: "toyota mark 2",
            metrics: "Набор метрик по toyota mark 2",
          },
          {
            vehicle_id: 8,
            name: "subaru impreza",
            metrics: "Набор метрик по impreza",
          },
          {
            vehicle_id: 9,
            name: "nissan skyline gtr r35",
            metrics: "Набор метрик по skyline r35",
          },
        ],
      },
    ],
  },
];

export const initData: Data = {
  polygonsMetrics: "Метрики по всем полигонам тут",
  polygonsList: polygonsList,
};

export const DataContext = createContext<Data>(initData);

const PolygonPageWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState(initData);
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default PolygonPageWrapper;
