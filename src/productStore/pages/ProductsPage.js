import React,{useState} from 'react';
import {connect} from 'react-redux'
import Product from "./Product";


const ProductsPage = (props) => {

    const productList =  props.products.products.map( (product) => {
                        return (<Product key={product.id} product={product} />)})

    return (
        <>
            {productList}
        </>
    );
};
const mapStateToProps = state => {
    return {
        products: state.products,
    }
}


export default connect(mapStateToProps,null)(ProductsPage);