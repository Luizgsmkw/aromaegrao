import { styled } from "styled-components";

export const ContainerHeader = styled.header `
    height: 104px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 160px;

    @media(max-width: 768px){
        margin: 0px 50px;
    }

     @media(max-width: 400px){
        margin: 0px 5px;
    }

`

export const ContainerImg = styled.div `
    img {
        height: 90px;
        width: 140px;
    }
`

export const ContainerBadges = styled.div `
    display: flex;
    align-items: center;
    gap: 12px;
`

export const BadgeLocation = styled.span `
    background-color: ${props => props.theme["brown-light"]};
    padding: 7px 7px;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: self-end;
    gap: 2px;

    svg{
        color: ${props => props.theme["brown-dark"]};
    }

`

export const TextCity = styled.p `
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    font-weight: bold;

`

export const BadgeCart = styled.span `
    background-color: ${props => props.theme["yellow-light"]};
    padding: 6px;
    border-radius: 6px;
    display: flex;
    align-items: center;

    svg {
        color: ${props => props.theme["yellow-dark"]};
    }
`
