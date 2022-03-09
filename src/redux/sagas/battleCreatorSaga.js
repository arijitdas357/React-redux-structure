import axios from "axios";
import {  takeLatest, call, put } from "redux-saga/effects";

/*=======================================================================================
// Watch for party creator Redux API call action and intercept it to handle side effects.
=======================================================================================*/

export function* battleCreatorWatcherSaga() {
  yield takeLatest("CREATE_BATTLE_REQUEST",battleCreatorWorkerSaga);
  
}
export function* postDataCheckSaga() {
  yield takeLatest("CREATE_NEW_POST_REQUEST",postDataSendingWithSaga);
}

/*=======================================================================================
// Once a Redux action is intercepted, perform API call for random enemy data. Then,
// randomize a seed to be used to obtain a random sprite avatar from the Adorable
// Avatars API. Lastly, generate a level for the enemy which corresponds to the chance
// that it will defeat the party during battle. Either a success or failure will be 
// directed back to the reducer.
=======================================================================================*/
function* battleCreatorWorkerSaga() {
  try {
    const Response = yield call(fetchEnemyData);
    console.log(Response);
    yield put({
      type: "CREATE_BATTLE_SUCCESS",
      Response
    });
  } catch (error) {
    yield put({ type: "CREATE_BATTLE_FAILURE", error });
  }
}
function* postDataSendingWithSaga(action) {
 try {
   const response = yield call(postHandlerData,action.payload);
   yield put({
      type: "CREATE_NEW_POST_SUCCESS",
      response
    });
  } catch (error) {
    yield put({ type: "CREATE_NEW_POST_FAILURE", error });
  }
}


/*=======================================================================================
// This Saga middleware function will handle the GET request for enemy data.
=======================================================================================*/
function fetchEnemyData() {
  return axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts"
  });
}

function postHandlerData(payload) {
 return axios({
    method: "post",
    url: "https://reqres.in/api/users",
    data:payload
  });
}






