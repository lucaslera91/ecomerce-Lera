import React from 'react'
import { CartConsumer } from '../context/CartProvider'


function Resume({items}) {
    const {setTotal} = CartConsumer();

    let total = 0
    console.log(items)
    items.forEach(element => {
        setTotal(total += element.cuantity * element.price)
    });
    //setTotal(total)

    if (items.length < 1){
        return <h3>No items in cart</h3>
    }else{
        return (
            <div className=''>
                <h3>Total: {total}</h3>
                <h5>Items: {items.length}</h5>
            </div>
        )
    }
}

export default Resume
