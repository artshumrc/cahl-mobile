import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const locale = createReducer({}, {
  [types.SET_LOCALE](state, action) {

  }
});
