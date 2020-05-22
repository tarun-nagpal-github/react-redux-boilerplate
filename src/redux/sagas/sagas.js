import { call, put, takeLatest } from 'redux-saga/effects'
// import Api from '...'
const getRecords = (isbnNum = null) => {
    console.log('Get Records');
    const results =  fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnNum}`)
    .then(response => response.json()); 
    return results;
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   try {
     const json = yield call(getRecords, action.payload.isbnNum);
      yield put({type: "USER_FETCH_SUCCEEDED",  response: json});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;