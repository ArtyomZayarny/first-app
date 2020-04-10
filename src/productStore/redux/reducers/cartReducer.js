import {ADD_TO_CART} from "../actions/cart";

const initState = [];
export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state,action.payload]

        default: return state
    }
}