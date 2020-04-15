import {applyMiddleware, combineReducers, createStore,compose,} from "redux";
import thunk from 'redux-thunk'


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore( (state) => {
    return state
},
composeEnhancers(
    applyMiddleware(thunk)
)
);

export default store
