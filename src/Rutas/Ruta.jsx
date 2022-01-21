import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../views/Cart'
import Detail from '../views/Detail'
import Error from '../views/Error'
import Home from '../views/Home'
import Category from '../views/Category'
import InputTest from '../views/InputTest'
import CartProvider from '../context/CartProvider'
import ListProvider from '../context/ListProvider'
import CheckOut from '../views/CheckOut'
import Confirmation from '../views/Confirmation'
import Footer from '../componentes/Footer'

export default function Ruta() {
    return (
        <div>
            <BrowserRouter>
                <CartProvider>
                    <ListProvider>
                        
                        <Routes>
                            <Route path='https://cranky-euclid-ff8a8f.netlify.app/' element={<Home/>}/>
                            <Route path='https://cranky-euclid-ff8a8f.netlify.app/cart' element={<Cart/>}/>
                            <Route path='https://cranky-euclid-ff8a8f.netlify.app/checkout' element={<CheckOut/>}/>
                            <Route path='https://cranky-euclid-ff8a8f.netlify.app/detail/:idElement' element={<Detail/>}/>
                            <Route path='https://cranky-euclid-ff8a8f.netlify.app/category/:idCategory' element={<Category/>}/>
                            <Route path='https://cranky-euclid-ff8a8f.netlify.app/input' element={<InputTest/>}/>
                            <Route path='*' element={<Error/>}/>
                        </Routes>
                        <Footer/>

                    </ListProvider>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}
