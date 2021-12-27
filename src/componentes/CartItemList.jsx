import React from 'react'
import CartItem from './CartItem'
import { CartConsumer } from '../context/CartProvider'
function CartItemList() {
    //get value from cart State
    //show items and add total
    const {cart} = CartConsumer();
    console.log(cart)
    cart.forEach(element => {
    console.log(element)
       return (<h1>Hi</h1>)
    });

    if(Array.isArray(cart) && cart.length > 0){
        return cart.map((element) => <CartItem item={element} count={cart.indexOf(element)} key={element.id}></CartItem>);
    }else{
        return (
                <div>
                    <h3>Add your First Item!</h3>
                    <a className='text-decoration-none text-light' href="../"><button className='bg-light w-25 border border-primary rounded text-primary my-1'>Go to Home!</button></a>
                </div>)
}
}

export default CartItemList
{/* <div>
                    <CartItem item={element} key={element.id}></CartItem>
                </div> ) */}
