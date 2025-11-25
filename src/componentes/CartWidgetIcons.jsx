import { FaCartPlus } from "react-icons/fa";
import { Badge } from "react-bootstrap";

const CartWidgetIcons = ({counter}) => {
    return (
        <div>
            <FaCartPlus fontSize={'1.8rem'} color='#DEA4BD'/>
             <Badge bg="dark">{counter}</Badge>
        </div>
    )
}
export default CartWidgetIcons