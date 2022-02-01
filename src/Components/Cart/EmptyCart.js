import React from 'react'
import { CartState } from '../Context/Context'

export default function EmptyCart() {
    const {
        state: { cart },
    } = CartState();
    return (
        <div>
            {cart.length > 0 ? (
                <></>
            ) : (
                <p> <span style={{ padding: 10 }}>Cart is Empty</span> </p>
            )}
        </div>
    )
}
