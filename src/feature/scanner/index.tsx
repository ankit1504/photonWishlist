import React, { useState } from "react";
import QrReader from "react-qr-reader";

const Scanner: React.FunctionComponent = () => {
  const [scannedUrl, setScannedUrl] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setScannedUrl(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <div>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
      </div>
      {scannedUrl && (
        <div>
          <a href={scannedUrl} rel="noopener noreferrer">
            Open Link
          </a>
        </div>
      )}
    </div>
  );
};

export default Scanner;
