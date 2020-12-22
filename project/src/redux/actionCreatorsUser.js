import { REG_USER, LOGIN_USER, LOGOUT_USER, UPDATE_USER, GET_USER} from './actionTypes'



export const fetchUserRegAC = (payload) => {
  return (dispatch) => {
    fetch('/registration', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(user => dispatch(regUserAC(user)))
  }
};

export const fetchUserLoginAC = (payload) => {
  return (dispatch) => {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(user => dispatch(loginUserAC(user)))

  }
};

export const fetchUserUpdAC = (payload) => {
  return (dispatch) => {
    fetch('/upload', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(user => dispatch(updUserAC(user)))
  }
};

export const fetchGetUserAC = (payload) => {
  return dispatch => {
    fetch(`/users/?id=${payload}`)
        .then(res => res.json())
        .then(user => dispatch(getUserAC(user)))
  }
};

export const regUserAC = (payload) => ({
  type: REG_USER,
  payload
});

export const loginUserAC = (payload) => ({
  type: LOGIN_USER,
  payload
})

export const logoutUserAC = () => ({
  type: LOGOUT_USER
})

export const updUserAC = (payload) => ({
  type: UPDATE_USER,
  payload
});

export const getUserAC = (payload) => ({
  type: GET_USER,
  payload
});
