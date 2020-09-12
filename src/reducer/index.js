/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import mainReducer from './MainReducer';
import stateLocalReducer from './StateLocalReducer';
const allReduces = combineReducers({
  mainReducer,
  stateLocalReducer,
});
export default allReduces;
