import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemContainer from './containers/ItemContainer/ItemContainer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContainer from './containers/cart';


function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<ItemContainer greeting="Esta es un Nuevo proyecto de React"></ItemContainer>} />
        <Route path={'/product/:category'} element={<ItemContainer/>} />
        <Route path={'/product/:id'} element={<p>Producto 1</p> } />
        <Route path={'/cart'} element={<CartContainer/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
