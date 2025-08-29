import React from "react";
import { FaChartBar, FaUserCheck, FaEnvelopeOpenText } from "react-icons/fa";
import "../styles/global.css";

const Analytics = () => {
  return (
    <div className="analytics-container">
      <h1>Analytics Dashboard</h1>

      <div className="analytics-cards">
        <div className="analytics-card">
          <FaUserCheck size={50} color="#00bfa5" />
          <h3>Total Prospects</h3>
          <p>72</p>
        </div>
        <div className="analytics-card">
          <FaEnvelopeOpenText size={50} color="#00bfa5" />
          <h3>Messages Sent</h3>
          <p>320</p>
        </div>
        <div className="analytics-card">
          <FaChartBar size={50} color="#00bfa5" />
          <h3>Open Rate</h3>
          <p>68%</p>
        </div>
      </div>

      {/* Placeholder for charts */}
      <div className="analytics-charts">
        <div className="chart-placeholder">[Campaign Performance Chart]</div>
        <div className="chart-placeholder">[Replies & Engagement Chart]</div>
      </div>
    </div>
  );
};

export default Analytics;
