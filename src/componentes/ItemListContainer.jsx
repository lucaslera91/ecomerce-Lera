import React, { useEffect} from "react";
import ItemList from './ItemList';
import { ListConsumer } from '../context/ListProvider'
import Carusell from './Carusell';

export default function ItemListContainer({greeting, Children, fn, id}) {
    const {list, getList} = ListConsumer();

    //const [items, setItems] = useState([]);
    async function asignList(){
       await getList()
    }

    useEffect(() => {
        asignList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])

    let containerHeight = "90vh"

    return (
        <div>
            <h3 className='my-2'>Special offers</h3>
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
