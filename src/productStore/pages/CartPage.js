import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import CartRow from "./CartRow";

const CartPage = (props) => {
let cart = props.cart;
let products = props.products.products; //Array of products
const [cartList, setCartList] = useState([]);

    useEffect( () => {
    if (cart.length > 0) {
        let cartProducts = products.filter( (product) => {
            //Searching if productId is match cartProductID
            if(cart.filter( cartProduct => cartProduct.product === product.id).length > 0) {
                return product
            }
        })
        let cartList = cartProducts.map( cartProduct => {
            return ( <CartRow key={cartProduct.id} product={cartProduct}/>)
        })
        setCartList(cartList);
    }

    },[])

    ;
    return (
        <>
        {cart.length ? cartList : <p>Your cat is empty</p>}
        </>
    );
}
const mapStateToProps = state => {
    return {
        cart: state.cart,
        products:state.products
    }
}
const mapDispatchToProps = dispatch => {
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartPage);