import axios from 'axios';
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

export const FETCH_POST_CONTENT_REQUEST = 'FETCH_POST_CONTENT_REQUEST';
export const FETCH_POST_CONTENT_SUCCESS = 'FETCH_POST_CONTENT_SUCCESS';
export const FETCH_POST_CONTENT_ERROR = 'FETCH_POST_CONTENT_ERROR';


const fetchPostsRequest = () => ({
    type:FETCH_POSTS_REQUEST
})

const fetchPostsSuccess = (response) => ({
    type:FETCH_POSTS_SUCCESS,
    payload:response.data
})

const fetchPostsError = error => ({
    type:FETCH_POSTS_ERROR,
    payload:error.response
})

const fetchPostContentRequest = () => ({
    type:FETCH_POST_CONTENT_REQUEST
})

const fetchPostContentSuccess = (response,lang) => ({
    type:FETCH_POST_CONTENT_SUCCESS,
    payload:response.data,
    lang:lang
})

const fetchPostContentError = error => ({
    type:FETCH_POST_CONTENT_ERROR,
    payload:error.response
})

export const fetchPosts = ()=> {
    return  dispatch => {
        dispatch(fetchPostsRequest());
        axios.get('https://api.github.com/gists/public')
            .then(response => {dispatch(fetchPostsSuccess(response))})
            .catch( error => {dispatch(fetchPostsError(error))})
    }
}

export const selectPost = (url,lang) => {
    return dispatch  =>{
        dispatch(fetchPostContentRequest())
        axios.get(url)
            .then(response => {dispatch(fetchPostContentSuccess(response,lang))})
            .catch(error => {dispatch(fetchPostContentError(error))})

    }
}

