import { useState, type ReactNode } from "react";
import type { Coffee } from "../types/Coffee";
import { CartContext } from "../context/CartContext";


interface CartProviderProps {
    children: ReactNode
}


export const CartProvider = ({children}: CartProviderProps) => {

    const [cartItemsCoffes, setCartItemsCoffes] = useState<Coffee[]>(() => {
         const storedCart = localStorage.getItem('aromaEGrao:cart');

        if(storedCart){
            try {
               return JSON.parse(storedCart)
            } catch (error) {
                 console.error("Erro ao recuperar o carrinho:", error);
                localStorage.removeItem('aromaEGrao:cart');
                return []
            }
        }

        return []
    });


    const numberOfProducts = cartItemsCoffes.length;

    const cartItems = cartItemsCoffes;

    const  addToCart = (coffe: Coffee, quantity: number) => {
        for(let num = 0; num < quantity; num++){
            setCartItemsCoffes(prev => [...prev, coffe])
        }
    }

    const removeFromCart = (coffeId: string) => {
       const newCartItems = cartItemsCoffes.filter(coffe => coffe.id !== coffeId);

       setCartItemsCoffes(newCartItems)
    }

    const totalPrice = (coffees : Coffee[]) => {
        const total = coffees.map(coffe => coffe.price).reduce((acc, num) => {
            return acc * num;
        }, 0) 

        return total;
    }


    return(
        <CartContext.Provider value={{addToCart, numberOfProducts, removeFromCart, cartItems, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}