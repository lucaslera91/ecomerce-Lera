import React, {useEffect} from 'react'
import CartItem from './CartItem'
import { CartConsumer } from '../context/CartProvider'

function CartItemList({items}) {
    //get value from cart State
    //show items and add total
    const {cart, setCart} = CartConsumer();
    const aux = []

   function handleDelete(itemId){
    setCart([])
    const aux = items.findIndex(element => element.id == itemId)
        const remove = items.splice(aux,1)
         setTimeout(() => {
            setCart(items) 
         }, 1);
}
useEffect(() => {
    console.log('change')
}, [cart])
    
    if(Array.isArray(items) && items.length > 0){
        return items.map((element) => 
                 <div className='border-bottom d-flex justify-content-center align-items-center col-12'>
                     <CartItem item={element} count={items.indexOf(element)} key={element.id}></CartItem>
                     <div className='d-flex justify-content-center col-2'>
                         <button className='bg-secondary text-light w-75 border border-dark rounded p-0' onClick={()=>handleDelete( element.id)}>Delete</button> 
                     </div>
                 </div>);
    }else{
        return (
                <div>
                    <h3>Add your First Item!</h3>
                    <a className='text-decoration-none text-light' href="../"><button className='bg-light w-25 border border-primary rounded text-primary my-1'>Go to Home!</button></a>
                </div>)
}
  
//    
    

 
}
//handleDelete(items.indexOf(element)
//this.delete.bind(this)
export default CartItemList
{/* <div>
                    <CartItem item={element} key={element.id}></CartItem>
                </div> ) */}
