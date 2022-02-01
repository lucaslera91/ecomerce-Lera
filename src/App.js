import './App.css';
import React from 'react';
import Ruta from './rutas/Ruta';
function App() {
 
  //const url ='https://storage.googleapis.com/subtlepatterns-production/designers/subtlepatterns/uploads/y-so-serious-white.png'
  const url ='https://i.pinimg.com/originals/37/05/e0/3705e0db8d171e708eb8655b7111d51d.jpg'
  //const url ='https://i.pinimg.com/originals/d6/9a/12/d69a123da2e4f4d741e3b22e9d1c2a3d.jpg'
  
  return (
  
    <div className="App" style={{backgroundImage: `url(${url})`}}>
      <Ruta/>
    </div>
  );
}

export default App;
