import React from 'react'

function CartItem({item}) {

   const {title, price, cuantity, picture} = item
   const subtotal = price * cuantity


    return (
        <div className='d-flex flex-column align-items-start col-10'>
            <div className='d-flex align-items-center justify-content-center container  mx-auto' style={{minHeight: '100px'}}>
            <h5 className='col-md-4 col-4'>{title}</h5>  
            <div className='d-flex flex-column justify-content-start p-2'>
                <h5 className='col-12 p-1'>${price}</h5>
                <h5 className='col-12  p-1'><b>#</b> {cuantity}</h5>
            </div>
            <h5 className='col-3 p-1'><b>Subtotal:</b> {subtotal}</h5>
            <div className="container p-1 d-flex align-items-center justify-content-center" >
                <img  className=' img-fluid rounded' style={{ minwidth: '150px', height: 'auto', width: '1000px'}} src={picture} alt=""/>
            </div>
            </div>
            <div className='border-dark border-bottom w-75'></div>
        </div>
    )
}

export default CartItem