import { GET_IDEAS } from './actionTypes'
import {GET_WISH_LIST} from './actionTypes'
export const fetchGetIdeasAC = () => {
  return dispatch => {
    fetch('/getgoods')
      .then(res => res.json())
      .then(ideas => dispatch(getIdeasAC(ideas)))


  }
};
//
export const fetchGetWishListAC = () => {
  return dispatch => {
    fetch("https://my-json-server.typicode.com/FireguardSPB/iwish_placeholder/wishlists")
        .then(res => res.json())
        .then(wishlists => dispatch(getWishListAC(wishlists)))
  }
};

export const getIdeasAC = (payload) => ({
  type: GET_IDEAS,
  payload
});

export const getWishListAC = (payload) => ({
  type: GET_WISH_LIST,
  payload

});

// export const fetchGetWishListAC = () => {
//   return dispatch => {
//     fetch("/login")
//         .then(res => res.json())
//         .then(wishlists => dispatch(getWishListAC(wishlists)))
//   }
// };

