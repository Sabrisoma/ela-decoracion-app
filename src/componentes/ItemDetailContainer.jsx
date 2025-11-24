import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { getProductById } from '../mock/asyncmock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const {id}= useParams ()
    useEffect (() => {
        getProductById(id)
        .then((res) => setDetalle(res))
    }, [id])

    return (
        <ItemDetail detalle ={detalle}/>
    )
}

export default ItemDetailContainer