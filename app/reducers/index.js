import { combineReducers } from 'redux';
import * as localeReducer from './locale';

export default combineReducers(Object.assign(
  localeReducer,
));
