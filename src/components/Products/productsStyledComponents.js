import styled from "styled-components";
import {FlexContainer} from "../../GlobalContainers";

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 3em;
  @media ${props => props.theme.media.phone} {
    font-size: 2em;
  }
`;

export const ProductSubtitle = styled.p`
  color: #9d9d9d;
  margin-bottom: 10px;
  @media ${props => props.theme.media.phone} {
    text-align: center;
  }
`;

export const CardsContainer = styled(FlexContainer)`
    width: 100%;
`;
