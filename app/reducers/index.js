import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import nav from './navReducer';

const AppReducer = combineReducers({
  nav,
  homeReducer
});

export default AppReducer;