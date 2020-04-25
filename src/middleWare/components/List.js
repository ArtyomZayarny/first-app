import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts,selectPost} from "../redux/actions";
import { Accordion, Icon } from 'semantic-ui-react';

const List = (props) => {
    const [activeIndex,setActiveIndex] =  useState(0)
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.items);
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
    
    const handleClick = (titleProps) => {
        const newIndex = activeIndex === titleProps ? -1 : titleProps
        setActiveIndex(newIndex)
      }
  
    return (
        <div className="list">
            <Accordion styled>
                {postsItems.map( (post,index) => {
                        if (post) {
                            if (post.length === undefined) {
                                return (
                                    <Accordion.Title 
                                    key={index}
                                    onClick={()=> {
                                        dispatch(selectPost(post.raw_url,post.language))
    
                                    }}
                                    >{post.filename}</Accordion.Title>
                                )
                            } else {
                                return (
                                  <Accordion styled key={index}>
                                    <Accordion.Title 
                                        active={activeIndex === index}
                                        index={index}
                                        onClick={() => {handleClick(index)}} 
                                        key={index}>
                                    <Icon name='dropdown' />
                                            Group
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === index}>
                                    <ul>
                                         {post.map( (file,index) => {
                                         return (
                                             <li key={index}
                                                 onClick={()=> {
                                                     dispatch(selectPost(file.raw_url,post.language))
                                                 }
                                                 }
                                             >{file.filename}</li>
                                         )
                                     })}
                                     </ul>
                                    </Accordion.Content>
                                    </Accordion>
                                )
                            }
                        }
                    }
                )}
            </Accordion>
        </div>
    );
};

export default List;