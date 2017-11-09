// types
import { SET_LOCALE, GET_LOCALE } from '../actions/types';

const initialState = {
  locale: 'en',
};

export default function localeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCALE:
      return {
        ...state,
        locale: action.locale,
      };
    default:
      return state;
  }
}
