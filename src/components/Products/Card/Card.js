import React, {useRef, useState} from "react";
import './Card.css';
import Svg from "../../Svg/Svg";
import {addFavorites, removeFavorite} from "../../../redux/cartReducer";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import Rating from "../../Rating/Rating";
import {
    CardContainer, CardImage, CardPriceContainer,
    CardTitle,
    CardWidget,
    CardWidgetsContainer,
    Promotions,
    PromotionsItem
} from "./cardStyledComponents";
import {FlexContainer, ImageContainer} from "../../../GlobalContainers";

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
        <CardContainer className='card' direction='column' padding='10px' margin='0 0 20px 20px'
                       onMouseEnter={showCartItems}
                       onMouseLeave={hideCartItem}>
            <div ref={thumbnailRef} className="card__thumbnail">
                <NavLink to={`/about/${id}`}>
                    <CardImage src={images[0]}/>
                </NavLink>
                <Promotions justify='space-between' >
                    {/* Discount label */}
                    {discount && <PromotionsItem>-{discount}%</PromotionsItem>}
                    {/* New product label */}
                    {isNew && <PromotionsItem>New</PromotionsItem>}
                </Promotions>
                <CardWidgetsContainer justify='center' className={hiddenCartItems ? 'card_show' : 'card_hide'}>
                    <CardWidget className={favorites.includes(id) && 'favorite'} onClick={toggleFavorites}><Svg type='heart'/>
                    </CardWidget>
                    <CardWidget><Svg type='shuffle'/></CardWidget>
                    <CardWidget><Svg type='search'/></CardWidget>
                </CardWidgetsContainer>
            </div>
            {/* Card description */}
            <FlexContainer direction='column' align='flex-start'>
                <NavLink to={`/about/${id}`}>
                    <CardTitle>{name}</CardTitle>
                </NavLink>
                <Rating rating={rating}/>
                <CardPriceContainer justify='space-between' align='center' className="cart__price">
                    {discount && <span className="card__old-price">${price}</span>}
                    <span className={discount && 'card__discount-price'}>${discount ? newPrice : price}</span>
                    <div><Svg type='cart'/></div>
                </CardPriceContainer>
            </FlexContainer>
        </CardContainer>
    )
}

export default Card;