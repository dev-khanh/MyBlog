/* eslint-disable prettier/prettier */
import {takeEvery, put, call} from 'redux-saga/effects';
import {
  EVENT_DB,
  UP_STATE,
  EVENT_POST_USER,
  UP_STATE_POST_USER,
  FETCH_FAILED,
  EVENt_POST_GET_DELETE,
  ADD_NAME_DATA,
  DELETE_DATA_NAME,
} from '../action/ActionTypes';
import {getApi} from '../api/getApi';
import {postApi} from '../api/postApi';
import API from '../api/baseApi';

export function* getBlocSaga() {
  yield takeEvery(EVENT_DB, fetchDataBlog);
}
function* fetchDataBlog() {
  try {
    const reponse = yield getApi.getApiBlogUser();
    yield put({type: UP_STATE, arraysBloc: reponse.items, isEditing: true});
  } catch (e) {
    yield put({type: FETCH_FAILED, isEditing: false});
  }
}
export function* postUserSaga() {
  yield takeEvery(EVENT_POST_USER, fetchPostUser);
}
function* fetchPostUser() {
  try {
    const respose = yield postApi.getpostBlogUser();
    let f = respose['profile'];
    // console.log(f);
    yield put({
      type: UP_STATE_POST_USER,
      fullname: f['fullname'],
      age: f['id'],
      jop: f['personage'],
    });
  } catch (e) {}
}
export function* postGetDelete() {
  yield takeEvery(EVENt_POST_GET_DELETE, fetchPostGetDelete);
}
function* fetchPostGetDelete() {
  try {
    const response = yield call(API.get, '/food');
    // console.log(response.Items);
    response.Items.map((d) => {
      // console.log(d.name);
    });
  } catch (e) {}
}

export function* addNameData() {
  yield takeEvery(ADD_NAME_DATA, fetchPostNameData);
}
function* fetchPostNameData(action) {
  try {
    const response = yield call(API.post, '/food', action.payload);
    // console.log(response);
  } catch (e) {}
}

export function* deleteNameData() {
  yield takeEvery(DELETE_DATA_NAME, fetchDeleteNameData);
}
function* fetchDeleteNameData(action) {
  try {
    const response = yield call(API.delete, '/food/' + action.payload.foodId);
    // console.log(response);
  } catch (e) {}
}
