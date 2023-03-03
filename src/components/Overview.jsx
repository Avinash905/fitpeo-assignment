import React from "react";
import "../styles/overview.css";
import OverviewGraph from "./OverviewGraph";

const Overview = () => {
  return (
    <section className="overview card-container ">
      <div className="overview-top">
        <h5 className="card-heading">Overview</h5>
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
      <div className="overview-content">
        <div className="overview-data">
          <span className="light-text sub-text">This Month</span>
          <div className="overview-price">
            <strong>$24,564</strong>
            <span className="change increment">+2.65%</span>
          </div>
          <div className="overview-table">
            <div className="overview-table-row">
              <div className="overview-table-box">
                <span className="sub-text light-text">Orders</span>
                <strong>5,643</strong>
              </div>
              <div className="overview-table-box">
                <span className="sub-text light-text">Sales</span>
                <strong>16,273</strong>
              </div>
            </div>
            <div className="overview-table-row">
              <div className="overview-table-box">
                <span className="sub-text light-text">Order Value</span>
                <strong>12.03 %</strong>
              </div>
              <div className="overview-table-box">
                <span className="sub-text light-text">Customers</span>
                <strong>21,456</strong>
              </div>
            </div>
            <div className="overview-table-row">
              <div className="overview-table-box">
                <span className="sub-text light-text">Income</span>
                <strong>$35,652</strong>
              </div>
              <div className="overview-table-box">
                <span className="sub-text light-text">Expenses</span>
                <strong>$12,248</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="overview-graph">
          <OverviewGraph />
        </div>
      </div>
    </section>
  );
};

export default Overview;
