import React, {useState} from 'react';
import logo from '../../assets/imgs/logo.jpg';
import Svg from "../Svg/Svg";
import './Header.css';
import {useDispatch, useSelector} from "react-redux";
import {searchShoes} from "../../redux/shoesReducer";
import SearchItem from "./SearchItem/SearchItem";
import {NavLink} from "react-router-dom";
import {showWishList} from "../../redux/cartReducer";
import {
    SearchButton,
    SearchInput,
    SearchResults,
    StyledHeader,
    TotalPrice,
    WidgetCounter,
    WidgetsItem,
    WidgetsList
} from "./headerStyledComponents";



const Header = ({color}) => {

    const [showSearch, setSearch] = useState(false);
    const foundShoes = useSelector(({shoes}) => shoes.foundCards);
    const {countInCart, totalPrice} = useSelector(({cart}) => ({
        countInCart: cart.cart.reduce((acc, item) => acc + item.count, 0),
        totalPrice: +cart.totalPrice
    }));
    const dispatch = useDispatch();


    const showShoes = text => {
        setSearch(true);
        dispatch(searchShoes(text));
    }

    const hideShoes = () => {
        setSearch(false);
    }

    const activateWishlist = () => {
        document.body.style.overflow = 'hidden';
        dispatch(showWishList());
    }

    const countFavorites = useSelector(({cart}) => cart.favorites.length);
    return (
        <StyledHeader margin='20px 0'>
            <div className="header__logo">
                <NavLink to='/'>
                    <img src={logo} alt="logo"/>
                </NavLink>
            </div>
            <div className='header__search'>
                <SearchInput onInput={(e) => showShoes(e.target.value)}
                             onBlur={() => hideShoes()}
                             padding='10px'
                />
                <SearchButton color='#fff' bgColor={color}>
                    <Svg type='search'/>
                </SearchButton>
                <SearchResults className={!showSearch && 'header__hidden-search_disabled'}>
                    {!foundShoes.length && <span className='header__not-found'>Not found</span>}
                    {foundShoes.map(shoe => <SearchItem key={shoe.id} {...shoe}/>).slice(0, 4)}
                </SearchResults>
            </div>
            <WidgetsList as='ul' justify='space-between' align='center'>
                <WidgetsItem color={color}>
                    <Svg type='shuffle'/>
                    <WidgetCounter bgColor={color} >1</WidgetCounter>
                </WidgetsItem>
                <WidgetsItem color={color} onClick={activateWishlist}>
                    <Svg type='heart'/>
                    {countFavorites ? <WidgetCounter bgColor={color}>{countFavorites}</WidgetCounter> : null}
                </WidgetsItem>
                <WidgetsItem color={color} className="header__cart">
                    <div className="header__cart-svg">
                        <Svg type='bag'/>
                        {countInCart ? <WidgetCounter bgColor={color}>{countInCart > 99 ? 99 : countInCart}</WidgetCounter> : null}
                    </div>
                    <TotalPrice>${(totalPrice > 9999.99 ? 9999.99 : totalPrice) || 0}</TotalPrice>
                </WidgetsItem>
            </WidgetsList>
        </StyledHeader>
    )
}

export default Header;