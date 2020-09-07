import {EVENT_DB, EVENT_POST_USER} from './ActionTypes';
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
