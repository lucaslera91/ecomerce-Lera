import React from 'react'

export default function BtnAddToCart({data}) {
    function eventHandle(){
        alert('Add to cart '+ data )
    }
    return (
        <div>
        </div>
    )
}
//onClick={()=> eventHandle()}