import './App.css';
import NavBar from '../src/componentes/navbar'
import ItemListContainer from './componentes/ItemListContainer';

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>

      <ItemListContainer greeting="Bienvendido a la mejor tienda de Computadoras!">
        
      </ItemListContainer>
    </div>

  );
}


export default App;
