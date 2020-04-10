export const ADD_TO_CART = 'ADD_TO_CARD';

export const addToCart = id => {
    return {
        type:ADD_TO_CART,
        payload:{product:id, quantity:1}
    }
}