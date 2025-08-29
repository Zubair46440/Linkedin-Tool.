import React from "react";
import "../styles/global.css";

const ProspectCard = ({ prospect, onSelect }) => {
  return (
    <div className="card prospect-card">
      {/* Header */}
      <div className="card-header">
        <img 
          src={prospect.image || "https://via.placeholder.com/60"} 
          alt={prospect.name} 
          className="profile-img"
        />
        <div className="name-section">
          <h3>{prospect.name}</h3>
          <p className="job-title">{prospect.title}</p>
          <p className="company">{prospect.company}</p>
        </div>
      </div>

      {/* Skills */}
      <div className="skills">
        {prospect.skills?.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>

      {/* Additional Info */}
      {prospect.additionalInfo && (
        <p className="additional-info">{prospect.additionalInfo}</p>
      )}

      <button onClick={onSelect} className="card-btn">View / Edit Message</button>
    </div>
  );
};

export default ProspectCard;
