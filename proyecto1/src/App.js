import logo from './logo.svg';
import './App.css';
import NavBars from './components/header/NavBars'
import Cart from './components/header/Cart';
import ItemListContainer from './components/header/ItemListContainer'
import ItemDetailContainer from './components/header/ItemDetailContainer'
import { CustomProvider } from './components/header/context/CartContext'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";





const App = () => {
  return (
   
    <BrowserRouter>
      <CustomProvider>
        <>
          <NavBars />
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:categoryName" element={<ItemListContainer/>} />
            <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>} />
            
          </Routes>
        </>
      </CustomProvider>
    </BrowserRouter>
  
  );
}



export default App;

