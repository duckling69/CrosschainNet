import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';

const generateRandomHash = () => {
  const characters = 'abcdef0123456789';
  let result = '';
  for (let i = 0; i < 12; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const generateRandomAmount = () => {
  return (Math.random() * 5000).toFixed(2);
};

const generateRandomTransaction = () => {
  return {
    id: Math.floor(Math.random() * 10000),
    userHash: generateRandomHash(),
    amount: generateRandomAmount(),
    network: Math.random() > 0.5 ? "Solana" : "Ethereum",
    date: new Date().toISOString(),
    status: Math.random() > 0.7 ? "Pending" : "Completed"
  };
};

function TransactionsTable() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransactions((prevTransactions) => [
        ...prevTransactions,
        generateRandomTransaction()
      ]);
    }, 2000); // New transaction every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#fff' }}>
        Live Transactions
      </Typography>
      <Grid container spacing={2} sx={{ backgroundColor: '#111', borderRadius: '10px', padding: '20px' }}>
        <Grid item xs={2}><Typography sx={{ color: '#ccc' }}>User Hash</Typography></Grid>
        <Grid item xs={2}><Typography sx={{ color: '#ccc' }}>Amount (USD)</Typography></Grid>
        <Grid item xs={2}><Typography sx={{ color: '#ccc' }}>Network</Typography></Grid>
        <Grid item xs={2}><Typography sx={{ color: '#ccc' }}>Date</Typography></Grid>
        <Grid item xs={2}><Typography sx={{ color: '#ccc' }}>Status</Typography></Grid>
        {transactions.map((tx) => (
          <React.Fragment key={tx.id}>
            <Grid item xs={2}><Typography sx={{ color: '#fff' }}>{tx.userHash}</Typography></Grid>
            <Grid item xs={2}><Typography sx={{ color: '#fff' }}>${tx.amount}</Typography></Grid>
            <Grid item xs={2}><Typography sx={{ color: '#fff' }}>{tx.network}</Typography></Grid>
            <Grid item xs={2}><Typography sx={{ color: '#fff' }}>{new Date(tx.date).toLocaleTimeString()}</Typography></Grid>
            <Grid item xs={2}><Typography sx={{ color: tx.status === "Completed" ? 'lightgreen' : 'orange' }}>{tx.status}</Typography></Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
}

export default TransactionsTable;
