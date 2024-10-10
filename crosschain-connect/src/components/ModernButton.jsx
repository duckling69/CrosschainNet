import React from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';

function ModernButton({ children, ...props }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Button {...props}>{children}</Button>
    </motion.div>
  );
}

export default ModernButton;