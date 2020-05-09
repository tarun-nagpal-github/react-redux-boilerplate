import { call, put, takeLatest, all } from 'redux-saga/effects'
import getRecordsSaga from "./sagas";
export default function* rootSaga() {
    yield all([
        getRecordsSaga(),
    ]);
 }