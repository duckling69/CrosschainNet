import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ backgroundColor: '#1a1a1a', padding: '40px 0' }}
    >
      <Container maxWidth="lg" style={
        {fixed: 'bottom',}

      }>
        <Box textAlign="center" py={3}>
          <Typography
            variant="h6"
            style={{
              color: '#fff',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              marginBottom: '10px',
              fontSize: '1.2rem',
            }}
          >
            © 2024 CrossChainConnect. All rights reserved.
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{ color: '#999' }}>
            Simplifying token airdrops and wallet monitoring.
          </Typography>
        </Box>
      </Container>
    </motion.div>
  );
}

export default Footer;
