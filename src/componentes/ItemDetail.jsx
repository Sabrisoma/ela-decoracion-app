import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'


const ItemDetail= ({detalle}) => {
const {addItem, itemQuantity} = useContext(CartContext);
    const onAdd = (cantidad) => {
        addItem(detalle, cantidad);
    }
    const stockActualizado = detalle.stock - itemQuantity(detalle.id);
    return (
        <div>
            <h2> Detalle del producto: {detalle.name}</h2>
            <img src={detalle.img} alt={detalle.name} className='detail-img'/>
            <p>${detalle.price},00</p>
            <p>{detalle.description}</p>   
            <p>Stock disponible: {stockActualizado} unidades</p>
            <ItemCount stock={stockActualizado} onAdd={onAdd}/>         
        </div>

    )
}

export default ItemDetail