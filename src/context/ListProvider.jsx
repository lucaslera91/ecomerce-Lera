import React, { createContext, useContext, useState } from 'react'
import {collection, doc, getDocs, getDoc, where, query} from 'firebase/firestore'
import db from '../service'


const ListContext = createContext();
export const ListConsumer = () => useContext(ListContext);



function ListProvider({children}) {

    const [list, setList] = useState([])
    const [item, setItem] = useState({})
    const [category, setCategory] = useState([])
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
            <ListContext.Provider value={{list, item, setList, getList, setItem, getDetailId, category, getCategory}}>
              {children}
            </ListContext.Provider>
        )
    
}

export default ListProvider
