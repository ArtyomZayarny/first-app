import React from 'react'


const ProductRow = (props) => {
const {id,name,category,price,qty} = props.product;
const {deleteProduct} = props;
    return(
        <>
            <p>
                <span>{name}</span>
                <span>{category}</span>
                <span>{price}</span>
                <span>{qty}</span>
                <button
                onClick = {() =>{deleteProduct(id)}}
                >Delete</button>
            </p>
        </>
    )
}
export default ProductRow