import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import {BrowserRouter as Router,Switch,Route,Link,withRouter } from "react-router-dom";
import { Container, Menu } from 'semantic-ui-react';
import ProductsPage from './pages/ProductsPage';
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'


const ProductStore = () => {

    return(
        <Provider store={store}>
            <Router>
                <Container>
                    <Menu>
                        <Link to="/" className='item' activeClassName='active-nav'>Home</Link>
                        <Link to="/products" className='item' activeClassName='active-nav'>Products</Link>
                        <Link to="/cart" className='item cart' activeClassName='active-nav'>
                            <div className="cart">
                                <span>0</span>
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            </div>
                        </Link>
                    </Menu>
                    <Switch>
                        <Route path="/" exact>
                            <HomePage />
                        </Route>
                        <Route path="/products" exact>
                            <ProductsPage />
                        </Route>
                        <Route path="/cart" exact>
                            <CartPage />
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </Provider>
    )
}
export default ProductStore