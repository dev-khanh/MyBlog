let appState = {arrayParams: []};
import {SEND_PARAMS} from '../action/ActionTypes';
export default function stateLocalReducer(state = appState, action) {
  switch (action.type) {
    case SEND_PARAMS:
      return {
        arrayParams: action.arrayParams,
      };
  }
  return state;
}
