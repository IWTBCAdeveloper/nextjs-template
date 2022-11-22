import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import { actionTypes, failure, loadDataSuccess, tickClock } from './actions'

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield delay(1000)
  }
}

function* loadDataSaga() {
  try {
    const res: Users.Info[] = yield apiFetch<Users.Info[]>('https://jsonplaceholder.typicode.com/users')
		console.log("ressssssss: ",res)
    yield put(loadDataSuccess(res))
  } catch (err) {
    yield put(failure(err))
  }
}

function* rootSaga() {
  yield all([
    call(runClockSaga),
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
  ])
}

function* apiFetch<T>(url: string): Generator<Promise<T>> {
	return fetch(url).then(response => 
		{
			if (!response.ok) throw new Error(response.statusText)
			return response.json().then(data => data as T);
		}
	)  
}

export default rootSaga

