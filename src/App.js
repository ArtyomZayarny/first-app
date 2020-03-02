import React,{Component} from 'react';
import ProductTable from '../src/components/ProductTable'
import AddProductFrom from '../src/components/AddProductFrom'


class App extends Component{
  state = {
    products:[]
  }

  addProduct = (product) => {
     let products =  [...this.state.products, product]
     this.setState({products});
  }

  deleteProduct = (id) => {
     let products = this.state.products.filter( (product) => product.id !== id)
      this.setState({products})
    }
  render() {
    return (
      <>
      { this.state.products.length > 0 &&
          <ProductTable  
          products={this.state.products}
          deleteProduct={this.deleteProduct}/>
      }
        <AddProductFrom addProduct={this.addProduct}/>
      </>
     );
  }
}

export default App;
