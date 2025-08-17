import React from 'react';
import QRScanner from '../components/Dashboard/QRScanner.jsx'; // ✅ Adjust path if needed

const Dashboard = () => {
  // ✅ This function runs when a QR code is successfully scanned
  const handleScan = (data) => {
    console.log('Scanned QR:', data);

    // 🔧 You can add routing, validation, or toast here
    // Example: navigate(`/result/${data}`);
    // Example: toast.success(`Scanned: ${data}`);
  };

  return (
    <div style={{ padding: '2rem' }}>
      {/* ✅ Keep your existing dashboard layout here */}
      <h2>Welcome to the Dashboard</h2>

      {/* ✅ QR Scanner Section */}
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
        maxWidth: '400px',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#f9f9f9'
      }}>
        <QRScanner onScanSuccess={handleScan} />
      </div>
    </div>
  );
};

export default Dashboard;