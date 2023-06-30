import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import './style/index.css';

import App from './App';
import { sheduleReducer, gradeReducer, ordersReducer, payPageReducer, cardReducer } from './store/reducers.js';

const store = configureStore({
  reducer: {
    shedule: sheduleReducer,
    grade: gradeReducer,
    orders: ordersReducer,
    payPage: payPageReducer,
    card: cardReducer,
  }
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);