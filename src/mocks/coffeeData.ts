import type_expresso_americano from '../assets/Type=Americano.png';
import type_expresso_cremoso from '../assets/Type=Expresso Cremoso.png'; 
import type_cafe_com_leite from '../assets/Type=Café com Leite.png';
import type_cafe_gelado from '../assets/Type=Café Gelado.png';
import type_capuccino from '../assets/Type=Capuccino.png';
import type_chocolate_quente from '../assets/Type=Chocolate Quente.png';
import type_cubano from '../assets/Type=Cubano.png';
import type_expresso_tradicional from '../assets/Type=Expresso.png';
import type_havaiano from '../assets/Type=Havaiano.png';
import type_irlandes from '../assets/Type=Irlandês.png';
import type_latte from '../assets/Type=Latte.png';
import type_macchiato from '../assets/Type=Macchiato.png';
import type_mochaccino from '../assets/Type=Mochaccino.png';
import type_arabe from '../assets/Type=Árabe.png';

import type { Coffe } from "../types/Coffee";


export const coffeeData: Coffe[]  = [
     {
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        price: 9.90,
        type: ["TRADICIONAL"],
        imgCoffe: type_expresso_tradicional
    },
      {
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        price: 9.90,
        type: ["TRADICIONAL"],
        imgCoffe: type_expresso_americano
    },
    {
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        price: 9.90,
        type: ["TRADICIONAL"],
        imgCoffe: type_expresso_cremoso
    },
    {
        name: "Café Com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        price: 9.90,
        type: ["TRADICIONAL", 'COM LEITE'],
        imgCoffe: type_cafe_com_leite
    },
    {
        name: "Café Gelado",
        description: "",
        price: 9.90,
        type: ["TRADICIONAL", 'GELADO'],
        imgCoffe: type_cafe_gelado
    },
    {
        name: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        price: 9.90,
        type: ["TRADICIONAL", 'COM LEITE'],
        imgCoffe: type_capuccino
    },
    {
        name: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        price: 9.90,
        type: ["ESPECIAL", 'COM LEITE'],
        imgCoffe: type_chocolate_quente
    },
    {
        name: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        price: 9.90,
        type: ["ESPECIAL", 'ALCOÓLICO', 'GELADO'],
        imgCoffe: type_cubano
    },
    {
        name: "Havaiano",
        description: "",
        price: 9.90,
        type: [],
        imgCoffe: type_havaiano
    },
    {
        name: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        price: 9.90,
        type: ["ESPECIAL", 'GELADO'],
        imgCoffe: type_irlandes
    },
    {
        name: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        price: 9.90,
        type: ["TRADICIONAL", 'COM LEITE'],
        imgCoffe: type_latte
    },
    {
        name: "Macchiato",
        description: "",
        price: 9.90,
        type: [],
        imgCoffe: type_macchiato
    },
    {
        name: "Mochaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        price: 9.90,
        type: ["TRADICIONAL", 'COM LEITE'],
        imgCoffe: type_mochaccino
    },
    {
        name: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        price: 9.90,
        type: ["ESPECIAL"],
        imgCoffe: type_arabe
    },
    
]