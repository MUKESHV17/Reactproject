import React from 'react';
import './Dashboard.css';

const Dashboard = ({ onBack }) => {
  return (
    <div className="dashboard">
      <h2>Client Dashboard</h2>
      <p>Welcome to your dashboard. Here you can manage your marketing efforts efficiently.</p>

      <div className="dashboard-sections">
        {/* Viewing Analytics Card */}
        <div className="dashboard-card">
          <h3>Viewing Analytics</h3>
          <p>Get insights into your website traffic, user behavior, and conversions.</p>
          <button className="action-button">View Analytics</button>
        </div>

        {/* Manage Your Campaigns Card */}
        <div className="dashboard-card">
          <h3>Manage Your Campaigns</h3>
          <p>Control all your marketing campaigns in one place. Schedule, edit, and track progress.</p>
          <button className="action-button">Manage Campaigns</button>
        </div>

        {/* Track Performance Card */}
        <div className="dashboard-card">
          <h3>Track Performance</h3>
          <p>Monitor the performance of your digital marketing efforts with real-time data.</p>
          <button className="action-button">Track Performance</button>
        </div>
      </div>

      <button className="back-button" onClick={onBack}>Back to Home</button>
    </div>
  );
};

export default Dashboard;


