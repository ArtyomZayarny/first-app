import React from 'react';
import useData from '../../hooks/useData';
import { Container, Dimmer, Loader, List } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom'

//render list of items
const AlbumsPage = () => {
    const [albums,isFetching] = useData('/albums',[])
    return (
        <Container>
            <h2>Welcome to albums page</h2>
            <p>Please select album</p>
            <Dimmer active={isFetching} inverted>
                <Loader>Loading...</Loader>
            </Dimmer>
            <List>
                { albums.map( (album) => {
                    return(
                    <List.Item>
                        <NavLink to={`/users/${album.userId}/albums/${album.id}`}>{album.title}</NavLink>
                    </List.Item>               
                    )
                    
                }) }
            
            </List>
            

        </Container>
    );
};

export default AlbumsPage;