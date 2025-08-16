import React from 'react';
import '../styles/loading-spinner.css';  // Update import path

const LoadingSpinner = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'spinner-small',
    medium: 'spinner-medium',
    large: 'spinner-large'
  };

  return (
    <div className="spinner-container">
      <div className={`loading-spinner ${sizeClasses[size]}`}></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;