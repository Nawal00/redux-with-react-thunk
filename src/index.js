
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import reducer from './store/reducers/reducer'; 

import { Provider } from 'react-redux'; // allows to inject the global store. 
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk)); // Plug in store at the highest level 

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));