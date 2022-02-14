import React, {useState} from 'react';
import './courtainStyle.css'

function Courtain() {
  const urlCourtain = 'https://img.freepik.com/free-vector/flag-ribbon-hi-there-old-school-flag-banner-with-text-hi-there_136321-1717.jpg?size=626&ext=jpg'
  
  const [classAux, setClassAux] = useState(

    <img className='firstDiv' src={urlCourtain} alt="" />

  )
  
  setTimeout(() => {
  
    setClassAux(<></>)
  
  }, 1500)

  return (
    classAux
    );
}

export default Courtain;
