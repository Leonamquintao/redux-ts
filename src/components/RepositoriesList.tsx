import React, { useState } from 'react';

const RepositoriesList: React.FC = () => {

  const [repo, setRepo] = useState<string>('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={repo} onChange={(e) => setRepo(e.target.value)}/>
        <button>Search</button>
      </form>
      <h1>RepositoriesList</h1>
    </div>
  );
};

export default RepositoriesList; 