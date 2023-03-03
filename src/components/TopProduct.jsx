import React from "react";
import TopProductCard from "./TopProductCard";

const TopProduct = () => {
  return (
    <section className="overview card-container ">
      <div className="overview-top">
        <h5 className="card-heading">Top Product</h5>
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
      <div className="top-products-container">
        <TopProductCard
          number={"1"}
          title={"Polo blue T-shirt"}
          price={"25.4"}
          sales={"3.82k"}
        />
        <TopProductCard
          number={"2"}
          title={"Hoodie for men"}
          price={"24.5"}
          sales={"3.14k"}
        />
      </div>
    </section>
  );
};

export default TopProduct;
