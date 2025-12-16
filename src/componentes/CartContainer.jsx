import React from 'react'
import { CartContext } from '../context/CartContext';
import EmptyCart from './EmptyCart';
import CartView from './CartView';
import { useContext } from 'react';

const CartContainer = () => {
    const { cart } = useContext(CartContext);
    return (
        <>
            {
                !cart.length
                ? <EmptyCart />
                :<CartView />
            }
        </>
    )
}

export default CartContainer
