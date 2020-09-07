/* eslint-disable prettier/prettier */
let appState = { arraysBloc: [], fullname: '', age: '', jop: '', isEditing: false };
import {
  UP_STATE,
  UP_STATE_POST_USER,
  FETCH_FAILED,
} from '../action/ActionTypes';
export default function mainReducer(state = appState, action) {
  switch (action.type) {
    case UP_STATE:
      return {
        ...state,
        arraysBloc: action.arraysBloc,
        isEditing: action.isEditing,
      };
    case UP_STATE_POST_USER:
      return {
        ...state,
        fullname: action.fullname,
        age: action.age,
        jop: action.jop,
      };
    case FETCH_FAILED:
      return {
        ...state,
        isEditing: action.isEditing,
      };
  }
  return state;
}
