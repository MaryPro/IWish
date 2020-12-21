import { GET_WISH_LIST,  ADD_WISH_LIST, DELETE_WISH_LIST } from '../actionTypes'

export function wishListReducer(state=[], action) {
    console.log(action);
    switch (action.type) {
        case GET_WISH_LIST:
            return [...state, ...action.payload]
        case ADD_WISH_LIST:
            return [...state, action.payload]
        case DELETE_WISH_LIST:
            return state
        default:
            return state
    }
}
