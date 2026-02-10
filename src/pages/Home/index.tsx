import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import coffeeCup from '../../assets/Imagem.png'
import { ContainerHome, ContainerTopics, TextDescription, SpanCart, SpanPackage, SpanTimer, SpanCoffee, ContainerListCoffee, } from "./styles";
import { coffeeData } from "../../mocks/coffeeData";
import { ListCoffees } from "../../components/ListCoffees";
export const Home = () => {
    return(
        <main>
            <ContainerHome>
                <div>
                    <h2>Encontre o café perfeito para qualquer hora do dia</h2>
                    <TextDescription>Com a Aroma & Grão você recebe seu café onde estiver, a qualquer hora</TextDescription>
                    <ContainerTopics>
                        <div>
                            <p><SpanCart><ShoppingCart weight="fill"/></SpanCart>Compra simples e segura</p>
                            <p><SpanPackage><Package weight="fill"/></SpanPackage>Embalagem mantém o café intacto</p>
                        </div>
                        <div>
                            <p><SpanTimer><Timer weight="fill"/></SpanTimer>Entrega rápida e rastreada</p>
                            <p><SpanCoffee><Coffee weight="fill"/></SpanCoffee>O café chega fresquinho até você</p>
                        </div>
                    </ContainerTopics>
                </div>
                <div>
                    <img src={coffeeCup} alt="" />
                </div>
            </ContainerHome>
            <ContainerListCoffee>
                <h2>Nossos cafés</h2>
                <ListCoffees coffees={coffeeData} />
            </ContainerListCoffee>
        </main>
    )
}