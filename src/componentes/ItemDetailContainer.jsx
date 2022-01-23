import React, {useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";
import { ListConsumer } from '../context/ListProvider'

export default function ItemDetailContainer({text}) {

    const {idElement} = useParams()

    const {item, getDetailId} = ListConsumer();
    async function setElement(){
        await getDetailId(idElement)
    }

    useEffect(() => {
        setElement()
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])

    if(item.id !== undefined){
        return <ItemDetail text={text} item={item}></ItemDetail>;
    }else{
        return (
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>)
    }
}
