import React from "react";
import Svg from "../../Svg/Svg";
import styled from "styled-components";
import { FlexContainer } from "../../../GlobalContainers";
import { addFavorites, removeFavorite } from "../../../redux/cartReducer";
import { useDispatch, useSelector } from "react-redux";

const WidgetsContainer = styled(FlexContainer)`
  color: #707070;

  & svg {
    width: 20px;
    margin-right: 5px;
    position: relative;
    bottom: 2px;
  }
`;

const Widget = styled(FlexContainer)`
  transition: .3s ease;
  align-items: center;
  @media ${props => props.theme.media.desktop} {
    &:hover {
      color: #10a341;
      cursor: pointer;
    }
  }
`;

const FavoriteWidget = styled(Widget)`
`;

const CompareWidget = styled(Widget)`
  margin-left: 20px;
`;

const Widgets = ({cardId}) => {
    const favorites = useSelector(({cart}) => cart.favorites);

    const dispatch = useDispatch();

    const toggleFavorite = () => {
        favorites.includes(cardId)
            ? dispatch(removeFavorite(cardId))
            : dispatch(addFavorites(cardId));
    }

    return (
        <WidgetsContainer margin='40px 0 0'>
            <FavoriteWidget onClick={toggleFavorite}>
                <Svg type='heart'/>
                <span>{favorites.includes(cardId) ? 'Remove from ' : 'Add to '}wishlist</span>
            </FavoriteWidget>
            <CompareWidget>
                <Svg type='shuffle'/>
                <span>Add to compare</span>
            </CompareWidget>
        </WidgetsContainer>
    )
}

export default Widgets;