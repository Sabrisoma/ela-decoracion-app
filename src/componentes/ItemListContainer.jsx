import { useState, useEffect, use } from 'react'
import { getProducts } from "../mock/asyncmock.jsx";
import ItemList from './ItemList.jsx';
import { useParams } from 'react-router-dom';
import LoaderComponent from './loaderComponent.jsx';
import { collection, getDocs, query, where} from "firebase/firestore";
import { db } from '../service/firebase.jsx';


const ItemListContainer = (props) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const { type } = useParams()

    // firebase/
    useEffect(() => {
        setLoading(true)
        const prodCollection = type ? query(collection(db, "productos"), where("category", "==", type)) : collection(db, "productos")
        getDocs(prodCollection)
            .then((res) => {
                const list = res.docs.map((doc) => {

                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                
                setData(list)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [type])


    return (
        <>
            {
                loading
                    ? <LoaderComponent text={type ? 'Cargando Categoria...' : 'Cargando productos...'} />
                    : <div>
                        <h1 style={{ color: '#062242' }}>{props.mensaje}</h1>
                        <ItemList data={data} />


                    </div>
            }
        </>


    )
}

export default ItemListContainer
