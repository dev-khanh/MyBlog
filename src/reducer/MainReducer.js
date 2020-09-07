let appState = {arraysBloc: [], fullname: '', isEditing: false};
import {
  UP_STATE,
  UP_STATE_POST_USER,
  FETCH_FAILED,
} from '../action/ActionTypes';
export default function mainReducer(state = appState, action) {
  switch (action.type) {
    case UP_STATE:
      return {
        arraysBloc: action.arraysBloc,
        isEditing: action.isEditing,
      };
    case UP_STATE_POST_USER:
      return {
        fullname: action.fullname,
      };
    case FETCH_FAILED:
      return {isEditing: action.isEditing};
  }
  return state;
}
