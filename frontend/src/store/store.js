import { createStore, combineReducers } from 'react-redux';
import { sheduleReducer, gradeReducer, ordersReducer, payPageReducer, cardReducer } from './reducers';

const rootReducer = combineReducers({
  shedule: sheduleReducer,
  grade: gradeReducer,
  orders: ordersReducer,
  payPage: payPageReducer,
  card: cardReducer,
});

const store = createStore(rootReducer);

export default store;