// src/pages/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any auth state if needed
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <nav className="dashboard-navbar">
        <h2>QRMark Dashboard</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>

      <div className="dashboard-content">
        <h3>Welcome, Admin!</h3>
        <p>This is your dashboard. You can manage attendance, scan QR codes, and view reports.</p>

        {/* Add cards, charts, or links here */}
        <div className="dashboard-cards">
          <div className="card">📅 View Calendar</div>
          <div className="card">📷 Scan QR</div>
          <div className="card">📊 Attendance Report</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;