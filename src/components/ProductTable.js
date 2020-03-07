import React from 'react'
import ProductRow from '../components/ProductRow'


const ProductTable = (props) => {
let {products,
    deleteProduct,
    editProduct
} = props;

    return(
        <div className="table">
           <div className="table__head">
               <span>Name</span>
               <span>Catgoty</span>
               <span>Price</span>
               <span>Quantity</span>
               <span>Action</span>
           </div>
            <ProductRow 
                products={products}
                deleteProduct={deleteProduct}
                editProduct={editProduct}
                />
        </div>
    )
}

export default ProductTable