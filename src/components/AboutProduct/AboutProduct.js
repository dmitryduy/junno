import React, { useEffect } from "react";
import Header from "../Header/Header";
import { useParams } from 'react-router-dom';
import Rating from "../Rating/Rating";
import { useDispatch, useSelector } from "react-redux";
import SuggestProducts from "../SuggestProducts/SuggestProducts";
import { fetchCards } from "../../redux/shoesReducer";
import { themeSettings } from "../../constants";
import { FlexContainer } from "../../GlobalContainers";
import Gallery from "./Gallery/Gallery";
import Order from "./Order/Order";
import Widgets from "./Widgets/Widgets";
import styled from "styled-components";

export const AboutContainer = styled(FlexContainer)`
  @media ${props => props.theme.media.laptopAndLower} {
    flex-direction: column;
  }

`;

const CardInfo = styled(FlexContainer)`
  @media ${props => props.theme.media.tablet} {
    margin-top: 40px;
  }
  @media ${props => props.theme.media.phone} {
    margin-top: 40px;
    margin-left: 0;
  }
`;

const AboutCardTitle = styled.h1`
  font-weight: 400;
  color: #707070;
`;

const DefaultPrice = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  
  &.old-price {
    text-decoration: line-through;
    color: #9b9b9b;
    font-size: 1.3em;
    font-weight: 400;
  }
`;

const NewPrice = styled.div`
  margin-left: 10px;
  font-size: 1.5em;
  font-weight: bold;
`;

const DiscountLabel = styled.div`
  margin-left: 20px;
  position: relative;
  bottom: 4px;
  background-color: #1d1d1d;
  padding: 0 5px;
  color: #fff;
`;

const CardDescription = styled.code`
  width: 100%;
  color: #707070;
`;


const AboutProduct = () => {
    const {id} = useParams();

    const card = useSelector(({shoes}) => shoes.cards.filter(card => card.id === +id)[0]);

    const dispatch = useDispatch();

    const newPrice = card && (parseInt(card.price.split(' ').join("")) * (1 - card['discount'] / 100)).toFixed(2);

    useEffect(() => {
        card || dispatch(fetchCards());
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <>
            <Header color={themeSettings.PRODUCT_PAGE_COLOR}/>
            {card && <>
                <AboutContainer justify='space-between'>
                    <Gallery isNew={card.isNew} images={card.images}/>
                    <CardInfo direction='column' flex='6' margin='0 0 0 50px'>
                        <AboutCardTitle>{card && card.name}</AboutCardTitle>
                        <Rating rating={card.rating}/>
                        {/* Card Prices */}
                        <FlexContainer align='center' margin='10px 0 20px'>
                            <DefaultPrice className={card['discount'] && 'old-price'}>{card.price} Р</DefaultPrice>
                            {card['discount'] && <NewPrice>{newPrice} Р</NewPrice>}
                            {card['discount'] && <DiscountLabel>Save {card['discount']}%</DiscountLabel>}
                        </FlexContainer>
                        <CardDescription>{card.description}</CardDescription>
                        <Order cardId={card.id} price={newPrice}/>
                        <Widgets cardId={card.id}/>
                    </CardInfo>
                </AboutContainer>
                <SuggestProducts id={id}/>
            </>
            }
        </>

    )
}

export default AboutProduct;