import React from 'react';
import TransactionsTable from './TransactionsTable';
import LiveUpdates from './LiveUpdates';
import Animations from './Animations';
import Popups from './Popups';

function Dashboard() {
  return (
    <div className="dashboard" style={{ padding: '20px' }}>
      <TransactionsTable />
      <LiveUpdates />
      <Animations />
      <Popups />
    </div>
  );
}

export default Dashboard;