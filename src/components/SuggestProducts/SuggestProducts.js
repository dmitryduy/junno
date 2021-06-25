import React from "react";
import Card from "../Products/Card/Card";
import {useSelector} from "react-redux";
import {CardsContainer} from "../Products/productsStyledComponents";
import {SuggestContainer, SuggestSubtitle, SuggestTitle} from "./suggestStyledComponents";


const SuggestProducts = ({id}) => {

    const similarCards = useSelector(({shoes}) => shoes.cards.filter(item => item.similar.includes(+id)));

    return (
        <SuggestContainer direction='column' align='center' margin='50px 0 0'>
            <SuggestTitle>You Must Also Like</SuggestTitle>
            <SuggestSubtitle>Add Related products to weekly line up</SuggestSubtitle>
            <CardsContainer justify='center' margin='50px 0 0' wrap>
                {similarCards.map(item => <Card key={item.id} {...item}/>)}
            </ CardsContainer>
        </SuggestContainer>
    )
}

export default SuggestProducts;