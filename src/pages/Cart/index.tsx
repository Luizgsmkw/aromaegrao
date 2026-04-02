import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";
import { useCart } from "../../hook/useCart"
import { ButtonRemove, ConfirmationButton, Container, BaseContainer, ContainerCart, ContainerCoffee, ContainerListCoffe, ContainerQuantity, ContainerQuantityAndRemove, ContainerValueItems, Line, Price, TextBold, TextRegular, ContainerAddress, TextRegularMedium, InputCep, InputStreet, InputNumber, InputComplement, ContainerInputs, InputDistrict, InputCity, InputUf, ContainerPay, PaymentMethod, TextError, DivInput } from "./styles"
import {useForm} from "react-hook-form"
import { useState } from "react";
import {zodResolver} from '@hookform/resolvers/zod';
import * as zod from 'zod';

export const Cart = () => {

     const schemaFormCart = zod.object({
        cep: zod.string().min(8, 'CEP é obrigatório').regex(/^\d{5}-?\d{3}$/, 'CEP inválido'),
        street: zod.string().min(4, 'Rua é obrigatório'),
        number: zod.string().min(1, 'Número é obrigatório'),
        district: zod.string().min(4, 'Bairro é obrigatório'),
        city: zod.string().min(4, 'Cidade é obrigatório'),
        uf: zod.string().min(2, 'Estado é obrigatório').max(2, 'Estado é obrigatório'),
        complement: zod.string(),
        total: zod.string(),
        paymentMethod: zod.string().min(1, 'Forma de pagamento é obrigatória'),
    })

    type FormData = zod.infer<typeof schemaFormCart>;

    const {cartItems} = useCart();
    const {register, handleSubmit, setValue, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(schemaFormCart)
    });
    const [optionMethodPay, setOptionMethodPay] = useState<string | null>('');
    const priceCoffes = cartItems.map(coffe => coffe.price).reduce((acumulador, valorAtual) => { return acumulador += valorAtual}, 0);
    const priceFrete = 3.5;
    const priceTotal = priceCoffes + priceFrete;

    const handletOptionMethodPay = (method: string) => {
       setOptionMethodPay(method);
       setValue('paymentMethod', method);
    }

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return(
        <main>
            <Container onSubmit={handleSubmit(onSubmit)}>
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
                            <InputCep {...register('cep')} type="text" placeholder="CEP" />
                            {errors.cep && <TextError>{errors.cep.message}</TextError>}
                            <InputStreet {...register('street')} type="text" placeholder="Rua" />
                            {errors.street && <TextError>{errors.street.message}</TextError>}
                            <div>
                                <DivInput>
                                    <InputNumber {...register('number')} type="text" placeholder="Número" />
                                    {errors.number && <TextError>{errors.number.message}</TextError>}
                                </DivInput>
                                <InputComplement {...register('complement')} type="text" placeholder="Complemento" />
                            </div>
                            <div> 
                                <DivInput>
                                    <InputDistrict {...register('district')}  type="text" placeholder="Bairro" />
                                    {errors.district && <TextError>{errors.district.message}</TextError>}
                                </DivInput>
                                <DivInput>
                                    <InputCity {...register('city')}  type="text" placeholder="Cidade" />
                                    {errors.city && <TextError>{errors.city.message}</TextError>}
                                </DivInput>
                                <DivInput>
                                    <InputUf {...register('uf')} type="text" placeholder="UF"  />
                                    {errors.uf && <TextError>{errors.uf.message}</TextError>}
                                </DivInput>
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
                            <input type="hidden" {...register('paymentMethod')} />
                            <PaymentMethod isSelected={optionMethodPay === 'credit'}>
                              <CreditCard />
                              <input  onClick={() => handletOptionMethodPay('credit')} type="button" value="CARTÃO DE CRÉDITO" />
                            </PaymentMethod>
                            <PaymentMethod isSelected={optionMethodPay === 'debit'}>
                                <Bank /> 
                                <input  onClick={() => handletOptionMethodPay('debit')} type="button" value="CARTÃO DE DÉBITO" />
                            </PaymentMethod>
                            <PaymentMethod isSelected={optionMethodPay === 'money'}>
                                <Money />
                                <input  onClick={() => handletOptionMethodPay('money')} type="button" value="DINHEIRO" />
                            </PaymentMethod>
                        </ContainerPay >
                        {errors.paymentMethod && <TextError>{errors.paymentMethod.message}</TextError>}
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
                                <TextRegular>R$ {priceCoffes}0</TextRegular>
                            </ContainerValueItems>
                            <ContainerValueItems>
                                <TextRegular>Entrega</TextRegular>
                                <TextRegular>R$ {priceFrete}0</TextRegular>
                            </ContainerValueItems>
                            <ContainerValueItems>
                                <input type="hidden" {...register('total')} value={priceTotal} />
                                <TextBold>Total</TextBold>
                                <TextBold >R$ {priceTotal}</TextBold>
                            </ContainerValueItems>
                        </div>
                        <ConfirmationButton type="submit">CONFIRMAR PEDIDO</ConfirmationButton>
                    </ContainerCart>
                </section>
            </Container>
        </main>
    )
}