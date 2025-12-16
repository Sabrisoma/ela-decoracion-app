import NavBarBs from './componentes/NavBarBS';
import ItemListContainer from './componentes/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemCount from './componentes/ItemCount';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
       <NavBarBs />
        <Routes>
          <Route path='/' element={<ItemListContainer mensaje={'Bienvenidos a Ela Decoracion'} />} />
          <Route path='/category/:type' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
