import React from 'react'
import {formatNumber} from '../helper'
function CartItem({item}) {

   const {title, price, cuantity} = item
   const subtotal = price * cuantity

    return (
        <div className='d-flex flex-column align-items-center col-10'  >
           
                <div className='d-flex align-items-center justify-content-center container  mx-auto' style={{minHeight: '100px'}}>
                <div className='d-flex flex flex-column align-items-center px-1 '>
                    <p className='d-flex align-items-center' style={{minHeight: '50px'}}>{title}</p>  
                </div>
                <div className='d-flex flex flex-column align-items-center px-2 border-left'>
                    <p className='d-flex align-items-center'  style={{minHeight: '50px'}}>${formatNumber(price)}</p>
                </div>
                <div className='d-flex flex flex-column justify-content-center align-items-center px-2 border-left'>
                    <p className='d-flex align-items-center' style={{minHeight: '50px'}}> {formatNumber(cuantity)}</p>
                </div>
                <div className='d-flex flex flex-column align-items-center px-2 border-left'>
                    <p className='d-flex align-items-center'  style={{minHeight: '50px'}}>${formatNumber(subtotal)}</p>
                </div>
           
            </div>
            <div className='border-dark border-bottom w-75'></div>
        </div>
    )
}

export default CartItem