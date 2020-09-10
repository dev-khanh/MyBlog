/* eslint-disable prettier/prettier */
let appState = {arrayParams: [], newData: [], arrayParamsUrl: ''};
import {SEND_PARAMS, SEND_PARAMS_URL} from '../action/ActionTypes';
export default function stateLocalReducer(state = appState, action) {
  switch (action.type) {
    case SEND_PARAMS:
      return {
        ...state,
        arrayParams: action.arrayParams,
      };
    case SEND_PARAMS_URL:
      return {
        ...state,
        arrayParamsUrl: action.arrayParamsUrl,
      };
  }
  return state;
}
