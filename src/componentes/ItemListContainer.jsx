import { useState, useEffect } from 'react'
import { getProducts } from "../mock/asyncmock.jsx";
import ItemList from './ItemList.jsx';

const ItemListContainer = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getProducts()
            .then((res) => setData(res))
    }, [])

    return (
        <div>
            <h1 style={{ color: '#062242' }}>{props.mensaje}</h1>
            <ItemList data={data}/>
            

         </div>
    )
}
export default ItemListContainer
