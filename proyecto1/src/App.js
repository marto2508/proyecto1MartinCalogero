import logo from './logo.svg';
import './App.css';
import NavBars from './components/header/NavBars'
import ItemListContainer from './components/header/ItemListContainer'
import ItemDetailContainer from './components/header/ItemDetailContainer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";





const App = () => {
  return (
    
    <BrowserRouter>
      <NavBars />
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryName" element={<ItemListContainer/>} />
        <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
      

      </Routes>
      
    </BrowserRouter>
  
  );
}



export default App;

