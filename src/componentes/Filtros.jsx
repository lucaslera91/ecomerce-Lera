import React , {useState} from 'react';
import {NavLink, Link} from "react-router-dom";
import { ListConsumer } from '../context/ListProvider'


function Filtros() {
    const {list, display, setList} = ListConsumer();
    const categoryFilter = ['Todo', 'Laptop', 'Desktop']
    const orderBy = [{titulo: 'Menor precio', tipo: 'sort'}, {titulo: 'Mayor precio', tipo: 'reverse'}]

    //const [setList] = useState(list)

    function handleCategory(value){
        

        if(value == 'Todo'){
            setList(display)
            return
        }else{
            const aux = display.filter(element => element.type == value.toLowerCase())
            setList(aux)
        }
    }

    function handleOrder(filtro){
        switch (filtro) {
            case 'sort':
                list.sort((a, b) => {
                return (a.price - b.price);    
                }); 
                break;
            case 'reverse':
                const aux = list.reverse();
                setList([aux])
                console.log(list)
                break;
        }
        setList([...list])
        console.log(list)
        //setList(list)
        //console.log(aux)
        console.log(list)
        
    }

    const active = 'mx-1 px-2 border border-muted bg-light shadow text-decoration-none text-dark'
    const inactive = 'mx-1 px-2 border border-muted bg-light shadow text-decoration-none text-muted'

    //className={({ isActive }) => (isActive ? active : inactive)}

  return <div className='d-flex justify-content-center align-items-center wrap'>
      {categoryFilter.map((element) => {
         return <div onClick={()=> handleCategory(element)} className='mx-1 px-2 border border-muted bg-light shadow text-decoration-none text-muted' style={{borderRadius: '50rem'}}>
                    {element}
                </div>
      })}
      {orderBy.map((element) => {
         return <div onClick={()=> handleOrder(element.tipo)} className='mx-1 px-2 border border-muted bg-light shadow text-decoration-none text-muted' style={{borderRadius: '50rem', whiteSpace: 'nowrap'}}>
                    {element.titulo}
                </div>
      })}
  </div>;
}

export default Filtros;
