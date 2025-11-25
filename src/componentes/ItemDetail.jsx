import React from 'react'

const ItemDetail= ({detalle}) => {
    return (
        <div>
            <h2> Detalle del producto: {detalle.name}</h2>
            <img src={detalle.img} alt={detalle.name} className='detail-img'/>
            <p>${detalle.price},00</p>
            <p>{detalle.description}</p>          

        </div>
    )
}

export default ItemDetail