import React, {useRef} from "react";
import './WishlistItem.css';
import {useDispatch} from "react-redux";
import {removeFavorite} from "../../../redux/cartReducer";


const WishlistItem = ({name, image, price, id}) => {
    const dispatch = useDispatch();
    const itemRef = useRef();

    const deleteFavorite = () => {
        itemRef.current.classList.add('remove-animation');
        setTimeout(() =>  dispatch(removeFavorite(id)), 200);
    }

    return (
        <div ref={itemRef} className='wishlist-item'>
            <img className='wishlist-item__image' src={image} alt="product image"/>
            <div className="wishlist-item__about">
                <div className="wishlist-item__name">{name.length > 25 ? name.slice(0,25) + '...' : name}</div>
                <div className="wishlist-item__price">${price}</div>
            </div>
            <div onClick={deleteFavorite} className="wishlist-item__remove">×</div>
        </div>
    )
}


export default WishlistItem;