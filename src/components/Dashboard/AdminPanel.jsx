import React, { useState, useEffect } from 'react';
import { fetchAttendanceLogs, generateQRCode } from '../../services/api';
import AttendanceCalendar from './AttendanceCalendar';
import './dashboard.css';

const AdminPanel = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState({
    start: new Date(new Date().setDate(new Date().getDate() - 7)),
    end: new Date()
  });
  const [qrData, setQrData] = useState(null);

  useEffect(() => {
    const loadLogs = async () => {
      try {
        const data = await fetchAttendanceLogs(dateRange.start, dateRange.end);
        setLogs(data);
      } catch (error) {
        console.error('Failed to fetch logs:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadLogs();
  }, [dateRange]);

  const handleGenerateQR = async () => {
    try {
      const data = await generateQRCode();
      setQrData(data);
    } catch (error) {
      console.error('Failed to generate QR:', error);
    }
  };

  return (
    <div className="admin-panel">
      <div className="panel-header">
        <h2>Admin Dashboard</h2>
        <button onClick={handleGenerateQR} className="generate-qr-btn">
          Generate New QR Code
        </button>
      </div>
      
      {qrData && (
        <div className="qr-display">
          <img src={qrData.imageUrl} alt="Generated QR Code" />
          <p>Valid until: {new Date(qrData.expiresAt).toLocaleString()}</p>
        </div>
      )}
      
      <div className="date-range-selector">
        <label>From:</label>
        <input 
          type="date" 
          value={dateRange.start.toISOString().split('T')[0]} 
          onChange={(e) => setDateRange({...dateRange, start: new Date(e.target.value)})}
        />
        
        <label>To:</label>
        <input 
          type="date" 
          value={dateRange.end.toISOString().split('T')[0]} 
          onChange={(e) => setDateRange({...dateRange, end: new Date(e.target.value)})}
        />
      </div>
      
      <div className="logs-section">
        <h3>Attendance Logs</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="logs-table-container">
            <table className="logs-table">
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log) => (
                  <tr key={log.id}>
                    <td>{log.studentId}</td>
                    <td>{log.studentName}</td>
                    <td>{new Date(log.timestamp).toLocaleDateString()}</td>
                    <td>{new Date(log.timestamp).toLocaleTimeString()}</td>
                    <td className={`status-${log.status.toLowerCase()}`}>
                      {log.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      
      <div className="calendar-section">
        <h3>Attendance Calendar</h3>
        <AttendanceCalendar logs={logs} />
      </div>
    </div>
  );
};

export default AdminPanel;