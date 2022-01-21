import React from 'react'

export default function CartWidget({color}) {
    let classColor = `fas fa-shopping-cart text-${color} px-2`
    return (
        <div className='text-decoration-none'>
          <i className={classColor}></i>
        </div>
    )
}
