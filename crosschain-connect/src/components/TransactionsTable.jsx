import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const demoTransactions = [
  { id: 1, user: "Alice", amount: 1200, date: "2024-10-10" },
  { id: 2, user: "Bob", amount: 300, date: "2024-10-09" },
  { id: 3, user: "Charlie", amount: 500, date: "2024-10-08" },
];

function TransactionsTable() {
  return (
    <TableContainer component={Paper} sx={{ backgroundColor: '#1e1e1e' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoTransactions.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.user}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TransactionsTable;