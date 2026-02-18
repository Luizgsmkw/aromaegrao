import { createContext } from "react";
import type { Coffee } from "../types/Coffee";

interface CartContextData {
    numberOfProducts: number,
    cartItems: Coffee[],
    addToCart: (coffe: Coffee, quantity: number) => void,
    removeFromCart: (coffeId: string) => void,
    totalPrice: (coffes: Coffee[]) => number
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

