import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";
import { useCart } from "../../hook/useCart"
import { ButtonRemove, ConfirmationButton, Container, BaseContainer, ContainerCart, ContainerCoffee, ContainerListCoffe, ContainerQuantity, ContainerQuantityAndRemove, ContainerValueItems, Line, Price, TextBold, TextRegular, ContainerAddress, TextRegularMedium, InputCep, InputStreet, InputNumber, InputComplement, ContainerInputs, InputDistrict, InputCity, InputUf, ContainerPay } from "./styles"


export const Cart = () => {
    const {cartItems} = useCart();
    return(
        <main>
            <Container>
                <section>
                    <h2>Complete seu pedido</h2>
                    <BaseContainer>
                        <ContainerAddress>
                            <MapPinLine   />
                            <div>
                                <TextRegularMedium>Endereço de Entrega</TextRegularMedium>
                                <TextRegular>Informe o endereço onde deseja receber seu pedido</TextRegular>
                            </div>
                        </ContainerAddress>
                        <ContainerInputs>
                            <InputCep type="text" placeholder="CEP" />
                            <InputStreet type="text" placeholder="Rua" />
                            <div>
                                <InputNumber type="text" placeholder="Número" />
                                <InputComplement type="text" placeholder="Complemento" />
                            </div>
                            <div> 
                                <InputDistrict  type="text" placeholder="Bairro" />
                                <InputCity  type="text" placeholder="Cidade" />
                                <InputUf type="text" placeholder="UF"  />
                            </div>
                        </ContainerInputs>
                    </BaseContainer >
                    <BaseContainer>
                        <ContainerAddress>
                            <CurrencyDollar   />
                            <div>
                                <TextRegularMedium>Pagamento</TextRegularMedium>
                                <TextRegular>O pagamento é feito na entrega. Escolha a forma que deseja pagar</TextRegular>
                            </div>
                        </ContainerAddress>
                        <ContainerPay >
                            <button type="button"><CreditCard /> CARTÃO DE CRÉDITO</button>
                            <button type="button"><Bank /> CARTÃO DE DÉBITO</button >
                            <button type="button"><Money /> DINHEIRO</button>
                        </ContainerPay >
                    </BaseContainer>
                </section>
                <section>
                    <h2>Cafés selecionados</h2>
                    <ContainerCart>
                        <ul>
                            {cartItems.map(coffe => (
                                <li>
                                    <ContainerListCoffe>
                                        <img src={coffe.imgCoffe} alt={`Imagem de um café ${coffe.name}`} />
                                        <ContainerCoffee>
                                            <p>{coffe.name}</p>
                                            <ContainerQuantityAndRemove>
                                                <ContainerQuantity >
                                                    <button type="button"><Minus/></button>
                                                    <span>1</span>
                                                    <button type="button"><Plus/></button>
                                                </ContainerQuantity >
                                                <ButtonRemove type="button"><Trash  /> Remover</ButtonRemove>
                                            </ContainerQuantityAndRemove>
                                        </ContainerCoffee>
                                        <Price>R$ {coffe.price}0</Price>
                                    </ContainerListCoffe>
                                    <Line></Line>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <ContainerValueItems>
                                <TextRegular>Total de itens</TextRegular>
                                <TextRegular>R$ 29,70</TextRegular>
                            </ContainerValueItems>
                            <ContainerValueItems>
                                <TextRegular>Entrega</TextRegular>
                                <TextRegular>R$ 3,50</TextRegular>
                            </ContainerValueItems>
                            <ContainerValueItems>
                                <TextBold>Total</TextBold>
                                <TextBold>R$ 33,20</TextBold>
                            </ContainerValueItems>
                        </div>
                        <ConfirmationButton>CONFIRMAR PEDIDO</ConfirmationButton>
                    </ContainerCart>
                </section>
            </Container>
        </main>
    )
}