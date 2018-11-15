import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import nav from './navReducer';
import settingsReducer from "./settingsReducer"

const AppReducer = combineReducers({
  nav,
  homeReducer,
  settingsReducer
});

export default AppReducer;