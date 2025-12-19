import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'
import { useContext, useState } from 'react'



const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [validMail, setValidMail] = useState('')
    const [orderId, setOrderId] = useState(null)
    const [error, setError] = useState(null)
    const [process, setProcess] = useState(false)
    const { cart, clear, total } = useContext(CartContext)

    const buyerData = (e) => {
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )

    }

    const finalizarCompra = (e) => {
        e.preventDefault()
        if (!buyer.name || !buyer.lastname || !buyer.email || !validMail) {
            setError('Por favor complete todos los campos')
        } else if (buyer.email !== validMail) {
            setError('Los correos no coinciden')
        } else {
            setError(null)
            setProcess(true)
            let orden = {
                cliente: buyer,
                compras: cart,
                total: total(),
                fecha: serverTimestamp()
            }
            const ventas = collection(db, "orders")

            addDoc(ventas, orden)
                .then((res) => {
                    setOrderId(res.id)
                    clear()
                })
                .catch((error) => console.log(error))
                .finally(() => setProcess(false))
        }


    }

    if (!cart.length && !orderId) {
        return <EmptyCart />
    }
    return (
        <>
            {
                orderId
                    ? <div>
                        <h2>Muchas gracias por tu compra 💗</h2>
                        <h4>Su orden es: {orderId}</h4>
                        <Link className='btn btn-info' to='/'>Volver a la tiendita online 💗</Link>
                    </div>
                    : <div>
                        <h1>Complete por favor los datos</h1>
                        {error && <span style={{ color: 'red', fontWeight: 'bold' }}>{error}</span>}

                        <form className='p-4 border rounded shadow-sm bg-light' onSubmit={finalizarCompra}>

                            <input className='form-control' name='name' type='text' placeholder='Ingrese su nombre' onChange={buyerData} />
                            <input className='form-control' name='lastname' type='text' placeholder='Ingrese su apellido' onChange={buyerData} />
                            <input className='form-control' name='email' type='email' placeholder='Ingrese su correo' onChange={buyerData} />
                            <input className='form-control' name='email2' type='email' placeholder='Repita su correo' onChange={(e) => setValidMail(e.target.value)} />
                            <button type='submit' className='btn btn-success' disabled={process}>{process ? 'Procesando Orden...' : 'Generar Orden'}</button>
                        </form>
                        
                    </div>
            }
        </>
    )
}

export default Checkout