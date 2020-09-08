/* eslint-disable prettier/prettier */
import {all, fork} from 'redux-saga/effects';
import {getBlocSaga, postUserSaga, postGetDelete, addNameData, deleteNameData} from './apiSaga';
export default function* rootSaga() {
  yield all([
    fork(getBlocSaga),
    fork(postUserSaga),
    fork(postGetDelete),
    fork(addNameData),
    fork(deleteNameData),
  ]);
}
