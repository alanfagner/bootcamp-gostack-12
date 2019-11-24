import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import {getTechsSuccess, getTechsFailure} from './actions'

export function* getTechs() {
  try {
    const res = yield call(api, 'techs');

    yield put(getTechsSuccess(res.data));
  } catch (error) {
    yield put(getTechsFailure());
  }
}