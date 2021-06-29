import styled from "styled-components";
import {FlexContainer, ImageContainer} from "../../../GlobalContainers";

export const CardContainer = styled(FlexContainer)`
  position: relative;
  width: 250px;
  transition: .3s linear;

  @media ${props => props.theme.media.desktop} {
    &:hover {
      box-shadow: 4px 2px 19px 3px rgba(34, 60, 80, 0.2);
      transform: translateY(-5px);
    }
  }

  @media ${props => props.theme.media.tablet} {
    width: 350px;
  }

  @media ${props => props.theme.media.phone} {
    width: 100%;
  }
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  &hover {
    cursor: pointer;
  }
`;

const PromotionsItem = styled.span`
  border-radius: 5px;
  height: 20px;
  padding: 0 10px;
  color: white;
  letter-spacing: -1px;
  font-weight: 600;
`;

export const PromotionDiscountItem = styled(PromotionsItem)`
  background-color: #10a341;
`;


export const PromotionNewItem = styled(PromotionsItem)`
  background-color: #f33535;

`;

export const CardWidgetsContainer = styled(FlexContainer)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  @media ${props => props.theme.media.laptopAndLower} {
  display: none;
`;

export const CardWidget = styled.div`
  width: 40px;
  height: 40px;
  color: #8f8f8f;
  padding: 10px;
  border-radius: 50%;
  background-color: #f6f6f6;
  transition: .3s linear;

  &:not(:first-child) {
    margin-left: 10px;
  }

  @media ${props => props.theme.media.desktop} {
    &:hover {
      background-color: #f33535;
      color: #fff;
      cursor: pointer;
    }
  }

`;

export const CardDescriptionContainer = styled(FlexContainer)`
    margin-top: 20px;
`;

export const CardTitle = styled.span`
  color: #707070;
  transition: .3s ease;

  @media ${props => props.theme.media.desktop} {
    &:hover {
      color: #f33535;
      cursor: pointer;
    }
  }
`;

export const CardPriceContainer = styled(FlexContainer)`
  width: 100%;
  & span {
    font-weight: bold;
    font-size: 1.3em;
  }
  & div {
    width: 40px;
    height: 40px;
    padding: 10px;
    border-radius: 50%;
    transition: .3s ease;
    position: relative;
    top: -2px;
    color: black;

    @media ${props => props.theme.media.desktop} {
      &:hover {
        cursor: pointer;
        background-color: #f33535;
        color: white;
      }
    }
  }
`;