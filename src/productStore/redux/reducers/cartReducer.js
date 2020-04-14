import {ADD_TO_CART,REMOVE_FROM_CART,INCREASE_PRODUCT_QUANTITY,DECREASE_PRODUCT_QUANTITY} from "../actions/cart";

const LS = localStorage;
const cart = 'cart';
const productsIds = 'productsIds';

//LS.clear();
if(localStorage.getItem(cart) === null) {
    LS.setItem(cart,'0')
}
if(localStorage.getItem(productsIds) === null) {
    LS.setItem(productsIds, '[]')
}
const addProductLS = (obj) => {
    if(JSON.parse(LS.getItem(productsIds)).length === 0) {
        let arr = [];
        arr.push(obj)
        LS.setItem(productsIds,JSON.stringify(arr))
    } else {
         let productList = JSON.parse(LS.getItem(productsIds));
         productList.push(obj)
         LS.setItem(productsIds, JSON.stringify(productList));
    }
}

let initState = [];

if(LS.getItem(productsIds) !== null ) {
    initState  = JSON.parse(LS.getItem(productsIds));
}

export const cartReducer = (state = initState, action) => {
    let newState;
    switch (action.type) {
        case ADD_TO_CART:
         newState = [...state,action.payload]
            LS.setItem(cart,newState.length);
            addProductLS(action.payload)
            return newState
        case REMOVE_FROM_CART :
            newState = state.filter( carProduct => carProduct.id !== action.payload)
            LS.setItem(cart,newState.length)
            LS.setItem(productsIds,JSON.stringify(newState))
            return newState
        case INCREASE_PRODUCT_QUANTITY:
           newState = state.map( (cartProduct) => {
                if(cartProduct.id === action.payload) {
                   cartProduct.quantity = cartProduct.quantity + 1;
                }
                 return cartProduct
            })
            LS.setItem(productsIds,JSON.stringify(newState));
           return newState

        case DECREASE_PRODUCT_QUANTITY:
            newState = state.map( (cartProduct) => {
                if(cartProduct.id === action.payload) {
                    cartProduct.quantity  -= 1
                }
                return cartProduct
            })
            LS.setItem(productsIds,JSON.stringify(newState));
            return newState
        default: return state
    }
}