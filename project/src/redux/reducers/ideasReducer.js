import { GET_IDEAS } from '../actionTypes'

export function ideasReducer(state=[], action) {
  console.log(action);
  switch (action.type) {
    case GET_IDEAS:
      return [...state, ...action.payload]
    default:
      return state
  }
}
