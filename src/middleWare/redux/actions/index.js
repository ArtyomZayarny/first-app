import axios from 'axios';
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

export const SELECT_POST = 'SELECT_POST';


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

export const fetchPosts = ()=> {
    return  dispatch => {
        dispatch(fetchPostsRequest());
        axios.get('https://api.github.com/gists/public')
            .then(response => {dispatch(fetchPostsSuccess(response))})
            .catch( error => {dispatch(fetchPostsError(error))})
    }
}
