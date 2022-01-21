import React from 'react'
import { CartConsumer } from '../context/CartProvider'

export default function BtnAddToCart() {
    const {cart} = CartConsumer();
    return (
        <div>
            {cart}
        </div>
    )
}