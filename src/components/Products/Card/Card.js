import React, {useRef, useState} from "react";
import './Card.css';
import Svg from "../../Svg/Svg";
import {addFavorites, addToCart, removeFavorite} from "../../../redux/cartReducer";
import {useDispatch} from "react-redux";

const Card = ({isNew, name, price, discount, rating, images, id, favorite}) => {
    const [hiddenCartItems, setVisibilityCartItems] = useState(false);
    const thumbnailRef = useRef();
    const dispatch = useDispatch();

    const showCartItems = () => {
        setVisibilityCartItems(true)
    }

    const  hideCartItem = () => {
        setVisibilityCartItems(false)
    }

    const toggleFavorites = () => {
        if (!favorite) {
            dispatch(addFavorites(id));
        }
        else {
            dispatch(removeFavorite(id));
        }
    }

    const addCart = () => {
        dispatch(addToCart(id, +price));
    }

    return (
        <div className='card' onMouseEnter={showCartItems}
             onMouseLeave={hideCartItem}>
            <div ref={thumbnailRef} className="card__thumbnail" >
                <img src={images[0]} alt="shoes image"/>
                <div className="card__promotions">
                    {discount && <span className="card__discount">-{discount}%</span>}
                    {isNew &&<span className="card__new">New</span>}
                </div>
                <div className={`card__cart-items ${hiddenCartItems ? 'show': 'hide'}`}>
                    <div className={favorite && 'favorite'} onClick={toggleFavorites}><Svg type='heart'/></div>
                    <div><Svg type='shuffle'/></div>
                    <div><Svg type='search'/></div>
                </div>
            </div>
            <div className="card__description">
                <div className="card__name">{name}</div>
                <div className="card__rate">
                    {Array(rating).fill(0).map((_, index) => <Svg key={index} type='star'/>)}
                </div>
                <div className="cart__price">
                    <span>${price}</span>
                    <div onClick={addCart}><Svg type='cart'/></div>
                </div>
            </div>
        </div>
    )
}

export default Card;