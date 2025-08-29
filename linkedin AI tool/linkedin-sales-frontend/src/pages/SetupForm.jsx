import React, { useState } from "react";

const SetupForm = () => {
  const [formData, setFormData] = useState({
    product: "",
    industry: "",
    jobRole: "",
    companySize: "",
    region: "",
    goal: "",
    brandVoice: "",
    triggers: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="card" style={{ padding: '2rem' }}>
      <h2>Setup Your Outreach</h2>
      <form onSubmit={handleSubmit}>
        <input name="product" placeholder="Product / Service" onChange={handleChange} />
        <input name="industry" placeholder="Target Industry" onChange={handleChange} />
        <input name="jobRole" placeholder="Job Roles" onChange={handleChange} />
        <input name="companySize" placeholder="Company Size" onChange={handleChange} />
        <input name="region" placeholder="Region" onChange={handleChange} />
        <input name="goal" placeholder="Goal" onChange={handleChange} />
        <input name="brandVoice" placeholder="Brand Voice" onChange={handleChange} />
        <input name="triggers" placeholder="Optional Triggers" onChange={handleChange} />
        <button type="submit">Generate Prospects</button>
      </form>
    </div>
  );
};

export default SetupForm;
