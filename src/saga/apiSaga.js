import {takeLatest, put} from 'redux-saga/effects';
import {EVENT_DB, UP_STATE} from '../action/ActionTypes';
import {getApi} from '../api/getApi';
export function* getBlocSaga() {
  yield takeLatest(EVENT_DB, fetchDataBlog);
}
function* fetchDataBlog() {
  try {
    const reponse = yield getApi.getApiBlogUser();
    yield put({type: UP_STATE, arraysBloc: reponse.items});
  } catch (e) {}
}
