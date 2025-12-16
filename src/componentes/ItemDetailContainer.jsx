import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { getProductById } from '../mock/asyncmock'
import { useParams } from 'react-router-dom'
import LoaderComponent from './loaderComponent.jsx'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const [cargando, setCargando] = useState (false)
    const {id}= useParams ()
    useEffect (() => {
        setCargando(true)
        getProductById(id)
        .then((res) => setDetalle(res))
        .catch((error) => console.log (error))
        .finally(() => setCargando(false))
    }, [id])

    return (
        <>
        {cargando 
        ? <LoaderComponent text={"Cargando detalle del producto..."}/> 
        : <ItemDetail detalle ={detalle}/>
        }
        </>
    )
}

export default ItemDetailContainer