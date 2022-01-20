import './App.css';
import React, {useEffect, useState} from 'react';
import NavBar from '../src/componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Ruta from './Rutas/Ruta';
function App() {
 
  //const url ='https://previews.123rf.com/images/sabelskaya/sabelskaya1906/sabelskaya190601293/128171042-terrazzo-style-hand-drawn-seamless-pattern-background-with-big-abstract-speckles-for-marble-stone-or.jpg'
  //const url ='https://wallpaperaccess.com/full/1216450.jpg'
  //const url ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpfyCab-Upl1UX_Y-lLTuozqqMGsPyIQ_sQ&usqp=CAU'
  //const url ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkxh4_ceujZhACy3jy-XOM7VFuDRpp3LDhWQ&usqp=CAU'
  //const url ='https://images.wallpaperscraft.com/image/single/surface_background_plain_black_50697_1920x1080.jpg'
  //const url ='/wallpaper-images/731608.jpg'
  //const url ='https://www.pngmagic.com/product_images/background-plain-color-images.jpg'
  const url ='https://cutewallpaper.org/21/light-blue-plain-background/Details-about-3X5FT-Thin-Vinyl-Studio-Baby-Blue-Photography-Backdrop-Plain-Photo-Background.jpg'
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
