import styled from "styled-components";
import { FlexContainer, ImageContainer } from "../../../GlobalContainers";


export const SearchItemContainer = styled(FlexContainer)`
  border-bottom: 1px solid #eeeeee;
  transition: .2s ease;
  
  @media ${props => props.theme.media.desktop} {
    &:hover {
      cursor: pointer; 
      background-color: #eee;
    }
  }
`;

export const SearchItemImage = styled(ImageContainer)`
  width: 150px;
  height: 120px;
  margin-right: 30px;
  @media ${props => props.theme.media.tablet} {
    width: 50px;
    height: 50px;
  }
  @media ${props => props.theme.media.phone} {
    width: 50px;
    height: 50px;
  }
`;

export const SearchItemName = styled.span`
  @media ${props => props.theme.media.desktop} {
    transition: .2s ease;
    &:hover {
      color: #f33535;
    }
  }
 
`;