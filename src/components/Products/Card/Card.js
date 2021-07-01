import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Rating from "../../Rating/Rating";
import { FlexContainer } from "../../../GlobalContainers";
import styled from "styled-components";
import Widgets from "./Widgets/Widgets";
import Price from "./Price/Price";

const CardContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-areas: "image" "widgets" "description";
  grid-row-gap: 15px;
  transition: .2s linear;
  padding: 10px;

  @media ${props => props.theme.media.desktop} {
    &:hover {
      box-shadow: 4px 2px 19px 3px rgba(34, 60, 80, 0.2);
    }
  }
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  grid-area: image;

  &hover {
    cursor: pointer;
  }
`;

const PromotionsItem = styled.span`
  border-radius: 5px;
  height: 20px;
  padding: 0 10px;
  color: white;
  font-weight: 600;
`;

const PromotionDiscountItem = styled(PromotionsItem)`
  background-color: #10a341;
`;

const PromotionNewItem = styled(PromotionsItem)`
  background-color: #f33535;

`;

const DescriptionContainer = styled(FlexContainer)`
  grid-area: description;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
`;

const CardTitle = styled.span`
  color: #707070;
  transition: .3s ease;
  display: block;
  margin-bottom: 10px;

  @media ${props => props.theme.media.desktop} {
    &:hover {
      color: #f33535;
      cursor: pointer;
    }
  }
`;

const Card = ({isNew, name, price, discount, rating, images, id}) => {
    const [hideWidgets, setWidgetsVisibility] = useState(false);

    const showCartItems = () => {
        setWidgetsVisibility(true)
    }

    const hideCartItem = () => {
        setWidgetsVisibility(false)
    }

    return (
        <CardContainer onMouseEnter={showCartItems} onMouseLeave={hideCartItem}>
            <NavLink to={`/about/${id}`}>
                <Thumbnail img={images[0]}>
                    {/* Promotion container*/}
                    <FlexContainer justify='space-between'>
                        {isNew ? <PromotionNewItem>New</PromotionNewItem> : <div/>}
                        {discount && <PromotionDiscountItem>-{discount}%</PromotionDiscountItem>}
                    </FlexContainer>
                </Thumbnail>
            </NavLink>
            <Widgets hideWidgets={hideWidgets} id={id}/>
            <DescriptionContainer>
                <NavLink to={`/about/${id}`}>
                    <CardTitle>{name}</CardTitle>
                </NavLink>
                <Rating rating={rating}/>
                <Price price={price} discount={discount}/>
            </DescriptionContainer>
        </CardContainer>
    )
}

export default Card;