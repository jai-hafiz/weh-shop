import React from 'react'
import PRODUCTS_WEH from './Storeproducts'
import Product from './Product'


const Products = () => {
  return (
    <div>
        <ul className='products-container'>
            {PRODUCTS_WEH.map((product,index) => (
                <li key={index}>
                    <Product id={product.id} name={product.name} imageAdd={product.imageAdd} price={product.price} />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Products



 


