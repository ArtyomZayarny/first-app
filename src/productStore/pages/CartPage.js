import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import CartRow from "./CartRow";



const CartPage = (props) => {
let cart = props.cart;
let products = props.products.products; //Array of products
const [cartList, setCartList] = useState([]);

    useEffect( () => {
    if (cart.length > 0) {
        let cartList = cart.map( cartProduct => {
            let obj ={};
            products.map( (product) => {
                if(cartProduct.id === product.id) {
                    obj = Object.assign(cartProduct,product)
                }
            })
             return ( <CartRow key={cartProduct.id} product={obj} />)
        })

        setCartList(cartList);
    }

    },[props.cart])


    return (
        <div className='cart-list'>
        {cart.length ? cartList : <p>Your cart is empty</p>}
        </div>
    );
}
const mapStateToProps = state => {
    return {
        cart: state.cart,
        products:state.products
    }
}

export default connect(mapStateToProps,null)(CartPage);