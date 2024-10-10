import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

function Popups() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open Popup
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Use CrossChainConnect"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            CrossChainConnect is a seamless platform designed to automate token airdrops while providing real-time wallet monitoring for projects on Solana and Ethereum.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Popups;