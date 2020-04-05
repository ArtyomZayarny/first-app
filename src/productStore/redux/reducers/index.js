import {combineReducers} from 'redux';
import countReducer from './countReducer'
import productReducer from './productRducer'

const rootReducer =  combineReducers({
    products:productReducer,
    count:countReducer
});

export default rootReducer;