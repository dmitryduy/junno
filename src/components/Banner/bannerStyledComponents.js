import styled from "styled-components";
import {FlexContainer, ImageContainer} from "../../GlobalContainers";


export const BannerContainer = styled(FlexContainer)`
  flex-wrap: wrap;
  @media ${props => props.theme.media.tablet} {
   
  }
`;

export const BannerItem = styled.div`
  overflow: hidden;
  height: 400px;
  @media ${props => props.theme.media.laptop} {
    height: 100%;
    &:first-child {
      flex: 2;
    }

    &:not(:first-child) {
      flex: 1;
      margin-left: 20px;
    }
  }


  @media ${props => props.theme.media.tablet} {
    &:first-child {
      width: 100%;
      height: 100%
    }
    &:not(:first-child) {
      width: calc(50% - 40px);
      height: 100%
  }
    

    }
  @media ${props => props.theme.media.phone} {
   width: 100%;
    height: 100%;

  }

`;

export const BannerImage = styled(ImageContainer)`
  transition: 1s ease;
  width: 100%;

  &:hover {
    transform: scale(1.1);
  }
`;