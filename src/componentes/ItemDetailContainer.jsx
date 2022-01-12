import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { BrowserRouter, Route, useParams } from "react-router-dom";
import { ListConsumer } from '../context/ListProvider'

export default function ItemDetailContainer({text}) {

    const {idElement} = useParams()
    //console.log(idElement)

    const {item, getDetailId, addItem} = ListConsumer();
    async function setElement(){
        await getDetailId(idElement)
        //console.log('item ' + item)
    }

    async function testFirebaseAdd(){
        await addItem(idElement)
    }
    // async function setElement(){
    //     await getList()
    //     console.log(list)
    //     const newArray = list.filter(element => element.id == idElement)
    //     setItemInfo(newArray)
    //     console.log(list)
    //     console.log(itemInfo)
    // }

    useEffect(() => {
        setElement()
        testFirebaseAdd()
     }, [])

    if(item.id != undefined){
        //alert('should be ok ' + id )
        return <ItemDetail text={text} item={item}></ItemDetail>;
    }else{
        //alert({id})
        return <h3>Loading...</h3>
    }
}
