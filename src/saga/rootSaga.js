/* eslint-disable prettier/prettier */
import {all, fork, call} from 'redux-saga/effects';
import {getBlocSaga, postUserSaga} from './apiSaga';
export default function* rootSaga() {
  // yield call(getBlocSaga);
  // yield call(postUserSaga);
  // yield all([fork(getBlocSaga), fork(postUserSaga)]);
  yield all([
    postUserSaga(),
    getBlocSaga(),
  ]);
}
