import './App.css';
import React from 'react';
import Ruta from './rutas/Ruta';
function App() {
 
  const url ='https://storage.googleapis.com/subtlepatterns-production/designers/subtlepatterns/uploads/y-so-serious-white.png'

  return (
  
    <div className="App" style={{backgroundImage: `url(${url})`}}>
      <Ruta/>
    </div>
  );
}

export default App;
