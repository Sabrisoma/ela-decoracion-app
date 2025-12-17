import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [ cart, setCart] = useState([]);

    const addItem = (item, qty) => {
        if (isInCart(item.id)) {
            const carritoActualizado = cart.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + qty };
                } else {
                    return prod;
                }
            });
            setCart(carritoActualizado);
            return;
        }
        setCart([...cart, {...item, quantity: qty}]);       


    }
    const clear =()=>{
        setCart([]);

    }

    const removeItem =(id)=>{
        setCart(cart.filter((prod) => prod.id !== id));
    }

    const isInCart =(id)=>{
        return cart.some((prod) => prod.id === id);

    }

    const total=()=>{}

    const cartQuantity=()=>{}

    const itemQuantity = (id) => {
        const itemInCart = cart.find((prod) => prod.id === id);
        if(itemInCart){
            return itemInCart.quantity;
        }else{
            return 0;
        }
    }

    return (
        <CartContext.Provider value={{cart, clear, removeItem, addItem, itemQuantity}}>
            {children}
        </CartContext.Provider>
    )
}
