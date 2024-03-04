import React from 'react'
import './Product.css'
import {useDispatch} from 'react-redux';
import { cartActions } from '../store/cart-slice';

const Product = ({name, id, imageAdd, price}) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch (cartActions.addTocart({
      name,
      id,
      price
    }))
  }
  return (
    <div className='card'>
        <img  className='image-product-container' src={imageAdd} alt={name} />
        <h2 className='product-name'>{name}</h2>
        <p>RM {price}</p>
        <button onClick= {addToCart} className='cart-btn'>
          Add to cart
        </button>
    </div>
  )
}

export default Product