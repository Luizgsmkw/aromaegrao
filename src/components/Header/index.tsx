
import logo from '../../assets/logo.png';
import { BadgeCart, BadgeLocation, ContainerBadges, ContainerHeader, ContainerImg, TextCity } from './styles';
import {MapPin, ShoppingCart} from 'phosphor-react'

export const Header = () => {
    return(
        <ContainerHeader>
            <ContainerImg>
                <img src={logo} alt="Imagem da logo da aplicação" />
            </ContainerImg>
            <ContainerBadges>
                <BadgeLocation>
                    <MapPin weight="fill"  />
                    <TextCity>Belo Horizonte</TextCity>
                </BadgeLocation>
                <BadgeCart >
                    <ShoppingCart weight="fill" />
                </BadgeCart >
            </ContainerBadges>
        </ContainerHeader>
    )
}