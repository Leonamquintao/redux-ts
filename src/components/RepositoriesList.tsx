import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [repoName, setRepoName] = useState<string>('');
  const { searchRepositories } = useActions();

  const { data, error, loading } = useTypedSelector((state) => state.repositories);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!repoName) return
    searchRepositories(repoName);

  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={repoName} onChange={(e) => setRepoName(e.target.value)}/>
        <button>Search</button>
      </form>
      <h1>RepositoriesList</h1>
    </div>
  );
};

export default RepositoriesList;