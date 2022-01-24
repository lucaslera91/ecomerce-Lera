import React, { useEffect } from 'react'
import { CartConsumer } from '../context/CartProvider'


function Resume({items}) {
    const {cart, total, setTotal} = CartConsumer();

    useEffect(()=>{
        setTotal((items.reduce((a,v) =>  a = a + (v.cuantity * v.price) , 0 )))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cart])

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
