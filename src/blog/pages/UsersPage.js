import React from 'react'
import useData from '../../hooks/useData';
import { Container, Dimmer, Loader, List } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import { CSSTransition} from  'react-transition-group'

export default function UsersPage() {
    const [users, isFetching] = useData('/users', []);
    return (
          <Container >
            <Dimmer active={isFetching} inverted>
                <Loader>Loading...</Loader>
            </Dimmer>
            <CSSTransition in={isFetching} timeout={2000} classNames="my-node">
                <List>
                <h2>Users list</h2>
                {users.map((user) => {
                    return(
                        <List.Item>
                            <NavLink to={`users/${user.id}`} key={user.id}  >{user.name}</NavLink>
                        </List.Item>
                        )
                    })}
                </List>
            </CSSTransition>
            </Container>
    )
}
