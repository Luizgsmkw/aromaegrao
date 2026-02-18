type coffeeType = 'TRADICIONAL' | 'COM LEITE' | 'ESPECIAL' | 'ALCOÓLICO' | 'GELADO';

type coffeeName = 'Expresso Americano' | 'Árabe' | 'Café Com Leite' | 'Café Gelado' | 'Capuccino' | 'Chocolate Quente' | 'Cubano' | 'Expresso Cremoso' | 'Expresso Tradicional' | 'Havaiano' | 'Irlandês' | 'Latte' | 'Macchiato' | 'Mochaccino'


export interface Coffee {
    id: string,
    name: coffeeName;
    description: string;
    type: coffeeType[];
    price: number;
    imgCoffe: string;
}