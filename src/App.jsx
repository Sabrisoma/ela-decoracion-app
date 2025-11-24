//import Navbar from './componentes/Navbar'
import ItemListContainer from './componentes/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarBs from './componentes/NavBarBS';


function App() {

  return (
    <BrowserRouter>
      <NavBarBs/>
      <Routes>
        <Route path='/' element={<ItemListContainer mensaje={'Bienvenidos a Ela Decoracion'} />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
