import { useState, useEffect } from 'react'
import { getProducts } from "../mock/asyncmock.jsx";
import ItemList from './ItemList.jsx';
import { useParams } from 'react-router-dom';


const ItemListContainer = (props) => {
    const [data, setData] = useState([])
    const { type } = useParams()

    useEffect(() => {
        getProducts()
            .then((res) => {
                if (type) {
                    setData(res.filter((prod) => prod.category === type))

                } else{
                    setData(res)
                }
            })
    }, [type])

    return (
        <div>
            <h1 style={{ color: '#062242' }}>{props.mensaje}</h1>
            <ItemList data={data} />


        </div>
    )
}
export default ItemListContainer
