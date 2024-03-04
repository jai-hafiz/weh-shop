import React from 'react'
import './Navbar.css'
import Cart from './Cart'
import IMG from '../images/logo-shop.png'




function Navbar() {
    
    
   
  return (
    <div className='bar-container'>
        <nav>
            <ul>
                <div>
                    <li>
                        <h2 class='shop-weh-res'>
                            SHOP WEH
                        </h2>
                        <img className='shop-logo-size' src={IMG} alt='' />
                    </li>
                </div>
                <div className='cart-log-div'>
                    <li className='cart-gap'>
                        <Cart/>
                    </li>
                    
                </div>
                   
                
                
            </ul>
        </nav>
    </div>
  )
}

export default Navbar