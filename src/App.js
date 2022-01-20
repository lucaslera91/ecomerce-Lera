import './App.css';
import React, {useEffect, useState} from 'react';
import NavBar from '../src/componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Ruta from './Rutas/Ruta';
function App() {
 
  //const url ='https://previews.123rf.com/images/sabelskaya/sabelskaya1906/sabelskaya190601293/128171042-terrazzo-style-hand-drawn-seamless-pattern-background-with-big-abstract-speckles-for-marble-stone-or.jpg'
  const url ='https://wallpaperaccess.com/full/1216450.jpg'
  //const url =''
  //const url =''
  //const url =''
  //const url =''
  //const url =''
  //const url =''
  //const url =''
  //const url =''
  //const url =''
  //const url =''

  return (
  
    <div className="App" style={{backgroundImage: `url(${url})`}}>
      <Ruta/>
    </div>

  );
}

// 
export default App;
