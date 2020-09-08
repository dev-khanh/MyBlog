import {
  EVENT_DB,
  EVENT_POST_USER,
  EVENt_POST_GET_DELETE,
  ADD_NAME_DATA,
  DELETE_DATA_NAME,
} from './ActionTypes';
export const addEventDB = () => {
  return {
    type: EVENT_DB,
  };
};
export const addEventPostUser = () => {
  return {
    type: EVENT_POST_USER,
  };
};
export const addEventgetPostDelete = () => {
  return {
    type: EVENt_POST_GET_DELETE,
  };
};
export const addNameData = (payload) => {
  return {
    type: ADD_NAME_DATA,
    payload,
  };
};
export const deleteData = (payload) => {
  return {
    type: DELETE_DATA_NAME,
    payload,
  };
};
