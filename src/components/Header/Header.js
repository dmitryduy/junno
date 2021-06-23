import React, {useState} from 'react';
import logo from '../../assets/imgs/logo.jpg';
import Svg from "../Svg/Svg";
import './Header.css';
import {useDispatch, useSelector} from "react-redux";
import {searchShoes} from "../../redux/shoesReducer";
import SearchItem from "./SearchItem/SearchItem";
import {NavLink} from "react-router-dom";
import {showWishList} from "../../redux/cartReducer";

const Header = () => {

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
        <div className='header'>
            <div className="header__logo">
                <NavLink to='/'>
                    <img src={logo} alt="logo"/>
                </NavLink>
            </div>
            <div className='header__search'>
                <input onInput={(e) => showShoes(e.target.value)}
                       onBlur={() => hideShoes()}
                       type="text"
                       placeholder='Enter your search key...'/>
                <button className='header__search-btn'>
                    <Svg type='search'/>
                </button>
                <div className={`header__hidden-search ${!showSearch && 'hidden'}`}>
                    {!foundShoes.length && <span className='header__not-found'>Not found</span>}
                    {foundShoes.map(shoe => <SearchItem key={shoe.id} {...shoe}/>).slice(0, 4)}
                </div>
            </div>
            <div className="header__cart-block-links">
                <div className="header__shuffle header__cart-block-link">
                    <Svg type='shuffle'/>
                    <span className='count'>1</span>
                </div>
                <div onClick={activateWishlist} className="header__favorite header__cart-block-link">
                    <Svg type='heart'/>
                    {countFavorites ? <span className='count'>{countFavorites}</span> : null}
                </div>
                <div className="header__cart header__cart-block-link">
                    <div className="header__cart-block-link">
                        <Svg type='bag'/>
                        {countInCart ? <span className='count'>{countInCart > 99 ? 99 : countInCart}</span> : null}
                    </div>
                    <span className='header__total-price'>${(totalPrice > 9999.99 ? 9999.99 : totalPrice) || 0}</span>
                </div>
            </div>
        </div>
    )
}

export default Header;