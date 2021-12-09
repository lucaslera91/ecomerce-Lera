import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { BrowserRouter, Route,useParams } from "react-router-dom";
export default function ItemDetailContainer() {
   // alert(id)
//const params = useParams()
//console.log(params)
const {idElement} = useParams()
console.log(idElement)

let info = [{
    id: 1, 
    title: "Samsung Modelo 1",
    descripcion: "Laptop muy elegante y gran capacidad de procesar.",
    price: 40000,
    picture: 'https://img.global.news.samsung.com/mx/wp-content/uploads/2019/01/Notebook-9-Pro-3.jpg',
    type: 'Laptop',
    stock: 5
},{
    id: 2,
    title: "HP Modelo 1",
    descripcion: "Mucha bateria y durabilidad. Muy robusta",
    price: 60000,
    picture: 'https://247tecno.com/wp-content/uploads/2018/05/laptop-1024x658.png',
    stock: 8,
    type: 'Laptop'

},{
    id: 3,
    title: "Windows Modelo 1",
    descripcion: "Facil de transportar",
    price: 80000,
    picture: 'https://cdn.aarp.net/content/dam/aarp/home-and-family/personal-technology/2020/08/1140-surface-pro-2-esp.jpg',
    stock: 2,
    type: 'Laptop'

},{
    id: 4,
    title: "Mac Modelo 1",
    descripcion: "Producto muy duradero y gran capacidad de reventa.",
    price: 100000,
    picture: 'https://cdnnmundo1.img.sputniknews.com/img/108360/70/1083607049_359:0:1618:1259_1920x0_80_0_0_807da4c2a4c94bab1920cb4cc1f974c1.jpg',
    stock: 4,
    type: 'Laptop'

},{
    id: 5,
    title: "Windows Vintage1",
    descripcion: "Desktop ligeramente usada.",
    price: 25000,
    picture: 'https://cdn.dl.uy//media/640x370/113/113698.jpg',
    stock: 8,
    type: 'Laptop'

},{
    id: 6,
    title: "Windows Vintage1",
    descripcion: "Desktop ligeramente usada.",
    price: 25000,
    picture: 'https://media.istockphoto.com/photos/desktop-pc-picture-id482895394?s=612x612',
    stock: 7,
    type: 'Desktop'
},{
    id: 7,
    title: "Windows Vintage1",
    descripcion: "Desktop ligeramente usada.",
    price: 25000,
    picture: 'https://5.imimg.com/data5/ZV/EC/DH/SELLER-3866941/desktop-computer-500x500.jpg',
    stock: 3,
    type: 'Desktop'
},{
    id: 8,
    title: "Windows Vintage1",
    descripcion: "Desktop ligeramente usada.",
    price: 25000,
    picture: 'https://www.apple.com/v/imac/n/images/overview/imac27__evbw33241ouq_large.jpg',
    stock: 5,
    type: 'Desktop'
}
]
    //console.log(id)
    const [itemInfo, setItemInfo] = useState('None')

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(info)
        }, 2000);
    })

    async function getItemInfo(){
        //alert('yay')
        try{
            let data = await promise;
            //console.log(data)
            const searched = data.filter((element) => {
                return element.id == idElement;
            })
            //alert(searched[0])
            console.log(searched[0])
            console.log(idElement)
            setItemInfo(searched[0])
            
        } catch(e){
            console.log(e)
            console.log('Error en lista')
        }
    }

    useEffect(() => {
        getItemInfo();

    }, [])

    

    if((itemInfo != undefined)){
        
        //alert('should be ok ' + id )
        return <ItemDetail item={itemInfo}></ItemDetail>;
    }else{
        //alert({id})
        return <h3>Select Item...</h3>
    }
}
