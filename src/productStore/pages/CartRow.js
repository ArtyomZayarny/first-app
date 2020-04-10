import React from 'react';

const CartRow = (props) => {
    const {id, name, price } = props.product;
    return (
        <div className='cart-row'>
            <span>{name}</span>
            <span>{price}</span>
            <button>remove</button>
        </div>
    );
};

export default CartRow;