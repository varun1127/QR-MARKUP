import React, { useState, useEffect } from 'react';
import QRScanner from './QRScanner';
import { checkAttendance, markAttendance } from '../../services/api';
import './dashboard.css';

const StudentView = ({ userId }) => {
  const [attendanceStatus, setAttendanceStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [todayRecord, setTodayRecord] = useState(null);
  const [scanning, setScanning] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const today = new Date().toISOString().split('T')[0];
        const data = await checkAttendance(userId, today);
        setTodayRecord(data);
        setAttendanceStatus(data ? data.status : 'Not Marked');
      } catch (err) {
        setError('Failed to fetch attendance status');
      } finally {
        setLoading(false);
      }
    };
    
    fetchStatus();
  }, [userId]);

  const handleScanSuccess = async (qrData) => {
    try {
      setScanning(true);
      const result = await markAttendance(userId, qrData);
      setTodayRecord(result);
      setAttendanceStatus(result.status);
    } catch (err) {
      setError(err.message || 'Failed to mark attendance');
    } finally {
      setScanning(false);
    }
  };

  const handleStartScan = () => {
    setError(null);
    setScanning(true);
  };

  return (
    <div className="student-view">
      <h2>Student Dashboard</h2>
      
      <div className="attendance-status">
        <h3>Today's Attendance</h3>
        {loading ? (
          <p>Loading status...</p>
        ) : (
          <div className={`status-box status-${attendanceStatus?.toLowerCase().replace(' ', '-')}`}>
            {attendanceStatus}
            {todayRecord && (
              <div className="status-details">
                <p>Time: {new Date(todayRecord.timestamp).toLocaleTimeString()}</p>
                {todayRecord.location && <p>Location: {todayRecord.location}</p>}
              </div>
            )}
          </div>
        )}
      </div>
      
      {!loading && attendanceStatus === 'Not Marked' && (
        <div className="scan-section">
          {scanning ? (
            <QRScanner onScanSuccess={handleScanSuccess} />
          ) : (
            <button 
              className="scan-button"
              onClick={handleStartScan}
            >
              Scan QR Code to Mark Attendance
            </button>
          )}
        </div>
      )}
      
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default StudentView;