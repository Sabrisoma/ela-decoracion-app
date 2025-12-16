import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div>
      <h1 className='text-center' style={{color: '#dea4bd'}}>Tu carrito está vacío</h1>
      <h4 className='text-center' style={{color: '#dea4bd'}}>Ir a la Tienda 💕 </h4>

      <Link className='btn btn-info' style={{color: '#062242', display: 'inline-block', padding: '10px 20px',textDecoration: 'none', borderRadius: '8px', marginTop: '12px' }} to='/'> Tiendita Online</Link>
    </div>
  )
}

export default EmptyCart
