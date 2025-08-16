import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/not-found.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link to="/" className="home-link">
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;