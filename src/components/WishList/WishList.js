import React, {useRef} from "react";
import './WishList.css';
import {useDispatch, useSelector} from "react-redux";
import WishlistItem from "./WishlistItem/WishlistItem";
import {hideWishList} from "../../redux/cartReducer";


const WishList = () => {
    const ids = useSelector(({cart}) => cart.favorites);
    const items = useSelector(({shoes}) => shoes.cards.filter(card => ids.includes(card.id)));
    const isShowWishlist = useSelector(({cart}) => cart.showWishlist);
    const containerRef = useRef();

    const dispatch = useDispatch();

    const disableWishlist = () => {
        document.body.style.overflow = 'auto';
        dispatch(hideWishList())
    }

    const handleClick = (e) => {

        if (e.target === containerRef.current) {
            document.body.style.overflow = 'auto';
            dispatch(hideWishList());
        }
    }

    return (
        <div ref={containerRef} onClick={handleClick}
             className={`wishlist-container ${isShowWishlist && 'wishlist-container_active'}`}>
            <div className={`wishlist ${isShowWishlist && 'wishlist_active'}`}>
                <div className="wishlist__head">
                    <span className='wishlist__title'>Wishlist</span>
                    <button onClick={disableWishlist}>×</button>
                </div>
                <div className="wishlist__items">
                    {items.map(item => <WishlistItem key={item.id}
                                                     name={item.name}
                                                     price={item.price}
                                                     image={item.images[0]}
                                                     id={item.id}/>)}
                </div>
                <button className='wishlist__to-wishlist'>view wislist</button>
            </div>
        </div>

    )
}

export default WishList;