import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/dashboard">QRmark</Link>
      </div>
      
      <div className="navbar-links">
        {userRole === 'admin' && (
          <Link to="/dashboard/admin" className="nav-link">
            Admin Panel
          </Link>
        )}
        <Link to="/dashboard" className="nav-link">
          Dashboard
        </Link>
      </div>
      
      <div className="navbar-user">
        <span className="user-role">{userRole}</span>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;