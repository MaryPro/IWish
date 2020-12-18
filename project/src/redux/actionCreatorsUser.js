import { REG_USER, LOGIN_USER, LOGOUT_USER} from './actionTypes'



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
    // .then(user  => (dispatch(loginUserAC(user)),  localStorage.setItem('token', user.token)))
    // console.log(user.token)
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

