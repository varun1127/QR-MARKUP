// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('student');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add role-based logic here if needed
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-box slide-in">
        <img
          src="/assets/college-logo.png"
          alt="College Logo"
          className="college-logo"
        />
        <h2>Welcome to QRMark</h2>
        <form onSubmit={handleLogin}>
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;