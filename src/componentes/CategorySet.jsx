import React,{ useEffect } from 'react'
import { useParams } from "react-router-dom";
import ItemList from '../componentes/ItemList'
import { ListConsumer } from '../context/ListProvider'


export default function Category() {

    const {category, getCategory} = ListConsumer();

    const {idCategory} = useParams()

    const aux = idCategory.toUpperCase()
    
    async function asignCategory(){
        await getCategory(idCategory)
     }

    useEffect(() => {
       asignCategory()
       // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [idCategory])

    return (
        <div>
            <div className="bg-transparent text-dark d-flex flex-column align-content-center justify-content-start" style={{minHeight:  '100vh'}}>
            <p className='my-3 fs-2 text fw-normal'>{aux}</p>
                <div className="bg-transparent d-flex align-content-center justify-content-center flex-wrap">
                    <ItemList items={category}></ItemList>
                </div>
            </div>
        </div>
    )
}