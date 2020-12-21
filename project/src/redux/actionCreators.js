import { GET_IDEAS } from './actionTypes'
import {GET_WISH_LIST} from './actionTypes'
import {ADD_WISH_LIST} from './actionTypes'
import {DELETE_WISH_LIST} from './actionTypes'
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
    fetch("/wishlists")
        .then(res => res.json())
        .then(wishlists => dispatch(getWishListAC(wishlists)))
  }
};
export const addListWishAC = (payload) => ({
  type: ADD_WISH_LIST,
      payload

})
export const deleteWishListAC = (payload) => ({
  type: DELETE_WISH_LIST,
  payload

})

export const getIdeasAC = (payload) => ({
  type: GET_IDEAS,
  payload
});

export const getWishListAC = (payload) => ({
  type: GET_WISH_LIST,
  payload

});
export const getWishListUpdateAC = () => ({
  type: DELETE_WISH_LIST
})

// export const fetchGetWishListAC = () => {
//   return dispatch => {
//     fetch("/login")
//         .then(res => res.json())
//         .then(wishlists => dispatch(getWishListAC(wishlists)))
//   }
// };

