import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  if (role !== "student") {
    return <p style={{ textAlign: "center", marginTop: "5rem", color: "red" }}>Access denied. Only students can view this page.</p>;
  }

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Poppins, sans-serif" }}>
      <h2>Welcome, Student</h2>
      <p>This is your student dashboard. You can view your attendance, profile, or notifications here.</p>
      <button
        onClick={handleLogout}
        style={{
          backgroundColor: "#0055ff",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          marginTop: "1rem",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;