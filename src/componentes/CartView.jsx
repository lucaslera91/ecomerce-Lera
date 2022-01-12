import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import CartItemList from '../componentes/CartItemList'
import { CartConsumer } from '../context/CartProvider'
import Resume from './Resume';

function CartView() {

    const {cart, setCart} = CartConsumer();
    useEffect(() => {
      setCart(cart)
    }, [cart])

    
        if (cart.length < 1){
            return <div className='text-light' style={{minHeight: '100vh'}}>
                    <h3>No items in cart</h3>
                </div>
        }else{
            return (
            <div className='text-light' style={{minHeight: '100vh'}}>
                <h1>Checkout cart</h1>
                <Resume items={cart}/>
                <Link to='/checkout'><button className='bg-light rounded text-primary my-1'>Check out order</button></Link>
                <span className='border-bottom'></span>
                <CartItemList items={cart}></CartItemList>
            </div>
            )
        }
}

export default CartView
