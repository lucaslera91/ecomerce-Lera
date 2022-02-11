import React from 'react';
import { ListConsumer } from '../../context/ListProvider'
import './filtroStyle.css'


function Filtros() {
    const {list, display, setList} = ListConsumer();
    const categoryFilter = ['Todo', 'Laptop', 'Desktop']
    const orderBy = [{titulo: 'Menor precio', tipo: 'sort'}, {titulo: 'Mayor precio', tipo: 'reverse'}]

    const handleCategory = (value) => {
        if(value === 'Todo'){
            setList(display)
            return
        }else{
            const aux = display.filter(element => element.type === value.toLowerCase())
            setList(aux)
        }
    }

    const handleOrder = (filtro) => {
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
            default: 
                break;
        }
        setList([...list])
        console.log(list)
        console.log(list)
    }

  return <div className='d-flex'>

      {categoryFilter.map((element) => {
         return <div onClick={()=> handleCategory(element)} className='m-1 px-2'>
                    <button className='border border-muted shadow rounded-xl text-muted'>
                        {element}
                    </button>
                </div>
      })}

      {orderBy.map((element) => {
         return <div onClick={()=> handleOrder(element.tipo)} className='m-1 px-2'>
                    <button className='border border-muted shadow rounded-xl text-muted'>
                        {element.titulo}
                    </button>
                </div>
      })}
    </div>;
}

export default Filtros;
