import React,{ useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import ItemList from '../componentes/ItemList'
import NavBar from '../componentes/Navbar'
import { ListConsumer } from '../context/ListProvider'


export default function Category({text}) {

    const {category, getCategory} = ListConsumer();

    const {idCategory} = useParams()
    console.log(idCategory)

    const aux = idCategory.toUpperCase()
    async function asignCategory(){
        await getCategory(idCategory)
        //alert(category)
     }

    useEffect(() => {
       asignCategory()
     }, [category])

    return (
        <div>
            <NavBar/>
            <div className="bg-transparent text-light d-flex flex-column align-content-center justify-content-start" style={{minHeight:  '100vh'}}>
            <h1 className='my-5'>{aux}</h1>
                <div className="bg-transparent d-flex align-content-center justify-content-center flex-wrap">
                    <ItemList items={category}></ItemList>
                </div>
            </div>
        </div>
    )
}

