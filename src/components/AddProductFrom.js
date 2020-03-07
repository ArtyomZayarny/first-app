import React, { Component } from 'react';
import shortid from 'shortid';

class AddProductFrom extends Component {
state = {
    name:'',
    category:'',
    price:'',
    qty:''
}
 shouldComponentUpdate(nextProps) {
 
     if(nextProps.id !== this.props.id) {

        let {
            id,
            name,
            category,
            price,
            qty
         } = nextProps.product

        this.setState({
            id:id,
            name:name,
            category:category,
            price:price,
            qty:qty
        })
         
     }
     return true
     
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
clearForm = () => {
    console.log('clear')
    //Clear all fields
    this.setState({
        id:'',
        name:'',
        category:'',
        price:'',
        qty:''
    })
}
serializeForm = (product,type ='add') => {
    if (type === 'add' ) {
        product.id       = shortid.generate();
    }
    product.name     = this.state.name;
    product.category = this.state.category;
    product.price    = this.state.price;
    product.qty      = this.state.qty; 
    return product
}
   
handleSubmit= (e,type) => {
    e.preventDefault();
    let product = {};
    switch(type) {
            case 'add':         
                this.serializeForm(product)
                this.props.addProduct(product);
                this.clearForm();
            break;
            case 'edit':
                this.serializeForm(product,'edit')
                this.props.updateProduct(product);
                this.clearForm();
            break;
            default:console.log('type is not defined');
    }
}

    render() {
        const { type } = this.props;
        let action = type === 'edit' ? 'Save' : 'Add';
       
        return (
            <form 
                onSubmit={ (e) =>{this.handleSubmit(e,type)}}
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
                <p><button type="submit">{action} product</button></p>
            </form>
        );
    }
}

export default AddProductFrom;