import { GET_IDEAS } from './actionTypes'

export const fetchGetIdeasAC = () => {
  return dispatch => {
    fetch("https://my-json-server.typicode.com/FireguardSPB/iwish_placeholder/gifts")
      .then(res => res.json())
      .then(ideas => dispatch(getIdeasAC(ideas)))
  }
};

export const getIdeasAC = (payload) => ({
  type: GET_IDEAS,
  payload
});
