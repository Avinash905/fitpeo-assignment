import React from "react";
import "../styles/activitycard.css";

const ActivityCard = ({ date, month, message }) => {
  return (
    <div className="activity-card">
      <div className="activity-card-date">
        <strong className="date">{date}</strong>
        <span className="month">{month}</span>
      </div>
      <p className="activity-card-message light-text sub-text">{message}</p>
    </div>
  );
};

export default ActivityCard;
