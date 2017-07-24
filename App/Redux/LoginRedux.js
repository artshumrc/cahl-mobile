import {
  LOGIN_EMAIL,
  LOGIN_GOOGLE,
  LOGIN_FACEBOOK,
  LOGIN_TWITTER
} from './Constants.js'
import {
  loginEmail,
  loginGoogle,
  loginFacebook,
  loginTwitter
} from '../Services/Api.js'

const initialState = {
  loggedIn: false
}

export default function loginReducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN_EMAIL:
      return {
        ...state,
        loggedIn: true
      }
    case LOGIN_GOOGLE:
      return {
        ...state,
        loggedIn: true
      }
    case LOGIN_FACEBOOK:
      return {
        ...state,
        loggedIn: true
      }
  }
}