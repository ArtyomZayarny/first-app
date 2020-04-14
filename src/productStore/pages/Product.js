import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import {addToCart} from '../redux/actions/cart'
import {Button} from "semantic-ui-react";

const Product = (props) => {
    const {id,name, price} = props.product;
    const [btnStatus, setBtnStatus] = useState(true);
    const handleAdd = (id,props) => {
        props.addToCart(id);
        setBtnStatus(false);
    }

    useEffect( ()=> {
        //Check if product is already in cart
        if(props.cart.length > 0) {
            props.cart.map( (cartProduct) => {
                if(cartProduct.id === id) {
                    setBtnStatus(false)
                }
            })
        }
    },[])
    return (
            <div className='card'>
                <h3>{name}</h3>
                <p>${price}</p>
                <Button
                    className={`${btnStatus ? '' : 'disabled'}`}
                    onClick={ () => { handleAdd(id,props)}}
                >
                    Add to cart
                </Button>

            </div>
    );
};
const mapStateToProps = state => {
    return {
        cart:state.cart
    }
}
const mapDispatchToProps = dispatch => ({
    addToCart: (id) => dispatch(addToCart(id))
})
export default connect(mapStateToProps,mapDispatchToProps)(Product);