import React,{Component} from 'react';
import ProductTable from '../src/components/ProductTable'
import AddProductFrom from '../src/components/AddProductFrom'


class App extends Component{
  state = {
    products:[],
    id:'',
    product:'',
    type:'add'
  }

  addProduct = (product) => {
     let products =  [...this.state.products, product]
     this.setState({products});
  }

  deleteProduct = (id) => {
     let products = this.state.products.filter( (product) => product.id !== id)
      this.setState({products})
    }

    editProduct = (id) => {
      //Catch product to edit
      let product = this.state.products.filter(product => id === product.id);
       this.setState({
         type:'edit',
         id:product[0].id,
         product:product[0]
       });
    }
    updateProduct = (product) => {
      let products = [...this.state.products]
      products.map( (item) => {
        if(item.id === this.state.id) {
         return  Object.assign(item,product);
          
        }
        return item
      })
      
      this.setState({
        products:products,
        id:'',
        product:'',
        type:'add'
    })
    }
  render() {
    return (
      <>
      { this.state.products.length > 0 &&
          <ProductTable  
          products={this.state.products}
          deleteProduct={this.deleteProduct}
          editProduct={this.editProduct}
          />
      }
        <AddProductFrom 
            type={this.state.type}
            id={this.state.id}
            product={this.state.product}
            addProduct={this.addProduct}
            updateProduct={this.updateProduct}
            />
      </>
     );
  }
}

export default App;
