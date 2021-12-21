import React from 'react'
import { CartConsumer } from '../context/CartProvider'

export default function BtnAddToCart({data}) {
    function eventHandle(){
        alert('Add to cart '+ data )
    }
    const {cart} = CartConsumer();
    return (
        <div>
            {cart}
        </div>
    )
}
//onClick={()=> eventHandle()}