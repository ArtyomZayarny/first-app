import React from 'react'
import ProductRow from '../components/ProductRow'


const ProductTable = (props) => {
let {products,deleteProduct} = props;


const ProductList = products.map((product) => { 
    return (<ProductRow 
                key={product.id} 
                product={product}
                deleteProduct={deleteProduct}
        />)
     })

    return(
        <div className="table">
           <div className="table__head">
               <span>Name</span>
               <span>Catgoty</span>
               <span>Price</span>
               <span>Quantity</span>
               <span>Action</span>
           </div>
            {ProductList}
        </div>
    )
}

export default ProductTable