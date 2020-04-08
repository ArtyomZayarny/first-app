import React from 'react';
import {connect} from 'react-redux'
import {addProduct} from '../redux/actions/product'

const ProductsPage = (props) => {

    return (
        <div>
            { props.products.products.map( (product) => {
                return (
                    <div key={product.id}>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <button
                        onClick={ () => {props.addProduct(product.id)} }
                        >Add to cart</button>
                    </div>
                )
            }) }
        </div>
    );
};
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = dispatch => ({
    addProduct: (productId) => dispatch(addProduct(productId))
})

export default connect(mapStateToProps,mapDispatchToProps)(ProductsPage);