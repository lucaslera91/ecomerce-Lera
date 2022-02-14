import React, {useEffect, useState} from 'react';
import './courtainStyle.css'
import { ListConsumer } from '../../context/ListProvider'

function Courtain() {
  const urlCourtain = 'https://img.freepik.com/free-vector/flag-ribbon-hi-there-old-school-flag-banner-with-text-hi-there_136321-1717.jpg?size=626&ext=jpg'
  
  const [classAux, setClassAux] = useState(<></>)
  const {courtainAux, setCourtainAux} = ListConsumer();
  

  useEffect(()=>{
   if (courtainAux){
     setClassAux(<img className='firstDiv' src={urlCourtain} alt=""/>)
     setCourtainAux(false)
   }else{
    setClassAux(<></>)
   }
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  setTimeout(() => {
    setClassAux(<></>)
  
  }, 1500)

  return (
    classAux
    );
}

export default Courtain;
