import { FaCartPlus } from "react-icons/fa";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidgetIcons = ({counter}) => {
    const carrito = useContext(CartContext);
    return (
        <div>
            <FaCartPlus fontSize={'1.8rem'} color='#DEA4BD'/>
             <Badge bg="dark">{counter}</Badge>
        </div>
    )
}
export default CartWidgetIcons