import React, { useState, useEffect } from 'react';
import QrScanner from 'qr-scanner';
import './dashboard.css';

const QRScanner = ({ onScanSuccess }) => {
  const [scanner, setScanner] = useState(null);
  const [camera, setCamera] = useState(null);
  const [availableCameras, setAvailableCameras] = useState([]);
  const [error, setError] = useState(null);
  const videoRef = React.createRef();

  useEffect(() => {
    const qrScanner = new QrScanner(
      videoRef.current,
      result => {
        onScanSuccess(result);
        qrScanner.stop();
      },
      {
        preferredCamera: 'environment',
        highlightScanRegion: true,
        highlightCodeOutline: true,
      }
    );

    setScanner(qrScanner);

    qrScanner.start().then(() => {
      qrScanner.getCameras().then(cameras => {
        setAvailableCameras(cameras);
        setCamera(cameras[0]?.id || 'environment');
      });
    }).catch(err => setError(err.message));

    return () => {
      if (qrScanner) {
        qrScanner.destroy();
      }
    };
  }, []);

  const handleCameraChange = (cameraId) => {
    if (scanner) {
      scanner.setCamera(cameraId);
      setCamera(cameraId);
    }
  };

  return (
    <div className="qr-scanner-container">
      <h3>Scan QR Code</h3>
      {error && <div className="error-message">{error}</div>}
      
      <div className="scanner-viewport">
        <video ref={videoRef} className="scanner-video" />
      </div>
      
      {availableCameras.length > 1 && (
        <div className="camera-selector">
          <label>Select Camera:</label>
          <select 
            value={camera} 
            onChange={(e) => handleCameraChange(e.target.value)}
          >
            {availableCameras.map(cam => (
              <option key={cam.id} value={cam.id}>
                {cam.label}
              </option>
            ))}
          </select>
        </div>
      )}
      
      <button 
        className="scan-button"
        onClick={() => scanner && scanner.start()}
      >
        Start Scanning
      </button>
    </div>
  );
};

export default QRScanner;