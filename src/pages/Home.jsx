import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to QRmark</h1>
        <p>Efficient QR-based attendance and verification system</p>
        
        <div className="cta-buttons">
          <Link to="/login" className="cta-button primary">
            Login
          </Link>
          <Link to="/dashboard" className="cta-button secondary">
            Learn More
          </Link>
        </div>
      </div>
      
      <div className="features-section">
        <div className="feature-card">
          <h3>Quick Attendance</h3>
          <p>Mark your attendance with a simple QR code scan</p>
        </div>
        
        <div className="feature-card">
          <h3>Real-time Tracking</h3>
          <p>Admins can monitor attendance in real-time</p>
        </div>
        
        <div className="feature-card">
          <h3>Secure Verification</h3>
          <p>Prevent proxy attendance with secure QR codes</p>
        </div>
      </div>
    </div>
  );
};

export default Home;