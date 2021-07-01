import React from "react";
import Svg from "../../../Svg/Svg";
import styled from "styled-components";

const PriceContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 80px 80px 1fr;
  grid-template-areas: "old new cart";
  align-items: center;
   
  & span {
    font-weight: 700;
  }
`;

const DiscountPrice = styled.span`
  text-decoration: line-through;
  color: #9b9b9b;
  font-size: .9em;

  &.hide {
    display: none;
  }

  &.show {
    display: block;
  }
`;

const CartWidget = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 50%;
  transition: .3s ease;
  color: black;
  grid-area: cart;
  justify-self: end;
  @media ${props => props.theme.media.desktop} {
    &:hover {
      cursor: pointer;
      background-color: #f33535;
      color: white;
    }
  }
`;


const OrdinaryPrice = styled.span`
  font-size: 1.1em;

  &.discount {
    font-size: 1.3em;
    color: #f33535;
  }
`;

const Price = ({price, discount}) => {
    const newPrice = (+price * (1 - discount / 100)).toFixed(2);

    return (
        <PriceContainer>
            <DiscountPrice className={discount ? 'show' : 'hide'}>{discount ? newPrice : price} ₽</DiscountPrice>
            <OrdinaryPrice className={discount ? 'discount' : null}>{price} ₽</OrdinaryPrice>
            <CartWidget><Svg type='cart'/></CartWidget>
        </PriceContainer>
    )
}

export default Price;