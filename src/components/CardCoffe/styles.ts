import styled from "styled-components";

export const ContainerCard = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    margin-right: 24px;
    border-radius: 6px 36px 6px 36px;
    
    width: 256px;
    background-color: ${props => props.theme["base-card"]};
    padding-bottom: 20px;

    @media(max-width: 510px){
        margin-right: 0;
    }
    img {
        width: 120px;
        margin-top: -25px;
        margin-bottom: 12px;
    }

    h3 {
        margin-top: 16px;
        margin-bottom: 10px;
        font-family: "Baloo 2", sans-serif;
        font-size: 20px;
        font-weight: bold;
        color: ${props => props.theme["base-title"]};
    }
`

export const SpanType = styled.span `
    background-color: ${props => props.theme["yellow-light"]};
    color: ${props => props.theme["yellow-dark"]};
    font-size: 10px;
    padding: 4px 8px;
    border-radius: 21px;
    margin-right: 4px;
    font-weight: bold;

`

export const TextDescription = styled.p `
    width: 236px;
    min-height: 36px;
    margin-bottom: 33px;
    text-align: center;
    font-size: 14px;
`

export const ContainerPrice = styled.div `
    display: flex;
    align-items: center;
    gap: 23px;

    p {
        font-size: 14px;
        span{
            font-family: "Baloo 2", sans-serif;
            font-size: 24px;
            font-weight: bold;
        }
    }

    div {
        display: flex;
        gap: 8px;
    }

`

export const CotaninerQuantity = styled.div `
    display: flex;
    align-items: center;
    background-color: ${props => props.theme["base-button"]};
    padding: 8.5px 12px;
    border-radius: 6px;

    button {
        cursor: pointer;
        color: ${props => props.theme.brown};
        border: none;
        background-color: ${props => props.theme["base-button"]};
        svg {
            color: ${props => props.theme.brown};
        }
    }

`

export const ButtonCart = styled.button `
    width: 38px;
    height: 38px;
    cursor: pointer;
    background-color: ${props => props.theme["brown-dark"]};
    border-radius: 6px;
    border: none;
    svg {
         color: ${props => props.theme.white};
         font-size: 18px;
    }
   
`