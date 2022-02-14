import React, {useEffect, useState} from 'react';
import './courtainStyle.css'
import { ListConsumer } from '../../context/ListProvider'

function Courtain() {
  const urlCourtain = 'https://img.freepik.com/free-vector/flag-ribbon-hi-there-old-school-flag-banner-with-text-hi-there_136321-1717.jpg?size=626&ext=jpg'
  
  const [classAux, setClassAux] = useState(<img className='firstDiv' src={urlCourtain} alt="" />)
  const {list} = ListConsumer();

  useEffect(()=>{
   if (list.lenght > 1){
     setClassAux(<></>)
   }else{
    setClassAux(<img className='firstDiv' src={urlCourtain} alt="" />)

    }
    
   
  }, [list.lenght])
  setTimeout(() => {
    setClassAux(<></>)
  
  }, 1200)

  return (
    classAux
    );
}

export default Courtain;
