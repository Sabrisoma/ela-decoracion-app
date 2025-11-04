import CartWidget from "./CartWidget"

const Navbar = () => {
    return (
        <nav className="nav-container">
            <a href="">
                <img src="../ela_png-08.png" alt="logo" className="logo" />
            </a>

            <a className="nav-item" href="">Inicio</a>
            <a className="nav-item" href="">Productos</a>
            <a className="nav-item" href="">Sobre Mi</a>
            <a className="nav-item" href="">Contacto</a>
            <a className="nav-item" href="">Preguntas Frecuentes</a>

          
            <CartWidget counter={3} />
        </nav>
    )
}

export default Navbar
