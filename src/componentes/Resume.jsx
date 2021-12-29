import React from 'react'

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
            <div className='border-bottom'>
                <h3>Total: {total}</h3>
                <h5>Items: {items.length}</h5>
                <button className='bg-light  border border-primary rounded text-primary my-1'>Confirm Purchase</button>
            </div>
        )
    }
}

export default Resume
