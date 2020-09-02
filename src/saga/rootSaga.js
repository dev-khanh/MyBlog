/* eslint-disable prettier/prettier */
import { fork } from 'redux-saga/effects';
import { getBlocSaga } from './apiSaga';
export default function* rootSaga() {
  yield fork(getBlocSaga);
}
