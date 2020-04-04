import React from 'react';
import useData from '../../hooks/useData';
import { Container, Dimmer, Loader, List } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom'
import { CSSTransition} from  'react-transition-group'

//render list of items
const AlbumsPage = () => {
    const [albums,isFetching] = useData('/albums',[])
    return (
        <Container>
            
            <Dimmer active={isFetching} inverted>
                <Loader>Loading...</Loader>
            </Dimmer>
            <CSSTransition in={isFetching} timeout={2000} classNames="my-node">
                <List>
                    <h2>Welcome to albums page</h2>
                    <p>Please select album</p>
                    { albums.map( (album) => {
                        return(
                        <List.Item>
                            <NavLink to={`/users/${album.userId}/albums/${album.id}`}>{album.title}</NavLink>
                        </List.Item>               
                        )
                    }) }
                </List>
            </CSSTransition>
        </Container>
    );
};

export default AlbumsPage;