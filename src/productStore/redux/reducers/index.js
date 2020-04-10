import {combineReducers} from 'redux';
import countReducer from './countReducer'
import productReducer from './productRducer'
import {cartReducer} from "./cartReducer";

const rootReducer =  combineReducers({
    products:productReducer,
    count:countReducer,
    cart:cartReducer
});

export default rootReducer;