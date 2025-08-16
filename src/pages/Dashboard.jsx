import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import '../styles/dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem('role');

  React.useEffect(() => {
    // Redirect based on role
    if (userRole === 'student') {
      navigate('/dashboard/student');
    } else if (userRole === 'admin') {
      navigate('/dashboard/admin');
    }
  }, [userRole, navigate]);

  return (
    <div className="dashboard-layout">
      <Navbar />
      
      <div className="dashboard-content">
        <Sidebar />
        
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;