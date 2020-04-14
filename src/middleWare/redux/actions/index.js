export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const SELECT_POST = 'SELECT_POST';


export const selectPost = url => {
    return {
        type:SELECT_POST,
        payload:url
    }
}