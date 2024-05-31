import { ChartData } from "chart.js";

const chartConfig: Chart.ChartOptions = {
  // maintainAspectRatio: false,
  // aspectRatio: 1,
  plugins: {
    legend: {
      display: false,
      // labels: {
      //   boxWidth: 100,
      //   useBorderRadius: true,
      //   borderRadius: 0,
      //   font: {
      //     size: 22,
      //   },
      // },
    },
  },
};

export { chartConfig };
