// src/pages/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { getCurrentUser } from '../services/authService';

function ProtectedRoute({ children, role }) {
  const user = getCurrentUser();
  if (!user || user.role !== role) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;