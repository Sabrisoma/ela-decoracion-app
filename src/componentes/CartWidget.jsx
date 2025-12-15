import { BsCartCheck } from "react-icons/bs";
import { Badge } from "react-bootstrap";

const CartWidget = ({ counter }) => {
   return (
     <div>
       <BsCartCheck fontSize={"1.5rem"} color="white" />
         <Badge bg="secondary">{counter}</Badge>
        </div>
    )
}
export default CartWidget
