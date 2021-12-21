import React,{ useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import ItemList from '../componentes/ItemList'
import NavBar from '../componentes/Navbar'


export default function Category({text}) {

const {idCategory} = useParams()
console.log(idCategory)

let info = [{
    id: 1, 
    title: "Samsung Modelo 1",
    descripcion: "Laptop muy elegante y gran capacidad de procesar.",
    price: 40000,
    picture: 'https://img.global.news.samsung.com/mx/wp-content/uploads/2019/01/Notebook-9-Pro-3.jpg',
    picture1: 'https://http2.mlstatic.com/D_NQ_NP_806632-MLA41235810980_032020-O.webp',
    picture2: 'data:image/jpeg;base64,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',
    picture3: 'https://d500.epimg.net/cincodias/imagenes/2019/08/08/lifestyle/1565273578_452743_1565273724_noticia_normal.jpg',
    type: 'Laptop',
    stock: 5
},{
    id: 2,
    title: "HP Modelo 1",
    descripcion: "Mucha bateria y durabilidad. Muy robusta",
    price: 60000,
    picture: 'https://m.media-amazon.com/images/I/61tFJWGVgQL._AC_SX355_.jpg',
    picture1: 'https://d22k5h68hofcrd.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/1/D/1D0F5LT-6_T1633128030.png',
    picture2: 'https://m.media-amazon.com/images/I/51ULYMCNInL._AC_SX355_.jpg',
    picture3: 'https://i.ebayimg.com/thumbs/images/g/1EoAAOSwk~xhLmEw/s-l225.jpg',
    stock: 8,
    type: 'Laptop'

},{
    id: 3,
    title: "Windows Modelo 1",
    descripcion: "Facil de transportar",
    price: 80000,
    picture: 'https://cdn.aarp.net/content/dam/aarp/home-and-family/personal-technology/2020/08/1140-surface-pro-2-esp.jpg',
    picture1: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWKwKp',
    picture2: 'https://s1.eestatic.com/2018/05/04/actualidad/actualidad_304734283_130196015_1024x576.jpg',
    picture3: 'https://icdn.dtcn.com/image/digitaltrends_es/microsoft-unveils-new-surface-laptop-2-1200x800.jpg',
    stock: 2,
    type: 'Laptop'

},{
    id: 4,
    title: "Mac Modelo 1",
    descripcion: "Producto muy duradero y gran capacidad de reventa.",
    price: 400000,
    picture: 'https://cdnnmundo1.img.sputniknews.com/img/108360/70/1083607049_359:0:1618:1259_1920x0_80_0_0_807da4c2a4c94bab1920cb4cc1f974c1.jpg',
    picture1: 'https://www.apple.com/newsroom/images/tile-images/Apple_16-inch-MacBook-Pro_111319.jpg.landing-big_2x.jpg',
    picture2: 'https://i.blogs.es/67b0e2/analisis-macbook-pro-13-2020-applesfera-06/450_1000.jpg',
    picture3: 'https://icdn.dtcn.com/image/digitaltrends_es/apple-macbook-pro-16-ry-14.jpg',
    stock: 4,
    type: 'Laptop'

},{
    id: 5,
    title: "Dell Desktop ",
    descripcion: "Excelente desktop para trabajar",
    price: 290000,
    picture: 'https://static.turbosquid.com/Preview/2018/11/27__01_04_01/Render_1.png75454B66-315F-4913-953B-C97B3E7BBF3FLarge.jpg',
    picture1: 'https://media.istockphoto.com/photos/desktop-pc-picture-id482895394?s=612x612',
    picture2: 'https://m.media-amazon.com/images/I/81boK-BpHAL._SL1500_.jpg',
    picture3: 'https://brain-images-ssl.cdn.dixons.com/1/2/10226721/u_10226721.jpg',
    stock: 8,
    type: 'Desktop'

},{
    id: 6,
    title: "Windows Vintage",
    descripcion: "Desktop ligeramente usada.",
    price: 20000,
    picture: 'https://cdn.dl.uy//media/640x370/113/113698.jpg',
    picture1: 'https://static.turbosquid.com/Preview/2017/02/27__00_26_26/PC02.jpg2C4B9343-E37D-4CED-AA7A-BEC38E2D70E9Large.jpg',
    picture2: 'https://i.pinimg.com/originals/77/7a/62/777a62c112cf7e28376508bdfea332b1.jpg',
    picture3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMg_9VUrbDwFU6eFDUc5Gph0aTINz86dPkcg&usqp=CAU',
    stock: 7,
    type: 'Desktop'
},{
    id: 7,
    title: "Desktop all in one",
    descripcion: "Desktop ideal para oficinas o departamentos con espacios reducidos",
    price: 250000,
    picture: 'https://http2.mlstatic.com/D_NQ_NP_772045-MLA47251138562_082021-O.webp',
    picture1: 'https://http2.mlstatic.com/D_NQ_NP_943030-MLA47251047919_082021-O.webp',
    picture2: 'https://http2.mlstatic.com/D_NQ_NP_993933-MLA47251232010_082021-O.webp',
    picture3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ561z_P8lpekjFkMrWi8ag_Eotl8CLcTnekg&usqp=CAU',
    stock: 3,
    type: 'Desktop'
},{
    id: 8,
    title: "Mac Desktop",
    descripcion: "Elegante computadora ideal para quien neceista la mejor capaciad para procesar",
    price: 25000,
    picture: 'https://www.apple.com/v/imac/n/images/overview/imac27__evbw33241ouq_large.jpg',
    picture1: 'https://respontodo.com/wp-content/uploads/2021/07/shutterstock_1250018599.jpg',
    picture2: 'https://www.macworld.co.uk/cmsdata/features/3464816/best_desktop_mac_thumb1200_4-3.jpg',
    picture3: 'https://i5.walmartimages.com/asr/37d95a2b-4053-4d99-a451-ac2334e8b34a_1.24e048084b47caf1f49c150594250ed5.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    stock: 5,
    type: 'Desktop'
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
            //console.log(data);
            const searched = data.filter((element) => {
                return element.type.toLowerCase() == idCategory;
            })
            setItems(searched);
            console.log(searched);
        } catch(e){
            console.log(e)
            console.log('Error en lista')
        }
    }


    useEffect(() => {
        getItems();

    }, [items])
    return (
        <div>
            <NavBar/>
           <div className='d-flex justify-content-center' style={{height: '100vh'}}>
           <ItemList items={items} text={text}></ItemList>
           </div>
        </div>
    )
}

