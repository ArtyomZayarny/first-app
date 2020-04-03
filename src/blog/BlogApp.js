import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link,withRouter } from "react-router-dom";
import { Menu, Header, Container, } from 'semantic-ui-react';
import Home from './pages/Home';
import Posts from './pages/Posts';
import UserPage from './pages/UserPage'
import UsersPage from './pages/UsersPage';
import Albums from './pages/AlbumsPage';

import {TransitionGroup, CSSTransition} from  'react-transition-group'


const BlogApp = () => {
    return (
        <Container>
            <Router>
          
                <Header>
                    <Link to='/'><h2>G-blog</h2></Link>
                </Header>
                
                <Menu>
                    <Link to='/posts' className='item' activeClassName='active-nav'>Posts</Link>
                    <Link to='/users' className='item' activeClassName='active-nav'>Users</Link>
                    <Link to='/albums' className='item' activeClassName='active-nav'>Albums</Link>
                </Menu> 
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/posts" exact>
                        <Posts />
                    </Route>
                    <Route path="/users" exact>
                        <UsersPage />
                    </Route>
                    <Route path="/users/:userId">
                        <UserPage />
                    </Route>
                    <Route path="/albums" exact>
                        <Albums />
                    </Route>
                </Switch>
             </Router>
        </Container>
    );
};

export default BlogApp;