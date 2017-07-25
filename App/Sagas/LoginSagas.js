import { LOGIN_EMAIL } from './Constants'
import { put, takeEvery } from 'redux-saga/effects'
import loginEmail from './api'

function* login (action) {
  try {
    const loginAction = yield loginEmail()
    yield put({ type: LOGIN_EMAIL })
  } catch (e) {
    console.log(e)
  }
}

export default dataSaga