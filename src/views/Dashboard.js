import React from 'react';

const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {props.user && props.user}</p>
    </div>
  );
};

export default Dashboard;
