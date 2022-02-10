import React, {useState} from 'react';

function Courtain() {
  const urlCourtain = 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX40827032.jpg'
  
  const [classAux, setClassAux] = useState(<div className='d-flex flex-column aling items center' >

    <img src={urlCourtain} alt="" />

  </div>)
  
  setTimeout(() => {
  
    setClassAux(<></>)
  
  }, 2000)

  return (
    classAux
    );
}

export default Courtain;
