/* eslint-disable prettier/prettier */
let appState = {arrayParams: [], newData: []};
import {SEND_PARAMS, NEWDATA} from '../action/ActionTypes';
export default function stateLocalReducer(state = appState, action) {
  switch (action.type) {
    case SEND_PARAMS:
      return {
        ...state,
        arrayParams: action.arrayParams,
      };
    case NEWDATA:
      return {
        ...state,
        newData: action.newData,
      };
  }
  return state;
}
