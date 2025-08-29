import React from "react";
import { FaBullseye, FaUsers, FaLightbulb } from "react-icons/fa";
import "../styles/global.css";

const About = () => {
  return (
    <div className="about-container">

      {/* ===== HERO / INTRO ===== */}
      <section className="about-hero">
        <h1>About LinkedIn Sales Tool</h1>
        <p>
          We help sales professionals, recruiters, and founders find the right prospects,
          send personalized messages, and grow their network efficiently using AI.
        </p>
      </section>

      {/* ===== MISSION SECTION ===== */}
      <section className="about-mission">
        <div className="mission-card">
          <FaBullseye size={50} color="#00bfa5" />
          <h3>Our Mission</h3>
          <p>To simplify sales outreach by automating LinkedIn prospecting and messaging intelligently.</p>
        </div>
        <div className="mission-card">
          <FaUsers size={50} color="#00bfa5" />
          <h3>Our Team</h3>
          <p>We are a team of AI enthusiasts and developers dedicated to building cutting-edge sales tools.</p>
        </div>
        <div className="mission-card">
          <FaLightbulb size={50} color="#00bfa5" />
          <h3>Our Vision</h3>
          <p>Empowering professionals to work smarter, save time, and achieve better outreach results.</p>
        </div>
      </section>

      {/* ===== IMAGE / ILLUSTRATION ===== */}
      <section className="about-image">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Teamwork" />
      </section>
    </div>
  );
};

export default About;
