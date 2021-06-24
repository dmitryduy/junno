import styled from "styled-components";
import {ButtonContainer, FlexContainer, InputContainer} from "../../GlobalContainers";

export const StyledHeader = styled(FlexContainer)`
  background-color: #fff;
  z-index: 10;

`;

export const SearchInput = styled(InputContainer).attrs(() => ({
    placeholder: 'Enter your search key...'
}))`
  min-width: 500px;
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
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 2px 9px 8px 4px rgba(34, 60, 80, 0.21);
  background-color: white;
  width: 100%;
  z-index: 1;
`;

export const WidgetsList = styled(FlexContainer)`
  flex: 1.5;
`;

export const WidgetsItem = styled.li`
  position: relative;
  transition: .4s ease;

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