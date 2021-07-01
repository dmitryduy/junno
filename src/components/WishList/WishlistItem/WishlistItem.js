import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../../../redux/cartReducer";

import styled from "styled-components";
import { FlexContainer } from "../../../GlobalContainers";

const WishListContainer = styled(FlexContainer)`
  border-top: 1px solid #eeeeee;
  position: relative;
  transition: .2s ease;

  &.remove-animation {
    opacity: 0;
    position: relative;
  }
`;

const WishListImage = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${({img}) => img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: 1px solid #eeeeee;
`;

const WishListItemName = styled.span`
  font-weight: 700;
`;

const WishListRemoveButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s ease;
  font-size: 1.5em;

  @media ${props => props.theme.media.desktop} {
    &:hover {
      color: #f33535;
      cursor: pointer;
    }
  }
`;

const Price = styled.div`
  font-weight: 600;
`;


const WishlistItem = ({name, images, price, id}) => {
    const dispatch = useDispatch();
    const itemRef = useRef();

    const deleteFromFavorite = () => {
        itemRef.current["classList"].add('remove-animation');
        setTimeout(() => dispatch(removeFavorite(id)), 200);
    }

    return (
        <WishListContainer ref={itemRef} padding='10px 0' margin='0 10px'>
            <WishListImage img={images[0]} alt="product image"/>
            <div style={{margin: 10}}>
                <WishListItemName>{name.length > 20 ? name.slice(0, 20) + '...' : name}</WishListItemName>
                {/* Price Container*/}
                <Price>{price} ₽</Price>
            </div>
            <WishListRemoveButton onClick={deleteFromFavorite}>×</WishListRemoveButton>
        </WishListContainer>

    )
}


export default WishlistItem;