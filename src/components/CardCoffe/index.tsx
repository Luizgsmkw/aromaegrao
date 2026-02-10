import { Minus, Plus, ShoppingCart } from "phosphor-react";
import type { Coffee } from "../../types/Coffee"
import { ButtonCart, ContainerCard, ContainerPrice, CotaninerQuantity, SpanType, TextDescription } from "./styles";
import { useState } from "react";


interface CardCoffeeProps {
    coffe: Coffee;
}

export const CardCoffee = ({coffe}: CardCoffeeProps) =>{

    const [quantityCoffee, setQauntityCoffee] = useState(0);

    const removeCoffee = () => {
        if(quantityCoffee !== 0){
            setQauntityCoffee(prev => prev -= 1)
        }
    }
    
    const addCoffee = () => {
        setQauntityCoffee(prev => prev += 1)
    }


    return(
        <>
            <ContainerCard>
                <img src={coffe.imgCoffe} alt={coffe.name} />
                <div>
                    {coffe.type.map(type => (
                        <SpanType>{type}</SpanType>
                    ))}
                </div>
                <h3>{coffe.name}</h3>
                <TextDescription>{coffe.description}</TextDescription>
                <ContainerPrice>
                    <p>R$ <span>{coffe.price}0</span></p>
                    <div>
                        <CotaninerQuantity>
                            <button onClick={removeCoffee} type="button"><Minus/></button>
                            <span>{quantityCoffee}</span>
                            <button onClick={addCoffee} type="button"><Plus/></button>
                        </CotaninerQuantity>
                        <ButtonCart type="button">
                            <ShoppingCart weight="fill" />
                        </ButtonCart>
                    </div>
                </ContainerPrice>
            </ContainerCard>
        </>
    )
}