import logo from './logo.svg';
import './App.css';
import NavBars from './components/header/NavBars'
import ItemListContainer from './components/header/ItemListContainer'
import ItemDetailContainer from './components/header/ItemDetailContainer'





const App = () => {
  return (
   <> 
    <NavBars />
    <ItemListContainer/>   
    <ItemDetailContainer/>
  </>
  );
}



export default App;

