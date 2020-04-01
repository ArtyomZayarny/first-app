import React from 'react'
import useData from '../../hooks/useData';
import { Container, Dimmer, Loader, List } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

export default function UsersPage() {
    const [users, isFetching] = useData('/users', []);
    return (
          <Container >
                <h2>Users list</h2>
                <Dimmer active={isFetching} inverted>
                    <Loader>Loading...</Loader>
                </Dimmer>
                <List>
                {users.map((user) => {
                    return(
                        <List.Item>
                            <NavLink to={`users/${user.id}`} key={user.id}  >{user.name}</NavLink>
                        </List.Item>
                        )
                    })}
                 </List>
                   
                
            </Container>
    )
}
