import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchPosts} from "../redux/actions";


const List = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchPosts())
    },[])
    return (
        <div>
            <ul>
             <li>1</li>
            </ul>
        </div>
    );
};

export default List;