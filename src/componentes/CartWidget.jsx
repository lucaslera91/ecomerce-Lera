import React from 'react'

export default function CartWidget({color}) {
    let classColor = `fas fa-shopping-cart text-${color}`
    return (
        <div>
          <i className={classColor}></i>
        </div>
    )
}
