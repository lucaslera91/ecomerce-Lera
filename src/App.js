import './App.css';
import React from 'react';
import Ruta from './Rutas/Ruta';
function App() {
 
  const url ='https://cutewallpaper.org/21/light-blue-plain-background/Details-about-3X5FT-Thin-Vinyl-Studio-Baby-Blue-Photography-Backdrop-Plain-Photo-Background.jpg'

  return (
  
    <div className="App" style={{backgroundImage: `url(${url})`}}>
      <Ruta/>
    </div>

  );
}

export default App;
