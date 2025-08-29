import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProspectCard from "./ProspectCard";
import MessageComposer from "./MessageComposer";
import SetupForm from "../pages/SetupForm";
import { fetchProspects } from "../api";

const Dashboard = () => {
  const [prospects, setProspects] = useState([
    {
      id: 1,
      name: "Rohit Sharma",
      title: "CTO",
      company: "TechNova",
      skills: ["SaaS Development", "AI Tools", "Team Management"],
      additionalInfo: "Based in Bangalore, leads a 50-member dev team.",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      message: "Hi Rohit, noticed TechNova is expanding its SaaS team...",
    },
    {
      id: 2,
      name: "Anjali Mehta",
      title: "HR Manager",
      company: "HirePulse",
      skills: ["Onboarding", "HR SaaS", "Recruitment"],
      additionalInfo: "Based in Mumbai, 10+ years experience in HR.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      message: "Hi Anjali, loved your recent post on hybrid hiring...",
    },
    {
      id: 3,
      name: "Sandeep Verma",
      title: "Growth Manager",
      company: "MarketEdge",
      skills: ["Lead Generation", "Digital Marketing", "CRM"],
      additionalInfo: "Based in Delhi, expert in scaling startups.",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      message: "Hi Sandeep, I noticed your recent growth initiatives...",
    },
    {
      id: 4,
      name: "Priya Kapoor",
      title: "Product Manager",
      company: "InnovateX",
      skills: ["Product Strategy", "UI/UX", "Agile"],
      additionalInfo: "Based in Pune, 7 years experience in SaaS products.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      message: "Hi Priya, loved your article on product innovation...",
    },
  ]);
  const navigate = useNavigate();
  const [selectedProspect, setSelectedProspect] = useState(null);

  useEffect(() => {
    const loadProspects = async () => {
      try {
        const { data } = await fetchProspects();
        setProspects(data);
      } catch (err) {
        console.error("Error fetching prospects:", err);
      }
    };
    loadProspects();
  }, []);

  return (
    <div className="dashboard">
      {/* Dashboard Buttons */}
      <div className="dashboard-buttons">
        <button className="btn-primary" onClick={() => navigate("/analytics")}>
          Analytics
        </button>
        <button className="btn-secondary" onClick={() => navigate("/responses")}>
          Responses
        </button>
      </div>

      {/* Prospect Cards */}
      <div className="grid">
        {prospects.map((p) => (
          <ProspectCard
            key={p._id}
            prospect={p}
            onSelect={() => setSelectedProspect(p)}
          />
        ))}

        {selectedProspect && (
          <MessageComposer
            prospect={selectedProspect}
            onClose={() => setSelectedProspect(null)}
          />
        )}
      </div>

      {/* Setup Form */}
      <SetupForm />
    </div>
  );
};

export default Dashboard;
