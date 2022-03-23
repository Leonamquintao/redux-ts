import React from 'react';
import HomePage from './pages/HomePage';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;

