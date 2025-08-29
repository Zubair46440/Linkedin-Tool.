import React from "react";
import { FaRobot, FaEnvelope, FaChartLine, FaCogs } from "react-icons/fa"; // Font Awesome icons
import "../styles/global.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* ===== INTRO / PROTOTYPE NOTICE ===== */}
      <section className="intro-section" style={{ marginBottom: "2rem", textAlign: "center" }}>
        <p style={{ color: "#ccc", fontSize: "1rem", maxWidth: "700px", margin: "0 auto" }}>
          This website is currently a <strong>prototype</strong>. The frontend is fully designed, and a <strong>basic backend</strong> is included to demonstrate core functionalities like storing and retrieving data. Some features are still under development, but the prototype allows you to explore the design, interactions, and user experience.
        </p>
      </section>

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Automate Your LinkedIn Outreach</h1>
          <p>
            Find the right prospects, send personalized messages, and boost your
            sales with AI-powered automation.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://media.istockphoto.com/id/952063596/photo/business-software-concept-ai-artificial-intelligence.jpg?s=2048x2048&w=is&k=20&c=CBFSvy1visyPA5KXDO23jSK89_AyOj8a4dxmL9OE4IQ="
            alt="AI Dashboard"
          />
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaRobot size={50} color="#00bfa5" />
            <h3>AI Prospecting</h3>
            <p>
              Smartly find the right leads based on industry, job role, and
              interests.
            </p>
          </div>
          <div className="feature-card">
            <FaEnvelope size={50} color="#00bfa5" />
            <h3>Personalized Messaging</h3>
            <p>
              Create human-like messages tailored for each prospect
              automatically.
            </p>
          </div>
          <div className="feature-card">
            <FaChartLine size={50} color="#00bfa5" />
            <h3>Response Tracking</h3>
            <p>
              Track replies and measure the effectiveness of your outreach
              campaigns.
            </p>
          </div>
          <div className="feature-card">
            <FaCogs size={50} color="#00bfa5" />
            <h3>Automated Sequences</h3>
            <p>
              Schedule follow-ups and messages to appear human-like and timely.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
