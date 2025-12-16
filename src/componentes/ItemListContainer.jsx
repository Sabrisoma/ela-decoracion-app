import { useState, useEffect } from 'react'
import { getProducts } from "../mock/asyncmock.jsx";
import ItemList from './ItemList.jsx';
import { useParams } from 'react-router-dom';
import LoaderComponent from './loaderComponent.jsx';


const ItemListContainer = (props) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const { type } = useParams()

    useEffect(() => {
        setLoading(true)
        const prodCollection = type ? getProducts().then((res) => res.filter((prod) => prod.category === type)) : getProducts();
        getProducts()
            .then((res) => {
                if (type) {
                    setData(res.filter((prod) => prod.category === type))

                } else {
                    setData(res)
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [type])

    return (
        <>
            {
                loading
                    ? <LoaderComponent text={type ? 'Cargando Categoria...' : 'Cargando productos...'}/>
                    : <div>
                        <h1 style={{ color: '#062242' }}>{props.mensaje}</h1>
                        <ItemList data={data} />


                    </div>
            }
        </>


    )
}

export default ItemListContainer
