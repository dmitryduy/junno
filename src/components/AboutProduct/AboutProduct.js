import React, {useEffect, useState} from "react";
import './AboutProduct.css';
import Header from "../Header/Header";
import {useParams} from 'react-router-dom';
import Rating from "../Rating/Rating";
import Svg from "../Svg/Svg";
import {useDispatch, useSelector} from "react-redux";
import {addFavorites, addToCart, removeFavorite} from "../../redux/cartReducer";
import SuggestProducts from "../SuggestProducts/SuggestProducts";
import {fetchCards} from "../../redux/shoesReducer";
import {themeSettings} from "../../constants";
import {FlexContainer} from "../../GlobalContainers";
import {
    AboutCardTitle, AboutContainer,
    AboutGallery,
    CardDescription,
    CardInfo,
    CompareWidget,
    DecrementButton,
    DefaultPrice,
    DiscountLabel,
    FavoriteWidget,
    GalleryItem,
    IncrementButton,
    MainImage,
    NewItemLabel,
    NewPrice,
    OrderButton,
    OrderContainer,
    OrderInput,
    WidgetsContainer
} from "./aboutStyledComponents";


const AboutProduct = () => {

    const {id} = useParams();
    const card = useSelector(({shoes}) => shoes.cards[id - 1]);
    const [activeImage, setImage] = useState(0);//index
    const [countItems, setCountItems] = useState(1);

    const favorites = useSelector(({cart}) => cart.favorites);
    const dispatch = useDispatch();


    const newPrice = card && (+card.price * (1 - +card.discount / 100)).toFixed(2);
/*
    useEffect(() => {
        if (!card)
            dispatch(fetchCards());
    }, []);*/

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const changeImage = newImage => {
        setImage(newImage);
    }

    const changeItemCount = value => {

        if (value.match(/\D/) || +value > 10) return;
        setCountItems(+value);
    }

    const incrementItems = () => {
        countItems < 10 && countItems >= 0 && setCountItems(prev => prev + 1);
    }

    const decrementItems = () => {
        countItems <= 10 && countItems > 0 && setCountItems(prev => prev - 1);
    }

    const AddToCart = () => {
        if (!countItems) return;
        dispatch(addToCart(card.id, card.price, countItems));
    }

    const toggleFavorite = () => {
        favorites.includes(card.id)
            ? dispatch(removeFavorite(card.id))
            : dispatch(addFavorites(card.id));


    }

    return (
        <>
            <Header color={themeSettings.PRODUCT_PAGE_COLOR}/>
            {card && <>
                <AboutContainer justify='space-between'>
                    <AboutGallery>
                        {card.isNew && <NewItemLabel>New</NewItemLabel>}
                        <MainImage
                            width={400}
                            src={card.images[activeImage]}/>
                        {/* Small gallery container */}
                        <FlexContainer justify='space-between'>
                            {card.images.map((image, index) => {
                                return (
                                    <GalleryItem key={index}
                                                 width={100}
                                                 className={index === activeImage && 'about__gallery-item_active'}
                                                 src={image}
                                                 onClick={() => changeImage(index)}/>
                                )
                            })}
                        </FlexContainer>
                    </AboutGallery>
                    <CardInfo direction='column' flex='6' margin='0 0 0 50px'>
                        <AboutCardTitle>{card && card.name}</AboutCardTitle>
                        <Rating rating={card.rating}/>
                        {/* Card Prices */}
                        <FlexContainer align='center' margin='10px 0 20px'>
                            <DefaultPrice className={card.discount && 'about__old__price'}>${card.price}</DefaultPrice>
                            {card.discount && <NewPrice>${newPrice}</NewPrice>}
                            {card.discount && <DiscountLabel>Save {card.discount}%</DiscountLabel>}
                        </FlexContainer>
                        <CardDescription>{card.description}</CardDescription>
                        <OrderContainer margin='50px 0 0'>
                            <div className="about__counter-wrapper">
                                <OrderInput height='60px' width='40px' padding='2px 4px'
                                            onInput={(e) => changeItemCount(e.target.value)}
                                            value={countItems}
                                />
                                <IncrementButton onClick={incrementItems}>+</IncrementButton>
                                <DecrementButton onClick={decrementItems}>-</DecrementButton>
                            </div>
                            <OrderButton color='#fff'
                                         bgColor='#1d1d1d'
                                         onClick={AddToCart}>+ add to cart</OrderButton>
                        </OrderContainer>
                        <WidgetsContainer margin='40px 0 0'>
                            <FavoriteWidget onClick={toggleFavorite}>
                                <Svg type='heart'/>
                                <span>{favorites.includes(card.id) ? 'Remove from ' : 'Add to '}wishlist</span>
                            </FavoriteWidget>
                            <CompareWidget>
                                <Svg type='shuffle'/>
                                <span>Add to compare</span>
                            </CompareWidget>
                        </WidgetsContainer>
                    </CardInfo>
                </AboutContainer>
                <SuggestProducts id={id}/>
            </>
            }
        </>

    )
}

export default AboutProduct;