import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import api from '../../services/api'
import { navigate } from '../../services/navigation';

import { Creators as LoginActions, Types as LoginTypes } from '../ducks/login';
import { Creators as RepositoriesActions, Types as RepositoriesTypes } from '../ducks/repositories';

function* login(action) {
  try {
    const { username } = action.payload;

    yield call(api.get, `/users/${username}`);
    yield put(LoginActions.loginSuccess(username));

    navigate('Repositories')
  } catch (err) {
    yield put(LoginActions.loginFailure());
  }
}

function* loadRepositories(action) {
  try {
    const { username } = yield select(state => state.login);

    const response = yield call(api.get, `/users/${username}/repos`)

    yield put(RepositoriesActions.loadRepositoriesSuccess(response.data));

    navigate('Repositories')
  } catch (err) {
    yield put(RepositoriesActions.loadRepositoriesFailure());
  }
}

export default function* rootSagas() {
  return yield all([
    takeLatest(LoginTypes.REQUEST, login),
    takeLatest(RepositoriesTypes.LOAD_REQUEST, loadRepositories),
  ]);
}
