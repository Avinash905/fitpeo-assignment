import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

const OrderStats = () => {
  const [data, setData] = useState({
    labels: ["Completed", "Pending", "Cancelled"],
    datasets: [
      {
        label: "Orders",
        backgroundColor: [
          "rgb(138, 173, 255)",
          "rgb(235, 235, 235)",
          "rgb(255, 117, 74)",
        ],
        data: [60, 30, 10],
      },
    ],
  });

  return (
    <section className="overview card-container ">
      <div className="overview-top">
        <h5 className="card-heading">Order Stats</h5>
        <BsThreeDots />
      </div>
      <div className="orderstats-graph">
        <Doughnut
          data={data}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            responsive: true,
          }}
        />
      </div>
    </section>
  );
};

export default OrderStats;
