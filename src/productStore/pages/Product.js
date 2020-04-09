import React, {useState} from 'react';
import {connect} from 'react-redux'
import {addProduct} from '../redux/actions/product'

const Product = (props) => {
    const {id,name, price} = props.product;

    const [btnStatus, setBtnStatus] = useState(true);

    const handleAdd = (id,props) => {
        props.addProduct(id);
        setBtnStatus(false);
    }
    return (
            <div>
                <p>{name}</p>
                <p>{price}</p>
                <button className={`${btnStatus ? '' : 'disabled'}`}
                        onClick={ () => { handleAdd(id,props)}}
                >Add to cart</button>
            </div>
    );
};
const mapDispatchToProps = dispatch => ({
    addProduct: (productId) => dispatch(addProduct(productId))
})
export default connect(null,mapDispatchToProps)(Product);