import React, { useState } from "react";
import styled from "styled-components";
import { ButtonContainer, FlexContainer, InputContainer } from "../../../GlobalContainers";
import { addToCart } from "../../../redux/cartReducer";
import { useDispatch } from "react-redux";

const TakeOrderInputContainer = styled(FlexContainer)`
  height: 50px;
`;

const OrderCounterContainer = styled.div`
  position: relative;
`;

const OrderInput = styled(InputContainer)`
  font-size: 1.1em;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid #1d1d1d;

`;

const CartButton = styled(ButtonContainer)`
  position: absolute;
  background-color: #1d1d1d;
  color: white;
  width: 40px;
  height: 30px;
  right: -50px;
  transition: .3s ease;

  @media ${props => props.theme.media.desktop} {
    &:hover {
      background-color: #10a341;
    }
  }
`;

export const IncrementButton = styled(CartButton)`
  border-top-right-radius: 5px;
  top: 0;
`;

const DecrementButton = styled(CartButton)`
  border-bottom-right-radius: 5px;
  top: 30px;
`;

const OrderButton = styled(ButtonContainer)`
  height: 60px;
  margin-left: 70px;
  text-transform: uppercase;
  font-weight: 500;
  padding: 10px 50px;
  border-radius: 5px;
  transition: .3s ease;

  @media ${props => props.theme.media.desktop} {
    &:hover {
      background-color: #10a341;
    }
  }

  @media ${props => props.theme.media.phone} {
    font-size: .7em;
  }
`;


const Order = ({cardId, price}) => {
    const [countItems, setCountItems] = useState(1);

    const dispatch = useDispatch();

    // cannot input letters and numbers > 10
    const changeItemCount = value => (value.match(/\D/) || +value > 10) || setCountItems(+value);

    const incrementItems = () => countItems < 10 && countItems >= 0 && setCountItems(prev => prev + 1);
    const decrementItems = () => countItems <= 10 && countItems > 0 && setCountItems(prev => prev - 1);
    const AddToCart = () => countItems && dispatch(addToCart(cardId, price, countItems));

    return (
        <TakeOrderInputContainer margin='50px 0 0'>
            <OrderCounterContainer>
                <OrderInput height='60px' width='40px' padding='2px 4px 0 10px'
                            onInput={(e) => changeItemCount(e.target.value)}
                            value={countItems}
                />
                <IncrementButton onClick={incrementItems}>+</IncrementButton>
                <DecrementButton onClick={decrementItems}>-</DecrementButton>
            </OrderCounterContainer>
            <OrderButton color='#fff'
                         bgColor='#1d1d1d'
                         onClick={AddToCart}>+ add to cart</OrderButton>
        </TakeOrderInputContainer>
    )
}

export default Order;