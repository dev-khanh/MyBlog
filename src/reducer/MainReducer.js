let appState = {arraysBloc: []};
import {UP_STATE} from '../action/ActionTypes';
export default function mainReducer(state = appState, action) {
  switch (action.type) {
    case UP_STATE:
      return {
        arraysBloc: action.arraysBloc,
      };
  }
  return state;
}
