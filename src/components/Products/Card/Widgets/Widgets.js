import React from "react";
import Svg from "../../../Svg/Svg";
import styled from "styled-components";
import { FlexContainer } from "../../../../GlobalContainers";
import { addFavorites, removeFavorite } from "../../../../redux/cartReducer";
import { useDispatch, useSelector } from "react-redux";

const WidgetsContainer = styled(FlexContainer)`
  grid-area: widgets;

  &.hide {
    opacity: 0;
    transition: .5s ease;
  }

  &.show {
    transition: .5s ease;
    opacity: 1;
  }

  @media ${props => props.theme.media.laptopAndLower} {
    display: none;
`;

const Widget = styled.div`
  width: 40px;
  height: 40px;
  color: #8f8f8f;
  padding: 10px;
  border-radius: 50%;
  background-color: #f6f6f6;
  transition: .3s ease;

  &:not(:first-child) {
    margin-left: 10px;
  }

  &.favorite {
    background-color: #f33535;
    color: #fff;
  }

  @media ${props => props.theme.media.desktop} {
    &:hover {
      transform: translateY(-5px);
      cursor: pointer;
    }
  }
`;

const Widgets = ({hideWidgets, id}) => {
    const favorites = useSelector(({cart}) => cart.favorites);
    const dispatch = useDispatch();

    const toggleFavorites = () => {
        !favorites.includes(id) ? dispatch(addFavorites(id)) : dispatch(removeFavorite(id));
    }
    return (
        <WidgetsContainer justify='center' className={hideWidgets ? 'show' : 'hide'}>
            <Widget className={favorites.includes(id) && 'favorite'} onClick={toggleFavorites}><Svg
                type='heart'/>
            </Widget>
            <Widget><Svg type='shuffle'/></Widget>
            <Widget><Svg type='search'/></Widget>
        </WidgetsContainer>
    )
}

export default Widgets;