import React from "react";
import './SearchItem.css';

const SearchItem = ({images, name, price}) => {
    return (
        <div className='search-item'>
            <img className='search-item__img' src={images[0]} alt="shoe image"/>
            <span className='search-item__price'>${price}</span>
            <span className='search-item__name'>{name}</span>
        </div>
    )
}

export default SearchItem;