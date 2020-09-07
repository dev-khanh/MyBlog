/* eslint-disable prettier/prettier */
import { takeEvery, put } from 'redux-saga/effects';
import {
  EVENT_DB,
  UP_STATE,
  EVENT_POST_USER,
  UP_STATE_POST_USER,
  FETCH_FAILED,
} from '../action/ActionTypes';
import { getApi } from '../api/getApi';
import { postApi } from '../api/postApi';

export function* getBlocSaga() {
  yield takeEvery(EVENT_DB, fetchDataBlog);
}
function* fetchDataBlog() {
  try {
    const reponse = yield getApi.getApiBlogUser();
    yield put({ type: UP_STATE, arraysBloc: reponse.items, isEditing: true });
  } catch (e) {
    yield put({ type: FETCH_FAILED, isEditing: false });
  }
}
export function* postUserSaga() {
  yield takeEvery(EVENT_POST_USER, fetchPostUser);
}
function* fetchPostUser() {
  try {
    const respose = yield postApi.getpostBlogUser();
    let f = respose['profile'];
    console.log(f);
    yield put({ type: UP_STATE_POST_USER, fullname: f['fullname'], age: f['id'], jop: f['personage'] });
  } catch (e) { }
}
