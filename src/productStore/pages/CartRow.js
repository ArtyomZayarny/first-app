import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {removeFromCart,increaseProductQty,decreaseProductQty} from "../redux/actions/cart";
import {Button} from "semantic-ui-react";

const CartRow = (props) => {
   const {id, name, price, quantity} = props.product;
   const totalPrice = price * quantity;
    return (

        <div className='cart-row'>
            <span>{name}</span>
            <div className="counter">
                <button className={`${quantity === 1 ? 'disallow' : ''}`}
                        onClick={()=> {props.decreaseProductQty(id)}}
                >-</button>
                <span className="qty">{quantity}</span>
                <button
                    onClick={ ()=> {props.increaseProductQty(id)} }
                >+</button>
            </div>
            <span>{totalPrice} $</span>
            <Button
                onClick={()=>{props.removeFromCart(id)}}
            >
                remove
            </Button>
        </div>

    );
};
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id)=>{ dispatch(removeFromCart(id)) },
        increaseProductQty : (id)=>{dispatch( increaseProductQty(id) )},
        decreaseProductQty : (id)=>{dispatch( decreaseProductQty(id) )}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartRow);