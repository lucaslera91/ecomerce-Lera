import React from 'react'
import CartItem from './CartItem'
import { CartConsumer } from '../context/CartProvider'

function CartItemList({items}) {
    const {removeElement} = CartConsumer();
    
    if(items.length > 0){
        return items.map((element) => 
                 <div key={element.id} className='d-flex justify-content-center align-items-center col-11'>
                    <div className='d-flex justify-content-between col-md-9'>
                        
                        <CartItem item={element} count={items.indexOf(element)} key={element.id}></CartItem>
                        <div className='d-flex justify-content-center align-items-center col-3'>
                            <i onClick={()=>removeElement( element.id)} className="far fa-trash-alt fa-2x "></i> 
                        </div>
                    </div>
                 </div>);
    }else{
        return (
                <div>
                    <h3>Add your First Item!</h3>
                    <a className='text-decoration-none text-dark' href="../computers"><button className='bg-light w-25 border border-primary rounded text-primary my-1'>Go to Home!</button></a>
                </div>)
}
}
export default CartItemList
