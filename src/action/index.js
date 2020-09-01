import {EVENT_DB} from './ActionTypes';
export const addEventDB = (sort) => {
  return {
    type: EVENT_DB,
    sort,
  };
};
