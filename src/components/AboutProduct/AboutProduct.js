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


const AboutProduct = () => {

    const {id} = useParams();
    const card = useSelector(({shoes}) => shoes.cards[id - 1]);
    const [activeImage, setImage] = useState(0);//index
    const [countItems, setCountItems] = useState(1);

    const favorites = useSelector(({cart}) => cart.favorites);
    const dispatch = useDispatch();


    const newPrice = card && (+card.price * (1 - +card.discount / 100)).toFixed(2);

    useEffect(() => {
        if (!card)
            dispatch(fetchCards());
    }, []);

    useEffect(() => {
       window.scrollTo(0,0);
    },[id]);

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
        if (favorites.includes(card.id)) {
            dispatch(removeFavorite(card.id))
        } else {
            dispatch(addFavorites(card.id));
        }

    }

    return (
        <>
            <Header/>
            {card && <>
                <div className='about'>
                    <div className="about__gallery">
                        {card.isNew && <div className="about__label">New</div>}
                        <img className='about__main-image'
                             width={400}
                             src={card.images[activeImage]}
                             alt="product image"/>
                        <div className="about__gallery-items">
                            {card.images.map((image, index) => {
                                return (
                                    <img key={index}
                                         width={100}
                                         className={`about__gallery-item ${index === activeImage && 'about__gallery-item_active'}`}
                                         src={image}
                                         alt="gallery image"
                                         onClick={() => changeImage(index)}/>
                                )
                            })}
                        </div>
                    </div>
                    <div className="about__info">
                        <h1 className="about__name">{card && card.name}</h1>
                        <Rating rating={card.rating}/>
                        <div className="about__prices">
                            <div className={`${card.discount && 'about__old__price'} about__price`}>${card.price}</div>
                            {card.discount && <div className="about__new-price">${newPrice}</div>}
                            {card.discount && <div className="about__discount">Save {card.discount}%</div>}
                        </div>
                        <p className="about__description">{card.description}</p>
                        <div className="about__cart">
                            <div className="about__counter-wrapper">
                                <input onInput={(e) => changeItemCount(e.target.value)}
                                       value={countItems}
                                       className='about__counter'
                                       type="text"
                                />
                                <button onClick={incrementItems} className='about__increment'>+</button>
                                <button onClick={decrementItems} className='about__decrement'>-</button>
                            </div>
                            <button onClick={AddToCart} className='about__add-to-cart'>+ add to cart</button>
                        </div>
                        <div className="about__widgets">
                            <div onClick={toggleFavorite} className="about__widget about__favorite">
                                <Svg type='heart'/>
                                <span>{favorites.includes(card.id) ? 'Remove from ' : 'Add to '}wishlist</span>
                            </div>
                            <div className="about__widget about__compare">
                                <Svg type='shuffle'/>
                                <span>Add to compare</span>
                            </div>
                        </div>
                    </div>
                </div>
                <SuggestProducts id={id}/>
            </>
            }
        </>

    )
}

export default AboutProduct;