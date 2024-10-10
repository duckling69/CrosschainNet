import React from 'react';
import { Typography, Container } from '@mui/material';

function Footer() {
  return (
    <Container style={{ padding: '20px 0', textAlign: 'center' }}>
      <Typography variant="body2" color="textSecondary">
        © 2024 CrossChainConnect. All rights reserved.
      </Typography>
    </Container>
  );
}

export default Footer;