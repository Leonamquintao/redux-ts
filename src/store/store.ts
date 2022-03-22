import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// The {} stands for the INITIAL_STATE value.
export const store = createStore(reducers, {}, applyMiddleware(thunk));