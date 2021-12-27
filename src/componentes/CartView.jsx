import React from 'react'
import CartItemList from '../componentes/CartItemList'
function CartView() {
    return (
        <div className='text-light' style={{minHeight: '100vh'}}>
            <h1>Cart!</h1>
            <CartItemList></CartItemList>
        </div>
    )
}

export default CartView
