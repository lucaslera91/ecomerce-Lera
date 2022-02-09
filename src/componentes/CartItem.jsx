import React from 'react'
import {formatNumber} from '../helper'
import { CartConsumer } from '../context/CartProvider'

function CartItem({item, count, id}) {
    const {removeElement} = CartConsumer();

   const {title, price, cuantity} = item
    
    return (
            <tr>
              <th className='fw-normal' scope="col">{count}</th>
              <th className='fw-normal' scope="col">{title}</th>
              <th className='fw-normal' scope="col">$ {formatNumber(price)}</th>
              <th className='fw-normal' scope="col">{cuantity}</th>
              <th className='fw-normal' scope="col"><i onClick={()=>removeElement(id)} className="far fa-trash-alt fa-2x "></i></th>    
           </tr>
    )
}

export default CartItem