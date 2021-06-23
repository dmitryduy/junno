import React, {useRef, useState} from "react";
import './Card.css';
import Svg from "../../Svg/Svg";
import {addFavorites, removeFavorite} from "../../../redux/cartReducer";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import Rating from "../../Rating/Rating";

const Card = ({isNew, name, price, discount, rating, images, id, favorite}) => {
    const [hiddenCartItems, setVisibilityCartItems] = useState(false);
    const favorites = useSelector(({cart}) => cart.favorites);
    const thumbnailRef = useRef();
    const dispatch = useDispatch();

    const newPrice = (+price * (1 - +discount / 100)).toFixed(2);

    const showCartItems = () => {
        setVisibilityCartItems(true)
    }

    const hideCartItem = () => {
        setVisibilityCartItems(false)
    }

    const toggleFavorites = () => {
        if (!favorites.includes(id)) {
            dispatch(addFavorites(id));
        } else {
            dispatch(removeFavorite(id));
        }
    }

    return (
        <div className='card' onMouseEnter={showCartItems}
             onMouseLeave={hideCartItem}>
            <div ref={thumbnailRef} className="card__thumbnail">
                <NavLink to={`/about/${id}`}>
                     <img src={images[0]} alt="shoes image"/>
                </NavLink>
                <div className="card__promotions">
                    {discount && <span className="card__discount">-{discount}%</span>}
                    {isNew && <span className="card__new">New</span>}
                </div>
                <div className={`card__cart-items ${hiddenCartItems ? 'show' : 'hide'}`}>
                    <div className={favorites.includes(id) && 'favorite'} onClick={toggleFavorites}><Svg type='heart'/></div>
                    <div><Svg type='shuffle'/></div>
                    <div><Svg type='search'/></div>
                </div>
            </div>
            <div className="card__description">
                <NavLink to={`/about/${id}`}>
                    <div className="card__name">{name}</div>
                </NavLink>
                <Rating rating={rating}/>
                <div className="cart__price">
                    {discount && <span className="cart__old-price">${price}</span>}
                    <span className={discount && 'card__discount-price'}>${discount ? newPrice : price}</span>
                    <div><Svg type='cart'/></div>
                </div>
            </div>
        </div>
    )
}

export default Card;