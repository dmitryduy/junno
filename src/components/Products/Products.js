import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Category from "./Category/Category";
import Card from "./Card/Card";
import {fetchCards} from "../../redux/shoesReducer";
import {FlexContainer} from "../../GlobalContainers";
import {CardsContainer, ProductSubtitle, ProductTitle} from "./productsStyledComponents";

const Products = () => {

    const dispatch = useDispatch();

    const {categories, activeCategoryIndex, cards} = useSelector(({shoes}) => ({
        categories: shoes.categories,
        activeCategoryIndex: shoes.activeCategory,
        cards: shoes.cards
    }));

    useEffect(() => {
        if (!cards.length)
            dispatch(fetchCards());
    }, []);

    const setCategory = useDispatch();

    return (
        <FlexContainer direction='column' margin='30px 0 0' align='center'>
            <ProductTitle>Our Products</ProductTitle>
            <ProductSubtitle>Add our products to weekly line up</ProductSubtitle>
            {/* Category container */}
            <FlexContainer justify='center' wrap>
                {categories.map((category, index) =>
                    <Category index={index} setCategory={setCategory} key={index}
                              name={category}
                              active={activeCategoryIndex === index && 'active'}/>)}
            </FlexContainer>
            {/* Cards container*/}
            <CardsContainer justify='center' margin='40px 0 0' wrap>
                {cards.map(card => <Card key={card.id} {...card}/>)}
                <div style={{flex: '1'}}/>
            </CardsContainer>
        </FlexContainer>
    )
}

export default Products;