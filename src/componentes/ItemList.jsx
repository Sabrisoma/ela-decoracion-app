import React from "react";
import Item from "./Item.jsx"

const ItemList = ({data}) =>{
    return(
        <div style = {{display: 'flex ', justifyContent:'space-aroud', alignItems:'center', flexWrap: 'wrap' }}>
            {data.map((prod) => <Item key={prod.id} prod={prod}/>)}
        </div>
    )
}

export default ItemList;