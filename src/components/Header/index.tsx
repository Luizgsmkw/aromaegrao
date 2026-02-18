
import logo from '../../assets/logo.png';
import { useCart } from '../../hook/useCart';
import { BadgeCart, BadgeLocation, ContainerBadges, ContainerHeader, ContainerImg, TextCity } from './styles';
import {MapPin, ShoppingCart} from 'phosphor-react';
import {NavLink} from 'react-router-dom'

export const Header = () => {

    const {numberOfProducts} = useCart();

    return(
        <ContainerHeader>
            <ContainerImg>
                <NavLink to='/'><img src={logo} alt="Imagem da logo da aplicação" /></NavLink>
            </ContainerImg>
            <ContainerBadges>
                <BadgeLocation>
                    <MapPin weight="fill"  />
                    <TextCity>Belo Horizonte</TextCity>
                </BadgeLocation>
                <BadgeCart >
                    <NavLink to='/cart'><ShoppingCart weight="fill" /></NavLink>
                    <div>
                        <span>{numberOfProducts}</span>
                    </div>
                </BadgeCart >
            </ContainerBadges>
        </ContainerHeader>
    )
}