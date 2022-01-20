import React, {useEffect} from 'react'
import CartItem from './CartItem'
import { CartConsumer } from '../context/CartProvider'

function CartItemList({items}) {
    //get value from cart State
    //show items and add total
    const {cart, setCart, removeElement} = CartConsumer();
    //const aux = []
    

useEffect(() => {
    console.log('change')
}, [cart])
    
    if(Array.isArray(items) && items.length > 0){
        return items.map((element) => 
                 <div className='d-flex justify-content-center align-items-center col-md-12 '>
                    <div className='d-flex justify-content-between'>
                        <CartItem item={element} count={items.indexOf(element)} key={element.id}></CartItem>
                        <div className='d-flex justify-content-center align-items-center'>
                            <i onClick={()=>removeElement( element.id)} class="far fa-trash-alt fa-2x "></i> 
                        </div>
                    </div>
                 </div>);
    }else{
        return (
                <div>
                    <h3>Add your First Item!</h3>
                    <a className='text-decoration-none text-dark' href="../"><button className='bg-light w-25 border border-primary rounded text-primary my-1'>Go to Home!</button></a>
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
