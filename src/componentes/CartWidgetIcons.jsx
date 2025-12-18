import { FaCartPlus } from "react-icons/fa";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const CartWidgetIcons = () => {
    const {cartQuantity, cart} = useContext(CartContext);
    return (
        <div>
            <FaCartPlus fontSize={'1.8rem'} color='#DEA4BD'/>
             {cart.length > 0 && <Badge bg="dark">{cartQuantity ()}</Badge>}
        </div>
    )
}
export default CartWidgetIcons