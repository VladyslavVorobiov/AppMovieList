import { call, put, takeEvery } from 'redux-saga/effects';
import {FETCH_DATA} from '../store/actions/actionTypes';
import {getDataHasError, dataIsLoading, getDataHasSuccess } from '../store/actions/actionCreators';
import { UnsplashUrl as url, headers } from '../config/default.json';
import {fetchData} from '../functions/http';
import { Alert } from 'react-native';

function* fetchDataAsync() {
    try {
      yield put( dataIsLoading() );

      const data = yield call( fetchData, url, 'GET', headers);
      yield put(getDataHasSuccess(data));
    } catch (error) {
      //TODO error handling
      yield put(getDataHasError());
      Alert.alert('Something has been wrong!\n Try again.\n' + error.message);
    }

  }

  export default function* watchFetchData() {
    yield takeEvery(FETCH_DATA, fetchDataAsync);
  }