import React from 'react'
import { Children } from 'react'
import react,{ useState } from "react";

export default function ItemListContainer({greeting, Children}) {
    
    let containerHeight = "100vh"
   const [contador, setContador] = useState(0);
    return (
        
        <div className="border border-dark bg-light d-flx align-content-center justify-content-center" style={{height:  containerHeight}}>
            
            <h2>{greeting}</h2>

            <h2>{contador}</h2>


            <button onClick={()=>setContador(contador+1)}>+</button>

            <button onClick={()=> setContador(contador-1)}>-</button>
           
        </div>
    )
}
