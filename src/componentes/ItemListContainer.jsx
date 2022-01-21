import { Children } from 'react'
import React, { useState,useEffect} from "react";
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import axios from 'axios';
import db from '../service'
import ItemDetailContainer from './ItemDetailContainer'
import { ListConsumer } from '../context/ListProvider'
import {collection, doc, getDocs} from 'firebase/firestore'
import Carusell from './Carusell';

export default function ItemListContainer({greeting, Children, fn, id}) {
    const {list, getList} = ListConsumer();

    //const [items, setItems] = useState([]);
    async function asignList(){
       await getList()
    }

    useEffect(() => {
        asignList()
     }, [])

    let containerHeight = "90vh"

    return (
        <div>
            <Carusell items={list}></Carusell>
            <div className="bg-transparent text-dark d-flex flex-column align-content-center justify-content-start" style={{minHeight:  containerHeight}}>
                <h2>{greeting}</h2>
                <div className="bg-transparent d-flex align-content-start justify-content-center flex-wrap">
                    {Children}
                    <ItemList items={list} fn={fn}></ItemList>
                </div>
            </div>
        </div>
    )
}
