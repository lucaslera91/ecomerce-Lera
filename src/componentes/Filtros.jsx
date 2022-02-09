import React from 'react';
import { ListConsumer } from '../context/ListProvider'


function Filtros() {
    const {list, display, setList} = ListConsumer();
    const categoryFilter = ['Todo', 'Laptop', 'Desktop']
    const orderBy = [{titulo: 'Menor precio', tipo: 'sort'}, {titulo: 'Mayor precio', tipo: 'reverse'}]


    function handleCategory(value){

        if(value === 'Todo'){
            setList(display)
            return
        }else{
            const aux = display.filter(element => element.type === value.toLowerCase())
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
            default: 
                break;

        }
        setList([...list])
        console.log(list)
        console.log(list)
    }

  return <div className='d-flex justify-content-center align-items-center flex-wrap'>
      {categoryFilter.map((element) => {
         return <div onClick={()=> handleCategory(element)} className='m-1 px-2 border border-muted bg-light shadow text-decoration-none text-muted' style={{borderRadius: '50rem', cursor: 'pointer'}}>
                    {element}
                </div>
      })}
      {orderBy.map((element) => {
         return <div onClick={()=> handleOrder(element.tipo)} className='mx-1 px-2 border border-muted bg-light shadow text-decoration-none text-muted' style={{borderRadius: '50rem', cursor: 'pointer', whiteSpace: 'nowrap'}}>
                    {element.titulo}
                </div>
      })}
  </div>;
}

export default Filtros;
