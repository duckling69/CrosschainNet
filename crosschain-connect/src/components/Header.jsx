import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: '#1a1a1a',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Typography
            variant="h6"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '1.5rem',
              letterSpacing: '0.05rem',
              color: '#fff',
            }}
          >
            CrossChainConnect
          </Typography>
        </motion.div>
        <div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} style={{ display: 'inline-block' }}>
            <Button
              color="inherit"
              component={Link}
              to="/"
              style={{ color: '#fff', fontSize: '1.1rem', margin: '0 15px', fontFamily: 'Poppins, sans-serif' }}
            >
              Home
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} style={{ display: 'inline-block' }}>
            <Button
              color="inherit"
              component={Link}
              to="/dashboard"
              style={{ color: '#fff', fontSize: '1.1rem', margin: '0 15px', fontFamily: 'Poppins, sans-serif' }}
            >
              Dashboard
            </Button>
          </motion.div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
