import React, {useEffect} from 'react'
import CartView from '../componentes/cartview/CartView'

export default function Cart() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <div style={{height: '8vh'}}></div>
           <CartView></CartView>
        </div>
        )
}
