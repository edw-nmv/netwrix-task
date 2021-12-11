import { takeEvery, call, put } from 'redux-saga/effects';
import actionTypesDBData from '../actionTypes/dbDataAT';

async function fetchData({
  url, method, headers, body,
}) {
  const response = await fetch(url, {
    method,
    headers,
    body,
    credentials: 'include',
  });
  const data = await response.json();
  return data;
}

function* fetchDataFromDB(action) {
  try {
    const data = yield call(fetchData, {
      url: 'http://localhost:5001/data'
    });
    yield put({type: actionTypesDBData.GET_DATA_FROM_DB_SUCCESS, payload: data})
  } catch (error) {
    yield put({type: actionTypesDBData.GET_DATA_FROM_DB_ERROR, payload: error})
  }
}

function* watchActionsClient() {
  yield takeEvery(actionTypesDBData.GET_DATA_FROM_DB_START, fetchDataFromDB);
}

export default watchActionsClient;
