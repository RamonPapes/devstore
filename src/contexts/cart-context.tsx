'use client'

import { ReactNode, createContext, useContext, useState } from "react";

interface CartItem {
    productId: number,
    quantity: number,
}

interface CartContextType {
    items: CartItem[],
    addToCart: (productId: number) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    function addToCart(productId: number) {
        setCartItems((state) => {
            const productInCartIndex = state.findIndex((item) => item.productId === productId);

            if (productInCartIndex !== -1) {
                const newCartItems = [...state];
                newCartItems[productInCartIndex].quantity++;
                return newCartItems;
            } else {
                return [...state, { productId, quantity: 1 }];
            }
        })
    }

    return <CartContext.Provider value={{ items: cartItems, addToCart }}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
