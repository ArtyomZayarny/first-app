import React, {useState} from 'react';
import {connect} from 'react-redux'
import {addToCart} from '../redux/actions/cart'

const Product = (props) => {
    const {id,name, price} = props.product;

    const [btnStatus, setBtnStatus] = useState(true);

    const handleAdd = (id,props) => {
        props.addToCart(id);
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
    addToCart: (id) => dispatch(addToCart(id))
})
export default connect(null,mapDispatchToProps)(Product);