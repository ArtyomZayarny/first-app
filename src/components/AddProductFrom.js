import React, { Component } from 'react';
import shortid from 'shortid';

class AddProductFrom extends Component {
state = {
    name:'',
    category:'',
    price:'',
    qty:''
}
 componentDidUpdate(prevProps) {
     if (prevProps.id !== this.props.id) {
        let {
            id,
            name,
            category,
            price,
            qty
        } = this.props.product;
        
        this.setState({
            id:id,
            name:name,
            category:category,
            price:price,
            qty:qty
        })
     }   
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
    //Clear all fields
    this.setState({
        id:'',
        name:'',
        category:'',
        price:'',
        qty:''
    })
}
serializeForm = (type ='add') => {
    
    const result = {};
    if (type === 'add' ) {
        result.id       = shortid.generate();
    }
    result.name     = this.state.name;
    result.category = this.state.category;
    result.price    = this.state.price;
    result.qty      = this.state.qty; 
    return result
}
   
handleSubmit= (e,type) => {
    e.preventDefault();
    let product = null;
    switch(type) {
            case 'add':         
                product = this.serializeForm()
                this.props.addProduct(product);
                this.clearForm();
            break;
            case 'edit':
                product = this.serializeForm('edit')
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
            <form onSubmit={ (e) =>{this.handleSubmit(e,type)}} >
               <p> 
                   <label><span>Name</span>
                    <input 
                        value={this.state.name}
                        onChange = {(e) => {this.handleName(e)}}
                        type="text"
                        required={true}
                    />
                    </label>
                </p>
                <p>
                    <label><span>Category</span>
                    <input 
                        value={this.state.category}
                        onChange = {(e) => {this.handleCategory(e)}}
                        type="text"
                        required={true}
                    />
                </label>
                </p>
                <p>
                    <label><span>Price</span>
                    <input 
                        value={this.state.price}
                        onChange = {(e) => {this.handlePrice(e)}}
                        type="number"
                        required={true}
                    />
                </label></p>
                <p> <label><span>Quantity</span>
                    <input 
                        value={this.state.qty}
                        onChange = {(e) => {this.handleQty(e)}}
                        type="number"
                        required={true}
                    />
                </label></p>
                <p><button type="submit" className={action}>{action} product</button></p>
            </form>
        );
    }
}

export default AddProductFrom;