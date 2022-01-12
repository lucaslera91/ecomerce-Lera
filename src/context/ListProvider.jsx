import React, { createContext, useContext, useState } from 'react'
import {collection, doc, getDocs, getDoc, addDoc, where, query} from 'firebase/firestore'
import db from '../service'


const ListContext = createContext();
export const ListConsumer = () => useContext(ListContext);



function ListProvider({children}) {

    const [list, setList] = useState([])
    const [item, setItem] = useState({})
    const [category, setCategory] = useState([])
    const [purchaseId, setPurchaseId] = useState('')
    const [add, setAdd] = useState({ 
        buyer:{ 
            name: '',
            phone: '',
            email: '' },
        items: [{
                id: '',
                title: '',
                price: 31234 }],
        date: 30/12/2021,
        total: 13251
    })

    function getList(){
        const itemRef = collection(db, 'items')
        getDocs(itemRef).then((snapshot)=>{
            const data = snapshot.docs.map((doc) => doc = {id:doc.id, ...doc.data()})
            console.log(data)
            setList(data)
         })
        }
        
        function getDetailId(id){
            const itemRef = doc(db, 'items', id)
            getDoc(itemRef).then((snapshot)=>{
                const data = {id:snapshot.id, ...snapshot.data()}
                console.log(data)
                setItem(data)
             })
        }

        function getCategory(value){
            //console.log(value.toLowerCase())
            const itemRef = query(collection(db, 'items'), where('type', '==', value))
            getDocs(itemRef).then((snapshot)=>{
                const data = snapshot.docs.map((doc) => doc = {id:doc.id, ...doc.data()})
                console.log(snapshot)
                console.log(data)
                setCategory(data)
             }) 
        }

        async function addItem(data){
            const col = collection(db, 'orders')
            const itemAdded = await addDoc(col, data)
            setPurchaseId(itemAdded.id)
            console.log(itemAdded.id)
        }

        

    
    // useEffect(() => {
    //     // getItems();
    //     const itemRef = collection(db, 'items')
    //     getDocs(itemRef).then((snapshot)=>{
    //         const data = snapshot.docs.map((doc) => doc = {id:doc.id, ...doc.data()})
    //         console.log(data)
    //         setList(data)
    //      })
    //  }, [])
    
        return (
            <ListContext.Provider value={{list, item, purchaseId, setList, getList, setItem, getDetailId, category, getCategory, addItem, setPurchaseId}}>
              {children}
            </ListContext.Provider>
        )
    
}

export default ListProvider
