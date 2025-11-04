import Navbar from './componentes/Navbar'
import ItemListContainer from './componentes/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {


  return (
    <>
      <Navbar/>
      <ItemListContainer mensaje='Bienvenidos a Ela Decoracion' />
    </>
  )
}

export default App
