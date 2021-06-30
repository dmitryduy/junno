import React, { useState } from 'react';
import logo from '../../assets/imgs/logo.jpg';
import Svg from "../Svg/Svg";
import { useDispatch, useSelector } from "react-redux";
import { searchShoes } from "../../redux/shoesReducer";
import SearchItem from "./SearchItem/SearchItem";
import { NavLink } from "react-router-dom";
import { showWishList } from "../../redux/cartReducer";
import {
    SearchButton, SearchContainer,
    SearchInput,
    SearchResults,
    StyledHeader,
    TotalPrice,
    WidgetCounter,
    WidgetsItem,
    WidgetsList
} from "./headerStyledComponents";


const Header = ({ color }) => {
    const [showSearch, setSearch] = useState(false);

    const foundShoes = useSelector(({shoes}) => shoes.foundCards);
    const {totalPrice, countFavorites} = useSelector(({cart}) => ({
        totalPrice: cart.totalPrice,
        countFavorites: cart.favorites.length,
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

    return (
        <StyledHeader margin='20px 0'>
                <NavLink to='/junno/'>
                    <img src={logo} alt="logo"/>
                </NavLink>
            <SearchContainer>
                <SearchInput onInput={(e) => showShoes(e.target.value)}
                             onBlur={() => hideShoes()}
                             padding='10px'
                />
                <SearchButton color='#fff' bgColor={color}>
                    <Svg type='search'/>
                </SearchButton>
                <SearchResults className={!showSearch && 'disabled'}>
                    {!foundShoes.length && <span className='header__not-found'>Not found</span>}
                    {foundShoes.map(shoe => <SearchItem key={shoe.id} {...shoe}/>).slice(0, 4)}
                </SearchResults>
            </SearchContainer>
            <WidgetsList as='ul' justify='space-between' align='center'>
                <WidgetsItem color={color}>
                    <Svg type='shuffle'/>
                    <WidgetCounter bgColor={color}>1</WidgetCounter>
                </WidgetsItem>
                <WidgetsItem color={color} onClick={activateWishlist}>
                    <Svg type='heart'/>
                    {countFavorites ? <WidgetCounter bgColor={color}>{countFavorites}</WidgetCounter> : null}
                </WidgetsItem>
                <TotalPrice>{totalPrice} ₽</TotalPrice>
            </WidgetsList>
        </StyledHeader>
    )
}

export default Header;