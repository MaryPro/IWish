import { LOGIN_USER, REG_USER, LOGOUT_USER } from '../actionTypes'

const defaultState = {
  currentUser: {},
  isAuth: false,
}

export function userReducer(state = defaultState, action) {
  switch (action.type) {
   
    case REG_USER:
      localStorage.setItem('token', action.payload.token)
         return { ...state, currentUser: action.payload, isAuth: action.payload.isAuth}
    case LOGIN_USER:
      localStorage.setItem('token', action.payload.token)
      return { ...state, currentUser: action.payload, isAuth: action.payload.isAuth }
    case LOGOUT_USER:
      localStorage.removeItem('token')
      return { ...state, currentUser: {}, isAuth: false }
    default:
      return state
  }
}


