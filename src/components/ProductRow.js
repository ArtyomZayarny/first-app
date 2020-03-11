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
                <div className="btns">
                    <button
                    onClick = {() => {editProduct(product.id)}}
                    ><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                    <button
                    onClick = {() =>{deleteProduct(product.id)}}
                    ><i className="fa fa-trash" aria-hidden="true"></i></button>
                </div>
            </div>
        )
});
 
    return (
        <>
           
           {products.length > 0 ? row : <p>Список товаров пуст</p>}
        </>
    );
};

export default ProductRow;