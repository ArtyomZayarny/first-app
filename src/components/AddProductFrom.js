import React, { Component } from 'react';
import shortid from 'shortid';

class AddProductFrom extends Component {
state = {
    name:'',
    category:'',
    price:'',
    qty:''
}

handleName = (e) => {
    this.setState({
        name:e.target.value
    })
}
handleCategory = (e) => {
    this.setState({
        category:e.target.value
    })
}
    
handlePrice = (e) => {
    this.setState({
        price:e.target.value
    })
}
handleQty = (e) => {
    this.setState({
        qty:e.target.value
    })
}
handleAdd = (e) => {
    e.preventDefault()
    let product = {};
    product.id       = shortid.generate();
    product.name     = this.state.name;
    product.category = this.state.category;
    product.price    = this.state.price;
    product.qty      = this.state.qty; 

    this.props.addProduct(product);
    //Clear all fields
    this.setState({
        name:'',
        category:'',
        price:'',
        qty:''
    })
}
    render() {
        const {addProduct} = this.props
        return (
            <>
            <form 
            onSubmit={ (e) =>{
                e.preventDefault()
                this.handleAdd(e)}
            }
            >
               <p> <label>Name
                    <input 
                    value={this.state.name}
                    onChange = {(e) => {this.handleName(e)}}
                    type="text"/>
                </label></p>
                <p> <label>Categoty
                    <input 
                    value={this.state.category}
                    onChange = {(e) => {this.handleCategory(e)}}
                    type="text"/>
                </label></p>
                <p> <label>Price
                    <input 
                    value={this.state.price}
                    onChange = {(e) => {this.handlePrice(e)}}
                    type="text"/>
                </label></p>
                <p> <label>Quantity
                    <input 
                    value={this.state.qty}
                    onChange = {(e) => {this.handleQty(e)}}
                    type="text"/>
                </label></p>
                <p><button type="submit">Add product</button></p>
            </form>
                
            </>
        );
    }
}

export default AddProductFrom;