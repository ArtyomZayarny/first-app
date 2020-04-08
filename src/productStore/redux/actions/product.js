export const ADD_PRODUCT = 'ADD_PRODUCT';

export const addProduct = productId => {
    return {
        type:ADD_PRODUCT,
        payload:productId
    }
}