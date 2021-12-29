import React, {useEffect} from 'react'
import CartItemList from '../componentes/CartItemList'
import { CartConsumer } from '../context/CartProvider'
import Resume from './Resume';

function CartView() {

    const {cart, setCart} = CartConsumer();
    useEffect(() => {
      setCart(cart)
    }, [cart])

    return (
        <div className='text-light' style={{minHeight: '100vh'}}>
            <h1>Checkout cart</h1>
            <Resume items={cart}/>
            <CartItemList items={cart}></CartItemList>
        </div>
    )
}

export default CartView
