import React from 'react';
import {connect} from 'react-redux'

const ProductsPage = (props) => {

    return (
        <div>
            {/* {props.products.map( (product) => {
                return (
                    <div>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <button
                        onClick={()=>{}}
                        >Add to cart</button>
                    </div>
                )
            })} */}
        </div>
    );
};
const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps,null)(ProductsPage);