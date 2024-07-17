import React from 'react';
import NewsList from '../components/NewsList';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <NewsList category="general" />
    </div>
  );
};

export default HomePage;
