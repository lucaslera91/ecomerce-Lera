import React from 'react'
import ItemCount from './ItemCount'

function CartItem({item, count}) {
   const {title, price, cuantity, picture} = item
   const subtotal = price * cuantity
    return (
        <div className='border-bottom'>
            <h1>Item {count + 1}: {title}</h1>  
            <div className='d-flex justify-content-center'>
                <h1><b>Price:</b> ${price} - </h1>
                <h1><b>Cuantity:</b> {cuantity}</h1>
            </div>
            <h1><b>Subtotal:</b> {subtotal}</h1>
            <img className='img-fluid border border-2 border-secondary rounded my-2' src={picture} alt="Product Image"/>
            <div>
                <ItemCount text='light' stock={item.stock} start={1} item={item}></ItemCount>
            </div>
        </div>
    )
}

export default CartItem
