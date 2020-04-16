import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/actions";


const List = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.items)

    useEffect(() => {
        dispatch(fetchPosts())
    },[])

    console.log(posts);
    return (

        <div>
            <ul>
                {posts.map( post => <li key={post.id}>{post.id}</li>)}
            </ul>
        </div>
    );
};

export default List;