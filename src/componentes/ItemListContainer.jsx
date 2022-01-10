import { Children } from 'react'
import React, { useState,useEffect} from "react";
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import axios from 'axios';
import db from '../service'
import ItemDetailContainer from './ItemDetailContainer'
import { ListConsumer } from '../context/ListProvider'
import {collection, doc, getDocs} from 'firebase/firestore'

export default function ItemListContainer({greeting, Children, fn, id}) {
    const {list, setList, getList} = ListConsumer();

    //const [items, setItems] = useState([]);
    async function asignList(){
       await getList()
    }

    useEffect(() => {
        asignList()
     }, [])

    let containerHeight = "auto"

    return (
        
        <div className="bg-transparent text-light d-flex flex-column align-content-center justify-content-center" style={{height:  containerHeight}}>
            <h2>{greeting}</h2>
            <div className="bg-transparent d-flex align-content-center justify-content-center flex-wrap">
                {Children}
                <ItemList items={list} fn={fn}></ItemList>
            </div>
            
        </div>
    )
}
