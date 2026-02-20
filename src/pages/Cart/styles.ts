import styled from "styled-components";



export const Container = styled.form `
    display: flex;
    justify-content: center;
    gap: 32px;

     @media(max-width: 1200px){
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;

         section {
            width: 60%;
            display: flex;
            flex-direction: column;
            align-items: center;
            @media(max-width: 850px){
                width: 80%;
            }
         }
    }

    h2 {
        font-size: 18px;
        font-family: "Baloo 2", sans-serif;
        font-weight: bold;
        margin-bottom: 15px;

        @media(max-width: 1200px){
            text-align: center;
        }
    }
`

export const BaseContainer = styled.div `
    padding: 40px;
    background-color: ${props => props.theme["base-card"]};
    border-radius: 6px;
    margin-bottom: 12px;

    @media(max-width: 1200px){
        width: 100%;
    }

    @media(max-width: 850px){
        max-width: 100%;
        padding-left: 20px;
        padding-right: 20px;
    }
     @media(max-width: 500px){
        padding-left: 10px;
        padding-right: 10px;
    }
`

export const ContainerAddress = styled.div `
    display: flex;
    gap: 8px;
    align-items: start;
    margin-bottom: 32px;

    svg {
        color: ${props => props.theme["yellow-dark"]};
    }

`

export const InputBase = styled.input `
    border: none;
    background-color: ${props => props.theme["base-input"]};
    padding: 12px;
    border-radius: 4px;
    margin-bottom: 16px;

    @media(max-width: 500px){
        &::placeholder{
            font-size: 10px;
        }
    }

    @media(max-width: 500px){
        max-width: 85% !important;
    }

`

export const ContainerInputs = styled.div `
    display: flex;
    flex-direction: column;
    div {
        display: flex;
        gap: 12px;

         @media(max-width: 650px){
            flex-direction: column;
        }
    }

`

export const InputCep = styled(InputBase) `
    width: 200px;
    @media(max-width: 650px){
        width: 100%;
    }
`

export const InputStreet = styled(InputBase) `
    max-width: 100%;
    @media(max-width: 650px){
        width: 100%;
    }
`

export const InputNumber = styled(InputBase) `
    max-width: 30%;
`

export const InputComplement = styled(InputBase) `
    width: 70%;
    @media(max-width: 650px){
        width: 100%;
    }
`

export const InputDistrict = styled(InputBase) `
    width: 30%;
    @media(max-width: 650px){
        width: 100%;
    }
`

export const InputCity = styled(InputBase) `
    width: 60%;
    @media(max-width: 650px){
        width: 100%;
    }
`

export const InputUf = styled(InputBase) `
    width: 10%;
`

export const ContainerPay = styled.div `
    display: flex;
    gap: 12px;
    flex-wrap: wrap;

    @media(max-width: 850px){
        flex-direction: column;
        align-items: center;
    }

    button {
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        border: none;
        background-color: ${props => props.theme["base-button"]};
        padding: 16px;
        font-size: 14px;
        @media(max-width: 850px){
            width: 100%;
        }
         @media(max-width: 500px){
            font-size: 10px;
        }
    }
`

export const ContainerCart = styled.div `
    border-radius: 6px 36px 6px 36px;
    padding: 40px;

    background-color: ${props => props.theme["base-card"]};

    @media(max-width: 1200px){
        width: 100%;
    }

    @media(max-width: 500px){
       padding-left: 10px;
       padding-right: 10px;
    }

    li {
        margin-bottom: 24px;
    }

`

export const ContainerListCoffe = styled.div `
    display: flex;
    align-items: flex-start;
    margin-bottom: 24px;

    img {
        width: 64px;
        margin-right: 20px;

        @media(max-width: 500px){
            width: 32px;
            margin-right: 10px;
        }
    }
`

export const ContainerCoffee = styled.div `

    margin-right: 50px;

    @media(max-width: 500px){
            margin-right: 20px;
        }

    p {
        font-size: 16px;
        margin-bottom: 8px;
         @media(max-width: 500px){
            font-size: 12px;
        }
    }
`

export const ContainerQuantityAndRemove = styled.div `
    display: flex;
    gap: 8px;

`

export const ContainerQuantity = styled.div `

    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 62px;
    background-color: ${props => props.theme["base-button"]};
    padding: 7px 5px;
    border-radius: 6px;

     @media(max-width: 500px){
          width: 50px;
          padding: 7px 3px;
    }

   

    button {
        cursor: pointer;
        color: ${props => props.theme.brown};
        border: none;
        background-color: ${props => props.theme["base-button"]};
        svg {
            color: ${props => props.theme.brown};
        }
        @media(max-width: 500px){
            padding: 0;
        }
    }

`
export const ButtonRemove = styled.button `
        display: flex;
        align-items: center;
        gap: 4px;
        cursor: pointer;
        border: none;
        border-radius: 6px;
        background-color: ${props => props.theme["base-button"]};
        svg {
            color: ${props => props.theme.brown};
        }
`

export const Price = styled.p `
    font-weight: bold;

`

export const Line = styled.div `
    height: 1px;
    background-color: ${props => props.theme["base-button"]};
    margin: auto;
`

export const ContainerValueItems = styled.div `
    display: flex;
    justify-content: space-between;
    margin-bottom: 13.5px;
`

export const TextRegular = styled.p `
    font-size: 14px;

    @media(max-width: 500px){
        font-size: 10px;
    }

`

export const TextRegularMedium = styled.p `
    font-size: 16px;
    margin-bottom: 2px;
    @media(max-width: 500px){
        font-size: 12px;
    }
`

export const TextBold = styled.p `
    font-size: 20px;
    font-weight: bold;
    @media(max-width: 500px){
        font-size: 16px;
    }
`

export const ConfirmationButton = styled.button `
    width: 100%;
    cursor: pointer;
    background-color: ${props => props.theme.yellow};
    color: ${props => props.theme.white};
    border: none;
    border-radius: 6px;
    padding: 12px 0 12px 0;
    margin-top: 10.5px;

`