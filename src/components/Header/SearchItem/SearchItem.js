import React from "react";
import {
    SearchItemContainer,
    SearchItemImage,
    SearchItemName
} from "./searchItemStyledComponents";

const SearchItem = ({ images, name, price }) => {
    return (
        <SearchItemContainer align='center' justify='space-between' padding='5px 20px'>
            <SearchItemImage src={images[0]} alt="shoe image"/>
            <span>${price}</span>
            <SearchItemName>{name}</SearchItemName>
        </SearchItemContainer>

    )
}

export default SearchItem;