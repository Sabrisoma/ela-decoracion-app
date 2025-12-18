import React from 'react'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';




const CartView = () => {
    const { cart, removeItem, clear, total} = useContext(CartContext);
    return (
        <div>
            <h1> Tu carrito 🛒</h1>
            <div>
                {
                    cart.map((compra) => (
                        <div key={compra.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '2rem' }}>
                            <img src={compra.img} alt={compra.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                            <span>{compra.name}</span>
                            <span>Precio:${compra.price},00</span>
                            <span>Cantidad:{compra.quantity}</span>
                            <span>Precio final:${compra.price * compra.quantity},00</span>
                            <button className='btn btn-danger' onClick={() => removeItem(compra.id)}>Eliminar</button>
                        </div>
                    ))
                }
            </div>
            <span>Total a pagar:${total()},00</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '80%', padding: '2rem' }}>
                <button className='btn btn-warning' onClick={clear}>Vaciar Carrito</button>
                <Link className='btn btn-success' to='/checkout'>Finalizar Compra</Link>
            </div>
        </div>
    )
}

export default CartView
