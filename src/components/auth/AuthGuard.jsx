import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import LoadingSpinner from '../common/LoadingSpinner';

const AuthGuard = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(null);
  const [userRole, setUserRole] = React.useState(null);

  React.useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      const role = localStorage.getItem('role');
      // In a real app, you would verify the token with your backend
      setIsAuthenticated(!!token);
      setUserRole(role);
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet context={{ userRole }} />;
};

export default AuthGuard;