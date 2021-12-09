import './App.css';
import React, {useEffect, useState} from 'react';
import NavBar from '../src/componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Ruta from './Rutas/Ruta';
function App() {
 

  return (
    <div className="App" style={{backgroundImage: `url(https://wallpaperaccess.com/full/1288360.jpg)`}}>
      <Ruta/>
    </div>

  );
}

// 
export default App;
