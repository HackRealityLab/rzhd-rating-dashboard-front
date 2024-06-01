import { Pie } from "react-chartjs-2";
import { ChartData, Chart as ChartJS, registerables } from "chart.js";
import { useRef } from "react";
import { chartConfig } from "./chartUtils";

ChartJS.register(...registerables);

const getColor = () => {
  return (
    "rgb(" +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    ")"
  );
};

const getColorList = (m: number) => {
  const colorList = [];
  for (let i = 0; i != m; i++) {
    colorList.push(getColor());
  }
  console.log("color list", colorList);
  return colorList;
};

interface PieChartProps {
  labels: string[];
  chartName: string;
  data: number[];
  dataName: string;
}

const PieChart: React.FC<PieChartProps> = ({
  labels,
  chartName,
  data,
  dataName,
}) => {
  const chartRef = useRef();

  const dataObject: Chart.ChartData = {
    labels: labels,
    datasets: [
      {
        label: dataName,
        data: data,
        backgroundColor: getColorList(data.length),
        borderColor: "#757575",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <h1>{chartName}</h1>

      <div className="w-1/3 p-10">
        <Pie
          options={chartConfig as any}
          data={dataObject as ChartData<any>}
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

export default PieChart;
