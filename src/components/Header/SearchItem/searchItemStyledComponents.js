import styled from "styled-components";
import {FlexContainer, ImageContainer} from "../../../GlobalContainers";


export const SearchItemContainer = styled(FlexContainer)`
  border-bottom: 1px solid #eeeeee;
  transition: .2s ease;
  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
`;

export const SearchItemImage = styled(ImageContainer)`
  width: 150px;
  height: 120px;
  margin-right: 30px;
  @media ${props => props.theme.media.laptop} {
    width: 50px;
    height: 50px;
  }
`;

export const SearchItemName = styled.span`
  transition: .2s ease;
  &:hover {
    color: #f33535;
  }
`;