import {combineReducers} from "redux";
import {FETCH_POSTS_ERROR,FETCH_POSTS_REQUEST,FETCH_POSTS_SUCCESS,
    FETCH_POST_CONTENT_ERROR,FETCH_POST_CONTENT_REQUEST,FETCH_POST_CONTENT_SUCCESS} from '../actions'

const initState = {
    isLoading:false,
    items:[],
}

const postsReducer = (state = initState, action) => {

    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                error:null,
                isLoading: true
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items:action.payload
            }
        case FETCH_POSTS_ERROR:
            return {
                isLoading: false,
                items:[],
                error:action.payload
            }
  
        default:return state
    }
}

const postContentReducer = (state = {content:'',lang:'',isLoading:false}, action) => {
    switch(action.type) {
        case FETCH_POST_CONTENT_REQUEST:
            return {
                ...state,
                error:null,
                isLoading: true
            }
        case FETCH_POST_CONTENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                content:action.payload,
                lang:action.lang
            }
        case FETCH_POST_CONTENT_ERROR:
            return {
                isLoading: false,
                content:'',
                error:action.payload
            }
            default:return state
    }

}



const rootReducer = combineReducers({
    posts:postsReducer,
    content:postContentReducer
})

export default rootReducer