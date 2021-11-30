import React from 'react'
import { Children } from 'react'

export default function ItemListContainer({greeting}) {
    
    let containerHeight = "100vh"
   
    return (
        
        <div className="border border-dark bg-light d-flex align-items-center justify-content-center" style={{height:  containerHeight}}>
            
            <h2>{greeting}</h2>
           
        </div>
    )
}
