import './App.css';
import React, {useEffect, useState} from 'react';
import NavBar from '../src/componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';

function App() {
 
  const [search, setSearch] = useState('')

  const test = (text) => {
    //alert(text)
    setSearch(text)
  }

 useEffect(() => {
   console.log(search)
  
},)

  return (
    <div className="App">
      <NavBar></NavBar>

      <ItemListContainer fn={test} id={search} greeting={`Bienvendido a la mejor tienda de Computadoras! Elegiste${search}`}>
        
      </ItemListContainer>

    

    </div>

  );
}


export default App;
