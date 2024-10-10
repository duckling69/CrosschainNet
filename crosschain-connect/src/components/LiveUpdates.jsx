import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

function LiveUpdates() {
  const [data, setData] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => prevData + Math.floor(Math.random() * 10));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Typography variant="h6" style={{ margin: '20px 0' }}>
      Live Token Price: ${data}
    </Typography>
  );
}

export default LiveUpdates;