import {ADD_PRODUCT} from '../actions/product'
const initState = {
    products: [
                {
                id:1,
                name:'Toster',
                price:100,
                },
                {
                    id:2,
                    name:'Bike',
                    price:300,
                    },
                {
                    id:3,
                    name:'NoteBook',
                    price:700,
                    },
            ],
          cart:[]
        }

const productReducer = (state= initState, action) => {
    switch (action.type) {
        case ADD_PRODUCT :
                return {...state, ...state.cart.push(action.payload)}
            break;

        default: return state;
    }
}
export default productReducer