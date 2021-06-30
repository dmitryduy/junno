import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import WishlistItem from "./WishlistItem/WishlistItem";
import { hideWishList } from "../../redux/cartReducer";
import styled from "styled-components";
import { ButtonContainer, FlexContainer } from "../../GlobalContainers";

const WishlistContainer = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, .5);
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 100;
  transition: .3s ease;

  &.active {
    opacity: 1;
    visibility: visible;
  }

  &.disabled {
    opacity: 0;
    visibility: hidden;
  }
`;

const Wishlist = styled(FlexContainer)`

  position: fixed;
  width: 400px;
  height: 100%;
  right: 0;
  top: 0;
  z-index: 100;
  background-color: white;
  transition: .3s ease;

  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }

  &.disabled {
    opacity: 0;
    visibility: hidden;
    transform: translateX(400px);
  }
`;

const WishlistNameContainer = styled(FlexContainer)`
  text-align: center;
`;

const WishlistCloseButton = styled(ButtonContainer)`
  background-color: transparent;
  font-size: 2em;
  transition: .4s ease;

  @media ${props => props.theme.media.desktop} {
    &:hover {
      cursor: pointer;
      color: #f33535;
    }
  }
`;

const WishlistItemsContainer = styled.div`
  overflow: auto;
`;

const ViewWishlistButton = styled(ButtonContainer)`
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  transition: .4s ease;

  @media ${props => props.theme.media.desktop} {
    &:hover {
      background-color: #f33535;
    }
  }

`;

const WishList = () => {
    // ids of favorites products
    const ids = useSelector(({cart}) => cart.favorites);
    const items = useSelector(({shoes}) => shoes.cards.filter(card => ids.includes(card.id)));
    const isShowWishlist = useSelector(({cart}) => cart.showWishlist);
    // setup display styles
    const wishlistClass = isShowWishlist ? 'active' : 'disabled';
    const containerRef = useRef();
    const closeButtonRef = useRef();

    const dispatch = useDispatch();

    const hideWishlist = e => {
        if (e.target === containerRef.current || e.target === closeButtonRef.current) {
            document.body.style.overflow = 'auto';
            dispatch(hideWishList());
        }
    }

    return (
        <WishlistContainer ref={containerRef} onClick={hideWishlist} className={wishlistClass}>
            <Wishlist direction='column' padding='20px' className={wishlistClass}>
                {/* Wishlist Header container */}
                <FlexContainer justify='space-between'>
                    <WishlistNameContainer as='span' align='center'>Wishlist</WishlistNameContainer>
                    <WishlistCloseButton ref={closeButtonRef} onClick={hideWishlist}>×</WishlistCloseButton>
                </FlexContainer>
                <WishlistItemsContainer>
                    {items.map(item => <WishlistItem key={item.id} {...item}/>)}
                </WishlistItemsContainer>
                <ViewWishlistButton bgColor='#10a341' color='#fff'>view wislist</ViewWishlistButton>
            </Wishlist>
        </WishlistContainer>

    )
}

export default WishList;