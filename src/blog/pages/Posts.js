import React, {useState} from 'react';
import { Container, Dimmer, Loader, Item } from 'semantic-ui-react';
import useData from '../../hooks/useData';
import PostItem from '../PostItem';
import { CSSTransition} from  'react-transition-group'


const Posts = () => {
    const [inProp, setInProp] = useState(false);
    const [posts, isFetching] = useData('/posts', []);
   
    return (
        <Container className='page'>
            <Dimmer active={isFetching} inverted>
                <Loader>Loading...</Loader>
            </Dimmer>
            <CSSTransition in={isFetching} timeout={2000} classNames="my-node">
                <Item.Group className='posts'>
                    {posts.map(post => <PostItem key={post.id} post={post} />)}
                </Item.Group>
            </CSSTransition>
        </Container>
    )
};

export default Posts;