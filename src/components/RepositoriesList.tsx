import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../store';

const RepositoriesList: React.FC = () => {

  const [repoName, setRepoName] = useState<string>('');
  const dispatch = useDispatch();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!repoName) return
    dispatch(actionCreators.searchRepositories(repoName));
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