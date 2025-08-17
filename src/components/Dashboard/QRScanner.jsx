// src/components/dashboard/QRScanner.jsx
import React, { useEffect, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

const QRScanner = ({ onScanSuccess }) => {
  const qrCodeRegionId = 'qr-reader';
  const html5QrCodeRef = useRef(null);

  useEffect(() => {
    html5QrCodeRef.current = new Html5Qrcode(qrCodeRegionId);

    Html5Qrcode.getCameras().then((devices) => {
      if (devices && devices.length) {
        const cameraId = devices[0].id;
        html5QrCodeRef.current.start(
          cameraId,
          {
            fps: 10,
            qrbox: { width: 250, height: 250 },
          },
          (decodedText) => {
            onScanSuccess(decodedText);
            html5QrCodeRef.current.stop(); // Stop after first successful scan
          },
          (errorMessage) => {
            // Optional: console.log(`Scan error: ${errorMessage}`);
          }
        );
      }
    });

    return () => {
      if (html5QrCodeRef.current) {
        html5QrCodeRef.current.stop().then(() => {
          html5QrCodeRef.current.clear();
        });
      }
    };
  }, [onScanSuccess]);

  return (
    <div>
      <h3>Scan QR Code</h3>
      <div id={qrCodeRegionId} style={{ width: '300px', margin: 'auto' }} />
    </div>
  );
};

export default QRScanner;