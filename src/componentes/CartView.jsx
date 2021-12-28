import React, {useEffect} from 'react'
import CartItemList from '../componentes/CartItemList'
import { CartConsumer } from '../context/CartProvider'
import Resume from './Resume';

function CartView() {

    const {cart, setCart} = CartConsumer();
    useEffect(() => {
      setCart(cart)
      //alert('deleted, this is new cart' + cart)
    }, [cart])

    return (
        <div className='text-light' style={{minHeight: '100vh'}}>
            <h1>Cart!</h1>
            <Resume items={cart}/>
            <CartItemList items={cart}></CartItemList>
        </div>
    )
}

export default CartView
