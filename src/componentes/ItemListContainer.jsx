import React from 'react'
import { Children } from 'react'
import react,{ useState } from "react";
import ItemCount from './ItemCount';




export default function ItemListContainer({greeting, Children}) {
    
    let containerHeight = "100vh"
   
    

    return (
        
        <div className="border border-dark bg-light d-flx align-content-center justify-content-center" style={{height:  containerHeight}}>
            
            <h2>{greeting}</h2>
            {Children}
            <ItemCount stock={5} start={1} />

        </div>
    )
}
