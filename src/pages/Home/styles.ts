import styled from "styled-components";
import imageback from "../../assets/Background.png"


export const ContainerHome = styled.div `
    display: flex;
    align-items: center;
    padding: 94px 115px 108px 160px;
    gap: 20px;
    background-image: url(${imageback});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media(max-width: 1300px){
        img{
            width: 400px;
        }
    }

    @media(max-width: 1200px){
        flex-direction: column-reverse;
        img{
            width: 500px;
        }
    }


    @media(max-width: 900px){
        flex-direction: column-reverse;
        img{
            width: 300px;
        }
    }

    @media(max-width: 620px){
           padding: 60px 40px 70px 40px;
    }

    
    @media(max-width: 350px){
        img{
            width: 250px;
        }
    }

    h2 {
         
        font-family: "Baloo 2", sans-serif;
        font-size: 48px;
        font-weight: bold;
        color: ${props => props.theme["base-title"]};
        margin-bottom: 16px;

        @media(max-width: 1300px){
            font-size: 36px;
        }
        @media(max-width: 900px){
            font-size: 24px;
            text-align: center;
            max-width: 500px;
        }

          @media(max-width: 350px){
             font-size: 18px;
        }

    }

` 

export const TextDescription = styled.p `
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 66px;

    @media(max-width: 1300px){
            max-width: 500px;
            margin-bottom: 33px;
        }
    @media(max-width: 900px){
            font-size: 16px;
            text-align: center; 
    }
     @media(max-width: 350px){
            font-size: 14px;
            line-height: 20px;
    }
`

export const ContainerTopics = styled.div `
    display: flex;
    justify-content: space-between;
    @media(max-width: 620px){
            flex-wrap: wrap;
            align-items: center;
    }
    p{
        margin-bottom: 35px;
        font-size: 16px;
        display: flex;
        align-items: center;

        @media(max-width: 1300px){
            margin-bottom: 20px;
        }
        @media(max-width: 900px){
            font-size: 14px;
        }
    }

`

export const BaseSpan = styled.span `
    width: 15px;
    border-radius: 50%;
    padding: 8px;
    margin-right: 9px;
    display: flex;
    align-items: center;

    @media(max-width: 350px){
            width: 10px;
            padding: 6px;
    }

    svg {
       color: ${props => props.theme.white};
    }
`

export const SpanCart = styled(BaseSpan) `
    background-color: ${props => props.theme["yellow-dark"]};
`

export const SpanPackage = styled(BaseSpan) `
    background-color: ${props => props.theme["yellow"]};
`

export const SpanTimer = styled(BaseSpan) `
    background-color: ${props => props.theme["base-text"]};
`

export const SpanCoffee = styled(BaseSpan) `
    background-color: ${props => props.theme["brown"]};
`

export const ContainerListCoffee = styled.div `
    margin-top: 32px;
    margin-left: 160px;

     @media(max-width: 620px){
           display: flex;
           flex-direction: column;
           align-items: center;
           margin-left: 0;
    }
    
    h2 {
        font-family: "Baloo 2", sans-serif;
        font-size: 32px;
        font-weight: bold;
        color: ${props => props.theme["base-title"]};
        margin-bottom: 54px;
    }

`