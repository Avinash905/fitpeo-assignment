import React from "react";
import "../styles/topproductcard.css";

const TopProductCard = ({ number, title, price, sales }) => {
  return (
    <div className="top-product-card">
      <div className="top-number-container">#{number}</div>
      <div className="top-product-content">
        <span className="top-product-title light-text">{title}</span>
        <div className="top-product-values">
          <strong>$ {price}</strong>
          <span>{sales}</span>
        </div>
      </div>
    </div>
  );
};

export default TopProductCard;
