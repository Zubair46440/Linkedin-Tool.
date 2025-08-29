import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import DashboardPage from "./components/Dashboard";
import Analytics from "./pages/Analytics";
import ResponseDashboard from "./components/ResponseDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: "90px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/responses" element={<ResponseDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
