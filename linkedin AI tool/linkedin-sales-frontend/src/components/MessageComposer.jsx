import React, { useState } from "react";

const MessageComposer = ({ prospect, onClose }) => {
  const [message, setMessage] = useState(prospect.message);

  const handleSend = () => {
    alert(`Message sent to ${prospect.name}:\n\n${message}`);
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "500px",
        backgroundColor: "#1f1f1f",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.7)",
        zIndex: 1000,
      }}
    >
      <h3>Edit Message for {prospect.name}</h3>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={6}
        style={{ width: "100%", borderRadius: "8px", padding: "0.5rem", marginBottom: "1rem", backgroundColor: "#121212", color: "#fff", border: "1px solid #333" }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={handleSend}>Send</button>
        <button onClick={onClose} style={{ backgroundColor: "#ff4d4d" }}>Close</button>
      </div>
    </div>
  );
};

export default MessageComposer;
