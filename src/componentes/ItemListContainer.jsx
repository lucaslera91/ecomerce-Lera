import React, {useEffect} from "react";
import ItemList from './ItemList';
import { ListConsumer } from '../context/ListProvider'
import Carusell from './carusell/Carusell';
import Filtros from "./filtros/Filtros";
import Courtain from "./courtain/Courtain";

export default function ItemListContainer({ Children, fn}) {

    const {list, getList} = ListConsumer();

    async function asignList(){
        await getList()
    }
    
    useEffect(() => {
        if(list.length < 1){
        asignList()
        console.log(list)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
       }, [])

    useEffect(() => { 
        console.log(list)
    },[list])

    let containerHeight = "90vh"

    return (
        <div>
            <div className="d-flex justify-content-center">
            <Courtain></Courtain>
            </div>
            <Carusell items={list}></Carusell>
            <Filtros/>
            <div 
                className="bg-transparent text-dark d-flex flex-column align-content-center justify-content-start" 
                style={{minHeight:  containerHeight}}>
                    <div className="bg-transparent d-flex align-content-start justify-content-center flex-wrap">
                        {Children}
                        <ItemList items={list} fn={fn}></ItemList>
                    </div>
            </div>
        </div>
    )
}
