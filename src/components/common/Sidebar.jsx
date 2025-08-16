import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/sidebar.css';  // Update import path

const Sidebar = () => {
  const userRole = localStorage.getItem('role');

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Menu</h3>
      </div>
      
      <ul className="sidebar-menu">
        <li>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Overview
          </NavLink>
        </li>
        
        {userRole === 'student' && (
          <li>
            <NavLink 
              to="/dashboard/scan" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Scan QR
            </NavLink>
          </li>
        )}
        
        {userRole === 'admin' && (
          <>
            <li>
              <NavLink 
                to="/dashboard/admin" 
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Admin Panel
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/dashboard/logs" 
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Attendance Logs
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/dashboard/generate-qr" 
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Generate QR
              </NavLink>
            </li>
          </>
        )}
        
        <li>
          <NavLink 
            to="/dashboard/profile" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;