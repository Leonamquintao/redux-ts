import React from 'react';
import RepositoriesList from '../components/RepositoriesList';
const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Search for Package</h1>
      <RepositoriesList />
    </div>
  );
};

export default HomePage; 