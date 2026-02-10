import type { Coffee } from "../../types/Coffee"
import { CardCoffee } from "../CardCoffe"
import { ContainerList } from "./styles"



interface ListCoffeesProps {
    coffees: Coffee[]
}

export const ListCoffees = ({coffees}: ListCoffeesProps) => {
    return(
         <ContainerList>
            {coffees.map( coffee => (
                
                    <li><CardCoffee coffe={coffee} /></li>
            ))}
         </ContainerList>
    )
}