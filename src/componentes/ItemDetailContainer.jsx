import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import LoaderComponent from './loaderComponent.jsx'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase.jsx'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const [cargando, setCargando] = useState(true)
    const [invalid, setInvalid] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const docRef = doc(db, 'productos', id)
        getDoc(docRef)
            .then((res) => {
                if (res.data()) {
                    setDetalle({ id: res.id, ...res.data() })
                } else {
                    setInvalid(true)
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setCargando(false))
    }, [id])

    if (invalid) {
        return (
            <div>
                <h2 className='text-center mt-5' style={{color: '#dea4bd'}}>El producto que buscas no existe</h2>
                <Link className='btn btn-info' to='/' >Volver al inicio</Link>
            </div>
        )
    }

return (
    <>
        {cargando
            ? <LoaderComponent text={"Cargando detalle del producto..."} />
            : <ItemDetail detalle={detalle} />
        }
    </>
)
    }

export default ItemDetailContainer