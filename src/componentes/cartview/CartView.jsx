import React from 'react'
import { Link } from 'react-router-dom';
import CartItemList from '../CartItemList'
import { CartConsumer } from '../../context/CartProvider'
import Resume from '../Resume';
import '../cartview/cartView.css'

function CartView() {

    const {cart, setCart} = CartConsumer();
    
    if (cart.length < 1){
        return <div className='text-dark' style={{minHeight: '100vh'}}>
                <h3>No items in cart. Make your first purchase</h3>
                <Link to='/'><button className='bg-light rounded-xl border border-secondary text-primary'>Back to home</button></Link>
            </div>
    }else{
        return (
            <div className='firstDiv'>
                <div className='text-dark col-12 col-sm-8'>
                        <h1>Checkout cart</h1>

                    <Resume items={cart}/>

                    <div className='buttonsCart'>
                    <Link to='/checkout'>
                        <button className='rounded-xl border border-secondary text-primary'>
                            Check out order
                        </button>
                    </Link>

                    <button 
                        onClick={() => setCart([])} 
                        className='bg-light rounded-xl border border-secondary text-danger'>
                            Empty Cart
                    </button>
                    </div>
   
                    <div className='cartItemHelperStyle my-2'>
                        <CartItemList items={cart}></CartItemList>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartView

