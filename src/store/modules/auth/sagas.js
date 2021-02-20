import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';
import { get } from 'lodash';
import axios from '../../../services/axios';

import * as types from './types';
import * as actions from './actions';

function* loginRequest({ payload }) {
  const { email, password } = payload;
  try {
    const response = yield call(axios.post, '/login/', { email, password });

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    yield put(actions.loginSuccess({ ...response.data }));
    payload.history.push('/');
  } catch (err) {
    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');

  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
