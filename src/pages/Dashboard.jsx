import React from "react";
import Layout from "./Layout";
import "../styles/dashboard.css";
import DashboardTopCard from "../components/DashboardTopCard";
import { RiPieChartFill, RiShoppingBag3Fill } from "react-icons/ri";
import { IoMdPeople } from "react-icons/io";
import Overview from "../components/Overview";
import UserActivity from "../components/UserActivity";
import OrderStats from "../components/OrderStats";
import TopProduct from "../components/TopProduct";

const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboard-content">
        <div className="top-card-container">
          <DashboardTopCard
            icon={<RiPieChartFill />}
            title={"Revenue"}
            value={"$21,456"}
            change={"+2.65%"}
            type="increment"
          />
          <DashboardTopCard
            icon={<RiShoppingBag3Fill />}
            title={"Orders"}
            value={"5,643"}
            change={"-0.82%"}
            type="decrement"
          />
          <DashboardTopCard
            icon={<IoMdPeople />}
            title={"Customers"}
            value={"45,254"}
            change={"-1.04%"}
            type="decrement"
          />
        </div>
        <Overview />
        <div className="dashboard-bottom">
          <UserActivity />
          <OrderStats />
          <TopProduct />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
