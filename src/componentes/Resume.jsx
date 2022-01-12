import React from 'react'
import { Link } from 'react-router-dom';

function Resume({items}) {
    let total = 0
    console.log(items)
    items.forEach(element => {
        total += element.cuantity * element.price
    });




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
