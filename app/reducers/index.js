import { combineReducers } from 'redux';
import localeReducer from './locale';

const rootReducer = combineReducers({
  localeReducer,
});

export default rootReducer;
