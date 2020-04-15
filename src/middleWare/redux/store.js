import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

const store = createStore(
    state => state,
    combineReducers(
        applyMiddleware(thunk)
    )
)
;
export default store
