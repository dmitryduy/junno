import styled from "styled-components";


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

export const CardsContainer = styled.div`
  display: grid;
  width: 100%;
  margin-top: 30px;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  justify-content: center;
`;
