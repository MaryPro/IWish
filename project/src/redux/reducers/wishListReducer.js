import { GET_WISH_LIST } from '../actionTypes'

export function wishListReducer(state=[], action) {
    console.log(action);
    switch (action.type) {
        case GET_WISH_LIST:
            return [...state, ...action.payload]
        default:
            return state
    }
}