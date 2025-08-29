import React from "react";
import { FaReply, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "../styles/global.css";

const ResponseDashboard = () => {
  const responses = [
    { name: "Anjali Mehta", status: "Replied" },
    { name: "Rohit Sharma", status: "Pending" },
    { name: "Priya Kapoor", status: "Rejected" },
    { name: "Sandeep Verma", status: "Replied" },
  ];

  return (
    <div className="response-container">
      <h1>Response Dashboard</h1>
      <table className="response-table">
        <thead>
          <tr>
            <th>Prospect</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {responses.map((res, index) => (
            <tr key={index}>
              <td>{res.name}</td>
              <td>{res.status}</td>
              <td>
                {res.status === "Replied" && <FaCheckCircle color="#00bfa5" />}
                {res.status === "Pending" && <FaReply color="#ffc107" />}
                {res.status === "Rejected" && <FaTimesCircle color="#ff4d4d" />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponseDashboard;
