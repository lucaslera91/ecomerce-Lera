import React from 'react'

function Resume({items}) {
    if (items.length < 1){
        return <h3>No items in cart</h3>
    }else{
        return (
            <div className='border-bottom bg-danger'>
                <h3>Total:</h3>
                <h5>Items:</h5>
                <button className='bg-light  border border-primary rounded text-primary my-1'>Confirm Purchase</button>
            </div>
        )
    }
}

export default Resume
