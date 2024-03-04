import React from 'react'
import { useSelector } from 'react-redux';


const Cart = () => {
  const quantity = useSelector ((state) => state.cart.totalQuantity);
  
  
  return (
    <div>
        <h3 >Cart : {quantity} Items</h3>
    </div>
  )
}

export default Cart;