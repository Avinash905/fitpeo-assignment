import React, { useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const UserActivity = () => {
  const [data, setData] = useState({
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        fill: true,
        label: "Current",
        data: [20, 50, 40, 80],
        borderColor: "rgb(255, 99, 132,0.8)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.5,
      },
      {
        fill: true,
        label: "Previous",
        data: [40, 30, 60, 30],
        borderColor: "rgb(53, 162, 235,0.8)",
        backgroundColor: "rgba(53, 162, 235, 0.2)",
        tension: 0.3,
      },
    ],
  });
  return (
    <section className="useractivity card-container ">
      <div className="overview-top">
        <h5 className="card-heading">User Activity</h5>
        <div className="dropdown">
          <strong className="dropdown-label">Sort By: </strong>
          <select
            name="sort"
            id="sort"
            className="light-text"
          >
            <option value="yearly">Yearly</option>
            <option value="monthly">Monthly</option>
            <option value="weekly">Weekly</option>
            <option value="daily">Daily</option>
          </select>
        </div>
      </div>
      <div className="useractivity-stats">
        <span className="light-text sub-text">This Month</span>
        <strong>16,543</strong>
      </div>
      <div className="useractivity-graph">
        <Line
          data={data}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
            },
            elements: {
              point: {
                pointStyle: false,
              },
            },
          }}
        />
      </div>
    </section>
  );
};

export default UserActivity;
