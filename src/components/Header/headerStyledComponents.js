import styled from "styled-components";
import {ButtonContainer, FlexContainer, InputContainer} from "../../GlobalContainers";

export const StyledHeader = styled(FlexContainer)`
  background-color: #fff;
  z-index: 10;
  justify-content: space-between;
  @media ${props => props.theme.media.phone} {
    flex-direction: column;
    align-items: center;
  }

`;

export const SearchContainer = styled.div`
  width: 60%;
  max-width: 1500px;
  position: relative;
  @media ${props => props.theme.media.tablet} {
    display: none;
  }
  @media ${props => props.theme.media.phone} {
    display: none;
  }
`;

export const SearchInput = styled(InputContainer).attrs(() => ({
    placeholder: 'Enter your search key...'
}))`
  width: 65%;
  max-width: 1000px;
  border: 2px solid #eee;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const SearchButton = styled(ButtonContainer)`
  position: relative;
  padding: 10px 20px;
  top: 2px;
  left: -1px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: background-color .4s ease;
  & svg {
    width: 17px;
    height: 18px;
    position: relative;
    top: 3px;
  }

  &:hover {
    background-color: #1d1d1d;
  }
`;

export const SearchResults = styled.div`
  position: absolute;
  left: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 2px 9px 8px 4px rgba(34, 60, 80, 0.21);
  background-color: white;
  width: 100%;
  z-index: 1;
`;

export const WidgetsList = styled(FlexContainer)`
  width: 20%;
  margin-top: 10px;
  @media ${props => props.theme.media.laptop} {
    width: 210px;
  }
  @media ${props => props.theme.media.tablet} {  
    width: 50%;
  }
  @media ${props => props.theme.media.phone} {
    width: 100%;
    margin-top: 10px;
  }
`;

export const WidgetsItem = styled.li`
  position: relative;
  transition: .4s ease;
  ;

  & svg {
    width: 28px;
    height: 28px;
  }

  &:hover {
    color: ${props => props.color};
    cursor: pointer;
  }
`;

export const WidgetCounter = styled.span`
  width: 20px;
  height: 20px;
  text-align: center;
  position: absolute;
  bottom: 5px;
  right: -10px;
  border-radius: 50%;
  background-color: ${props => props.bgColor};
  color: white;
`;

export const TotalPrice = styled.span`
  font-weight: bold;
  position: relative;
  left: 15px;
  font-size: 1.2em;
`;