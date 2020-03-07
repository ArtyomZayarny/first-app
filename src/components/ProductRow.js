import React from 'react';

const ProductRow = (props) => {
    let {products,
        deleteProduct,
        editProduct
    } = props;
    let row = products.map( (product) => {
        return (
            <div key = {product.id} className="table__row">
                <span>{product.name}</span>
                <span>{product.category}</span>
                <span>{product.price}</span>
                <span>{product.qty}</span>
                <button
                onClick = {() => {editProduct(product.id)}}
                >Edit</button>
                <button
                onClick = {() =>{deleteProduct(product.id)}}
                >Delete</button>
            </div>
        )
});

    return (
        <>
           {row}
        </>
    );
};

export default ProductRow;