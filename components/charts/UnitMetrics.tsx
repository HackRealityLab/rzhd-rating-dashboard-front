"use client";

import { useRef } from "react";
import { chartConfig } from "./chartUtils";

import { ChartData, Chart as ChartJS, registerables } from "chart.js";
import {
  Bar,
  // getDatasetAtEvent,
  // getElementAtEvent,
  // getElementsAtEvent,
} from "react-chartjs-2";

ChartJS.register(...registerables);

const UnitMetrics = () => {
  const chartRef = useRef();

  const data: Chart.ChartData = {
    labels: [
      "ОАО Таксисты Узбекистана",
      "Компания 2",
      "Компания 3",
      "Компания 4",
      "Компания 5",
      "Компания 6",
      "Компания 7",
    ],
    datasets: [
      {
        label: "Кол-во штрафов",
        data: [5, 2, 0, 1, 0, 0, 4],
        backgroundColor: "#EF423533",
        borderColor: "#757575",
        borderWidth: 1,
      },
      {
        label: "Совпадение пробега",
        data: [0.9, 1, 1, 0.5, 0.8, 1, 0.5, 1],
        backgroundColor: "#06948733",
        borderColor: "#757575",
        borderWidth: 1,
      },
      {
        label: "Процент целевых ТС",
        data: [0.3, 0.2, 0.4, 0.6, 0.6, 0.3, 0.9],
        backgroundColor: "#6A3DB733",
        borderColor: "#757575",
        borderWidth: 1,
      },
      {
        label: "Рейтинг часто используемых ТС",
        data: [1, 3, 2, 4, 1, 2, 1, 2],
        backgroundColor: "#EE7F1D33",
        borderColor: "#757575",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-4/5">
        <Bar
          options={chartConfig as any}
          data={data as ChartData<any>}
          ref={chartRef}
          // onClick={(event) => {
          //   console.log(chartRef);
          //   const dataset = getDatasetAtEvent(chartRef.current!, event);
          //   const element = getElementAtEvent(chartRef.current!, event);
          //   const elements = getElementsAtEvent(chartRef.current!, event);
          //   if (element[0] == undefined) {
          //     return;
          //   }
          //   const { datasetIndex, index } = element[0];
          //   alert("Значение: " + data.datasets[datasetIndex].data[index]);
          // }}
        />
      </div>
    </div>
  );
};

export default UnitMetrics;
