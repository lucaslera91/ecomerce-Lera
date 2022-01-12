import React, {useState } from 'react'
import { CartConsumer } from '../context/CartProvider'
//i should delete this file
function DeleteItem({count}) {

    const {deleteElementInCart} = CartConsumer();

    return (
       <h1>x</h1>
    )
}

export default DeleteItem
