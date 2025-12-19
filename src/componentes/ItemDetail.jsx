import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({ detalle }) => {
    const [purchase, setPurchase] = useState(false)
    const { addItem, itemQuantity } = useContext(CartContext)

    const onAdd = (cantidad) => {
        addItem(detalle, cantidad)
        setPurchase(true)
    }

    const stockActualizado = detalle.stock - itemQuantity(detalle.id)

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>
                Detalle del producto: {detalle.name}
            </h2>

            <div style={{ textAlign: 'center' }}>
                <img src={detalle.img} alt={detalle.name} style={{width: '100%',maxWidth: '400px',objectFit: 'contain' }} />
            </div>


            <div style={{ marginTop: '1.5rem' }}>
                <p style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
                    ${detalle.price},00
                </p>

                <p>{detalle.description}</p>

                <p>Stock disponible: {stockActualizado} unidades</p>
            </div>


            <div style={{ marginTop: '1rem' }}>
                {purchase ? (
                    <Link className='btn btn-dark' to='/cart'>
                        Ir al Carrito
                    </Link>
                ) : (
                    <ItemCount stock={stockActualizado} onAdd={onAdd} />
                )}
            </div>

        </div>
    )
}

export default ItemDetail
