import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import getData from './utils/api';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(getData)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
