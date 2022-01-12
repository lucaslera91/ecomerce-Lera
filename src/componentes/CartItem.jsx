import React from 'react'
import DeleteItem from './DeleteItem'
import { CartConsumer } from '../context/CartProvider'

function CartItem({item, count}) {

   const {title, price, cuantity, picture} = item
   const subtotal = price * cuantity


    return (
        <div className='d-flex align-items-center justify-content-center container' style={{minHeight: '100px'}}>
            <h5 className='col-sm-4 col-4'>{title}</h5>  
            <div className='d-flex flex-column justify-content-start p-1'>
                <h5>${price}</h5>
                <h5><b>#</b> {cuantity}</h5>
            </div>
            <h5><b>Subtotal:</b> {subtotal}</h5>
            <div className="container">
                <img style={{contain: 'contain'}} className='col-sm-4 col- px-2 img-fluid rounded' src={picture} alt="Product Image"/>
            </div>
        </div>
    )
}

export default CartItem
//{ buyer: { name, phone, email }, items: [{ id, title, price }], date, total  }