import NavBarBs from './componentes/NavBarBS';
import ItemListContainer from './componentes/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemCount from './componentes/ItemCount';
import { CartProvider } from './context/CartContext';
import CartContainer from './componentes/CartContainer';
import Checkout from './componentes/Checkout';
import CarrouselBS from './componentes/CarrouselBS.jsx';
import { Toaster } from 'react-hot-toast';


function App() {

  return (
    <BrowserRouter>
      <CartProvider>

        <Toaster position="top-right" reverseOrder={false} />

        <NavBarBs />
        <CarrouselBS />
        <Routes>
          <Route path='/' element={<ItemListContainer mensaje={'Bienvenidos a Ela Decoracion'} />} />
          <Route path='/category/:type' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={<CartContainer />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
