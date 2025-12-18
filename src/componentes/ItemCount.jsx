import { useState } from 'react'
import toast from 'react-hot-toast' 

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const agregarAlCarrito = () => {
        onAdd(count)
        toast.success('Producto agregado con éxito')
    }

    return (
        <>
            {
                stock > 0
                    ? <div>
                        <button className='btn btn-secondary' onClick={restar}>-</button>
                        <span className='btn'>{count}</span>
                        <button className='btn btn-success' onClick={sumar}>+</button>

                        <button
                            className='btn btn-info'
                            onClick={agregarAlCarrito}
                            disabled={stock === 0 || count === 0}
                        >
                            Agregar al carrito
                        </button>
                    </div>
                    : <p>No hay stock disponible</p>
            }
        </>
    )
}

export default ItemCount

