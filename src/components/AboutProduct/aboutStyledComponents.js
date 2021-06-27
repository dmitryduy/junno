import styled from "styled-components";
import {ButtonContainer, FlexContainer, ImageContainer, InputContainer} from "../../GlobalContainers";

export const AboutContainer = styled(FlexContainer)`
@media ${props => props.theme.media.tablet} {
  display: block;
}
  @media ${props => props.theme.media.phone} {
    display: block;
  }

`;

export const AboutGallery = styled.div`
  position: relative;
  width: 50%;
  @media ${props => props.theme.media.tablet} {
    width: 100%;
  }
  @media ${props => props.theme.media.phone} {
    width: 100%;
  }
`;

export const MainImage = styled(ImageContainer).attrs(() => ({
    alt: 'product image'
}))`
  display: block;
  margin: auto;
  @media ${props => props.theme.media.laptop} {
    width: 320px;
  }
  @media ${props => props.theme.media.phone} {
    width: 300px;
  }
`;

export const NewItemLabel = styled.span`
  position: absolute;
  top: 10px;
  right: 0;
  border-radius: 5px;
  background-color: #10a341;
  color: white;
  font-weight: 700;
  padding: 2px 4px 0;
`;

export const GalleryItem = styled(ImageContainer).attrs(() => ({
    alt: 'gallery image',
}))`
  border: 2px solid white;

  &:hover {
    border: 2px solid #10a341;
  }
  @media ${props => props.theme.media.laptop} {
    width: 80px;
  }
  @media ${props => props.theme.media.phone} {
    width: 75px;
  }
`;

export const CardInfo = styled(FlexContainer)`
  @media ${props => props.theme.media.tablet} {
    margin-top: 40px;
  }
  @media ${props => props.theme.media.phone} {
    margin-top: 40px;
    margin-left: 0;
  }
`;

export const AboutCardTitle = styled.h1`
  font-weight: 400;
  color: #707070;
`;

export const DefaultPrice = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

export const NewPrice = styled.div`
  margin-left: 10px;
  font-size: 1.5em;
  font-weight: bold;
`;

export const DiscountLabel = styled.div`
  margin-left: 20px;
  position: relative;
  bottom: 4px;
  background-color: #1d1d1d;
  padding: 0 5px;
  color: white;
`;

export const CardDescription = styled.p`
  width: 70%;
  color: #707070;
  @media ${props => props.theme.media.laptop} {
    width: 100%;
  }
  @media ${props => props.theme.media.tablet} {
    width: 100%;
  }
  @media ${props => props.theme.media.phone} {
    width: 100%;
  }
`;

export const OrderContainer = styled(FlexContainer)`
  height: 50px;
`;

export const OrderInput = styled(InputContainer)`
  font-size: 1.1em;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid #1d1d1d;
  padding-left: 10px;
`;

const CartButton = styled(ButtonContainer)`
  position: absolute;
  background-color: #1d1d1d;
  color: white;
  width: 40px;
  height: 30px;
  right: -50px;
  transition: .3s ease;
  &:hover {
    background-color: #10a341;
  }
`;

export const IncrementButton = styled(CartButton)`
  border-top-right-radius: 5px;
  top: 0;
`;

export const DecrementButton = styled(CartButton)`
  border-bottom-right-radius: 5px;
  top: 30px;
`;

export const OrderButton = styled(ButtonContainer)`
  height: 60px;
  margin-left: 70px;
  text-transform: uppercase;
  font-weight: 500;
  padding: 10px 50px;
  border-radius: 5px;
  transition: .3s ease;
  &:hover {
    background-color: #10a341;
    }
  @media ${props => props.theme.media.phone} {
    font-size: .7em;
  }
`;

export const WidgetsContainer = styled(FlexContainer)`
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
  &:hover {
    color: #10a341;
    cursor: pointer;
  }
`;

export const FavoriteWidget = styled(Widget)`
`;

export const CompareWidget = styled(Widget)`
  margin-left: 20px;
`;