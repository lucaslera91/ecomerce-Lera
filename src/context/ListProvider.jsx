import React, { createContext, useContext, useState, useMemo } from 'react'
import {collection, doc, getDocs, getDoc, addDoc, where, query} from 'firebase/firestore'
import db from '../service'


const ListContext = createContext();
export const ListConsumer = () => useContext(ListContext);



function ListProvider({children}) {

    const [list, setList] = useState([])
    const [item, setItem] = useState({})
    const [category, setCategory] = useState([])
    const [purchaseId, setPurchaseId] = useState('')
    const [display, setDisplay] = useState([])

    const getList = () => {
        const itemRef = collection(db, 'items')
        getDocs(itemRef).then((snapshot)=>{
            const data = snapshot.docs.map((doc) => doc = {id:doc.id, ...doc.data()})
            setList(data)
            setDisplay(data)
         })
        }

    useMemo( () => {
            return getList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )
        
    const getDetailId = (id) => {
        const itemRef = doc(db, 'items', id)
        getDoc(itemRef).then((snapshot)=>{
            const data = {id:snapshot.id, ...snapshot.data()}
            console.log(data)
            setItem(data)
         })
    }

    const getCategory = (value) =>{
            const itemRef = query(collection(db, 'items'), where('type', '==', value))
            getDocs(itemRef).then((snapshot)=>{
                const data = snapshot.docs.map((doc) => doc = {id:doc.id, ...doc.data()})
                setCategory(data)
             }) 
        }

    async function addItem(data){
        const col = collection(db, 'orders')
        const itemAdded = await addDoc(col, data)
        setPurchaseId(itemAdded.id)
    }

        return (
            <ListContext.Provider value={{list, item, purchaseId, display, setDisplay, setList, getList, setItem, getDetailId, category, getCategory, addItem, setPurchaseId}}>
              {children}
            </ListContext.Provider>
        )
    
}

export default ListProvider
