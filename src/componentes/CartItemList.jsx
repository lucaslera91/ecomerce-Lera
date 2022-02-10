import React from 'react'
import CartItem from './CartItem'

function CartItemList({items}) {
    
    if(items.length > 0){
    return (
        <table class="table table-hover">
            <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Item</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Eliminar</th>
                </tr>
            </thead>
        <tbody>
            {items.map((element) => 
                        <CartItem item={element} count={items.indexOf(element)} id={element.id} key={element.id}></CartItem>
            )}
            </tbody>
        </table>
           )
        
    }else{
        return (
            <div>
                <h3>Add your First Item!</h3>
                <a className='text-decoration-none text-dark' href="../">
                    <button className='bg-light border-primary w-25 border rounded text-primary my-1'>
                        Go to Home!
                    </button>
                </a>
            </div>)
}
}
export default CartItemList
