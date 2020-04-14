export const ADD_TO_CART = 'ADD_TO_CARD';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY';
export const DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY';

export const addToCart = id => {
    return {
        type:ADD_TO_CART,
        payload:{id:id, quantity:1}
    }
}

export const removeFromCart = (id) => {
    return {
        type:REMOVE_FROM_CART,
        payload:id
    }
}
export const increaseProductQty = (id) => {
    return {
        type: INCREASE_PRODUCT_QUANTITY,
        payload:id
    }
}

export const decreaseProductQty = (id) => {
    return {
        type: DECREASE_PRODUCT_QUANTITY,
        payload:id
    }
}