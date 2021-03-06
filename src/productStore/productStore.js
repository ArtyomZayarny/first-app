import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link,withRouter } from "react-router-dom";
import { Container, Menu } from 'semantic-ui-react';
import ProductsPage from './pages/ProductsPage';
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import {connect} from 'react-redux'



const ProductStore = (props) => {
    const LS = localStorage;
    let productsAmount = LS.getItem('cart');

    console.log(productsAmount);
    return(
            <Router>
                <Container>
                    <Menu>
                        <Link to="/" className='item' activeClassName='active-nav'>Home</Link>
                        <Link to="/products" className='item' activeClassName='active-nav'>Products</Link>
                        <Link to="/cart" className='item cart' activeClassName='active-nav'>
                            <div className="cart">
                                <span>{productsAmount}</span>
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
    )
}
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps,null)(ProductStore)