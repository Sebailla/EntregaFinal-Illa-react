import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Nav-Bar/navbar';
import ItemContainer from './containers/item-containers';
import Cart from './containers/cart';
import DetailsContainer from './containers/details';


function App() {
  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemContainer/>} />
          <Route exact path='/products/:category' element={<ItemContainer/>} />
          <Route exact path='/product/:id' element={<DetailsContainer/>} />
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/*' element={<Navigate to='/' replace={true}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
