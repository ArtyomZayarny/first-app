import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { Menu, Header } from 'semantic-ui-react';
import Home from './Home';
import Posts from './Posts';
import Users from './Users';
import Albums from './Albums';

const BlogApp = () => {
    return (
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
                    <Users />
                </Route>
                <Route path="/albums" exact>
                    <Albums />
                </Route>
            </Switch>
        </Router>
    );
};

export default BlogApp;