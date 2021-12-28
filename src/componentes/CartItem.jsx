import React from 'react'
import DeleteItem from './DeleteItem'
import { CartConsumer } from '../context/CartProvider'

function CartItem({item, count}) {

   const {title, price, cuantity, picture} = item
   const subtotal = price * cuantity


    return (
        <div className='d-flex align-items-center justify-content-center' style={{height: '100px'}}>
            <h9>{title}</h9>  
            <div className='d-flex flex-column justify-content-start p-1'>
                <h9>${price}</h9>
                <h9><b>#</b> {cuantity}</h9>
            </div>
            <h9><b>Subtotal:</b> {subtotal}</h9>
            <div className="container">
                <img style={{contain: 'contain'}} className='col-md-4 px-0 img-fluid rounded' src={picture} alt="Product Image"/>
            </div>
        </div>
    )
}

export default CartItem
