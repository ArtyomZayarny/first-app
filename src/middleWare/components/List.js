import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts,selectPost} from "../redux/actions";

const List = (props) => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.items);
    const {getLang} = props;
    const [postsItems,setPostsItems] = useState([]);

    useEffect(() => {
        dispatch(fetchPosts())
    },[])
    useEffect( () => {
        if(posts.length > 0 ) {
            let filesArrs = posts.map( (post) => {
                return  Object.entries(post.files);
            })
            let files = filesArrs.map( (item) => {
                if (item.length > 1) {
                    let objsArr = item.map( (file) => {
                        return file[1]
                    })
                    return objsArr
                } else {
                    return item[0][1]
                }
            })
            setPostsItems(files)
        }
    }, [posts])
    return (
        <div className="list">
            <ul>
                {postsItems.map( (post,index) => {
                        if (post.length === undefined) {
                            return (
                                <li key={index}
                                onClick={()=> {
                                    dispatch(selectPost(post.raw_url))
                                    getLang(post.language)}}
                                >{post.filename}</li>
                            )
                        } else {
                            return (
                                <li key={index}>Group
                                    <ul>
                                        {post.map( (file,index) => {
                                        return (
                                            <li key={index}
                                                onClick={()=> {
                                                    dispatch(selectPost(post.raw_url))
                                                    getLang(post.language)}
                                                }
                                            >{file.filename}</li>
                                        )
                                    })}
                                    </ul>
                                </li>
                            )
                        }
                    }
                )}
            </ul>
        </div>
    );
};

export default List;