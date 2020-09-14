/* eslint-disable prettier/prettier */
let appState = {
  arrayParams: [], newData: [], arrayParamsUrl: '', markers: [
    {
      coordinate: {
        longitude: 106.7181393876672,
        latitude: 10.73826689409324,
      },
      key: 'DEVK',
    },
  ],
};
import { SEND_PARAMS, SEND_PARAMS_URL, STATE_MAP } from '../action/ActionTypes';
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
    case STATE_MAP:
      return {
        ...state,
        markers: action.markers,
      };
  }
  return state;
}
