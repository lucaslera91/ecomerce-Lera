import { Children } from 'react'
import React, { useState,useEffect} from "react";
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import axios from 'axios';



export default function ItemListContainer({greeting, Children}) {
    
    let containerHeight = "auto"

    let info = [{
        id: 1,
        title: "Samsung Modelo 1",
        descripcion: "Laptop muy elegante y gran capacidad de procesar.",
        price: 40000,
        picture: 'https://img.global.news.samsung.com/mx/wp-content/uploads/2019/01/Notebook-9-Pro-3.jpg',
        stock: 5
    },{
        id: 2,
        title: "HP Modelo 1",
        descripcion: "Mucha bateria y durabilidad. Muy robusta",
        price: 60000,
        picture: 'https://247tecno.com/wp-content/uploads/2018/05/laptop-1024x658.png',
        stock: 8

    },{
        id: 3,
        title: "Windows Modelo 1",
        descripcion: "Facil de transportar",
        price: 80000,
        picture: 'https://cdn.aarp.net/content/dam/aarp/home-and-family/personal-technology/2020/08/1140-surface-pro-2-esp.jpg',
        stock: 2

    },{
        id: 4,
        title: "Mac Modelo 1",
        descripcion: "Producto muy duradero y gran capacidad de reventa.",
        price: 100000,
        picture: 'https://cdnnmundo1.img.sputniknews.com/img/108360/70/1083607049_359:0:1618:1259_1920x0_80_0_0_807da4c2a4c94bab1920cb4cc1f974c1.jpg',
        stock: 4

    },{
        id: 5,
        title: "Windows Vintage1",
        descripcion: "Desktop ligeramente usada.",
        price: 25000,
        picture: 'https://cdn.dl.uy//media/640x370/113/113698.jpg',
        stock: 1

    },{
        id: 6,
        title: "Windows Vintage1",
        descripcion: "Desktop ligeramente usada.",
        price: 25000,
        picture: 'https://cdn.dl.uy//media/640x370/113/113698.jpg',
        stock: 1
    },{
        id: 7,
        title: "Windows Vintage1",
        descripcion: "Desktop ligeramente usada.",
        price: 25000,
        picture: 'https://cdn.dl.uy//media/640x370/113/113698.jpg',
        stock: 1
    },{
        id: 8,
        title: "Windows Vintage1",
        descripcion: "Desktop ligeramente usada.",
        price: 25000,
        picture: 'https://cdn.dl.uy//media/640x370/113/113698.jpg',
        stock: 1
    }
    ]
    const [items, setItems] = useState('none');

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(info)
        }, 2000);
    })

    async function getItems(){
        try{
            let data = await promise;
            console.log(data);
            setItems(data);
            console.log(items);
        } catch(e){
            console.log(e)
            console.log('Error en lista')
        }
    }
    
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then((res) => {
        let rawData = res.json()
        return rawData
    }).then((rawData)=>{
        console.log(rawData)
    })



    useEffect(() => {
        getItems();
        axios.get('https://pokeapi.co/api/v2/pokemon/pikachu').then((res) => {
            console.log('poke')
            console.log(res)
        })

    }, [])

    

    return (
        
        <div className="bg-light d-flex flex-column align-content-center justify-content-center" style={{height:  containerHeight}}>
            <h2>{greeting}</h2>

            <div className="bg-light d-flex align-content-center justify-content-center flex-wrap">
            {Children}
            <ItemList items={items}></ItemList>
            </div>
            
        </div>
    )
}
