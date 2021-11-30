import React from 'react'

export default function CartWidget({color}) {
    let classColor = `fas fa-shopping-cart text-${color}`
    return (
        <div>
          <i class={classColor}></i>
        </div>
    )
}
