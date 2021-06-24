import React from "react";

import {SearchItemContainer, SearchItemImage, SearchItemName} from "./searchItemStyledComponents";
import {NavLink} from "react-router-dom";

const SearchItem = ({images, name, price, id}) => {
    return (
        <NavLink to={`/about/${id}`}>
            <SearchItemContainer align='center' justify='space-between' padding='5px 50px'>
                <SearchItemImage src={images[0]} alt="shoe image"/>
                <span>${price}</span>
                <SearchItemName className='search-item__name'>{name}</SearchItemName>
            </SearchItemContainer>
        </NavLink>

    )
}

export default SearchItem;