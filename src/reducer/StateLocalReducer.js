/* eslint-disable prettier/prettier */
let appState = {arrayParams: [], newData: []};
import {SEND_PARAMS} from '../action/ActionTypes';
export default function stateLocalReducer(state = appState, action) {
  switch (action.type) {
    case SEND_PARAMS:
      return {
        ...state,
        arrayParams: action.arrayParams,
      };
  }
  return state;
}
