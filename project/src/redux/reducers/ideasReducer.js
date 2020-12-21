import { GET_IDEAS, ADD_IDEA } from '../actionTypes'

export function ideasReducer(state=[], action) {
  switch (action.type) {
    case GET_IDEAS:
      return [...state, ...action.payload]
    case ADD_IDEA:
      return [action.payload]
    default:
      return state
  }
}

