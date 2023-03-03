import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { overviewData } from "../utils/overviewData";
import Chart from "chart.js/auto";

const OverviewGraph = () => {
  const [data, setData] = useState({
    labels: overviewData.map((ele) => ele.month),
    datasets: [
      {
        label: "Earned",
        backgroundColor: "rgb(138, 173, 255)",
        borderColor: "rgb(0, 255, 0)",
        borderRadius: 5,
        barThickness: 15,
        data: overviewData.map((ele) => ele.earned),
      },
    ],
  });

  return (
    <Bar
      data={data}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
      }}
    />
  );
};

export default OverviewGraph;
