import { call, put, takeEvery } from '@redux-saga/core/effects'
import { getLatestNews } from '../../api'
import { setLatestNews } from '../actions/actions'
import { GET_LATEST_NEWS } from "../constants"

export function* handleLatestNews() {
  const { hits } = yield call(getLatestNews, 'react')
  yield put(setLatestNews(hits))
}
export function* watchClickSaga() {
  yield takeEvery(GET_LATEST_NEWS, handleLatestNews)
}

export default function* rootSaga() {
  yield watchClickSaga()
}