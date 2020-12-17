import { combineReducers } from 'redux';
// import { userReducer } from './userReducer';
import { ideasReducer } from './ideasReducer';

export const rootReducer = combineReducers({
  // user: userReducer,
  ideas: ideasReducer
})
