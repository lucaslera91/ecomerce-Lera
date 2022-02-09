import React from 'react'
import { Link } from 'react-router-dom';
import CartItemList from '../componentes/CartItemList'
import { CartConsumer } from '../context/CartProvider'
import Resume from './Resume';

function CartView() {

    const {cart, setCart} = CartConsumer();
    
    if (cart.length < 1){
        return <div className='text-dark' style={{minHeight: '100vh'}}>
                <h3>No items in cart. Make your first purchase</h3>
                <Link to='/'><button className='bg-light rounded text-primary my-1'>Back to home</button></Link>
            </div>
    }else{
        return (
            <div className='d-flex justify-content-center'>
                <div className='text-dark col-10 col-sm-8' style={{minHeight: '100vh'}}>
                    <h1>Checkout cart</h1>
                    <Resume items={cart}/>
                    <Link to='/checkout'><button className='bg-light rounded text-primary m-1'>Check out order</button></Link>
                    <span className='border-bottom'></span>
                    <button onClick={() => setCart([])} className='bg-light rounded text-danger m-1'>Empty Cart</button>
                    <CartItemList items={cart}></CartItemList>
                </div>
            </div>
        )
    }
}

export default CartView

//<table class="table table-hover">
//  <thead>
//    <tr>
//      <th scope="col">#</th>
//      <th scope="col">Item</th>
//      <th scope="col">Precio</th>
//      <th scope="col">Cantidad</th>
//      <th scope="col">Subtotal</th>
//      <th scope="col">Eliminar</th>
//    </tr>
//  </thead>
//  <tbody>    
//    <tr>
//      <th scope="row">1</th>
//      <td>Mark</td>
//      <td>Otto</td>
//      <td>@mdo</td>
//    </tr>
//    <tr>
//      <th scope="row">2</th>
//      <td>Jacob</td>
//      <td>Thornton</td>
//      <td>@fat</td>
//    </tr>
//    <tr>
//      <th scope="row">3</th>
//      <td colspan="2">Larry the Bird</td>
//      <td>@twitter</td>
//    </tr>
//  </tbody>
//</table