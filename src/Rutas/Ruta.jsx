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
                            <Route path='/' element={<Home/>}/>
                            <Route path='/cart' element={<Cart/>}/>
                            <Route path='/checkout' element={<CheckOut/>}/>
                            <Route path='/detail/:idElement' element={<Detail/>}/>
                            <Route path='/category/:idCategory' element={<Category/>}/>
                            <Route path='/input' element={<InputTest/>}/>
                            <Route path='*' element={<Error/>}/>
                        </Routes>
                        <Footer/>

                    </ListProvider>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}
