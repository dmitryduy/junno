import styled from "styled-components";
import { ButtonContainer, FlexContainer, InputContainer } from "../../GlobalContainers";

export const StyledHeader = styled(FlexContainer)`
  z-index: 10;
  justify-content: space-between;
  
  @media ${props => props.theme.media.laptopAndLower} {
    flex-direction: column;
    align-items: center;
  }
`;

export const SearchContainer = styled(FlexContainer)`
  width: 60%;
  max-width: 1500px;
  position: relative;
  
  @media ${props => props.theme.media.laptopAndLower} {
    width: 100%;
    margin-top: 20px;
  }
`;

export const SearchInput = styled(InputContainer).attrs(() => ({
    placeholder: 'Enter your search key...'
}))`
  width: calc(100% - 57px);
  border: 2px solid #eee;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const SearchButton = styled(ButtonContainer)`
  padding: 10px 20px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: background-color .4s ease;
  display: flex;
  align-items: center;

  & svg {
    width: 17px;
    height: 17px;
  }
  
  @media ${props => props.theme.media.desktop} {
    &:hover {
      background-color: #1d1d1d;
    }
  }
`;

export const SearchResults = styled.div`
  position: absolute;
  top: 100%;
  border-radius: 5px;
  box-shadow: 2px 9px 8px 4px rgba(34, 60, 80, 0.21);
  background-color: #fff;
  width: calc(100% - 57px);
  z-index: 1;
`;

export const WidgetsList = styled(FlexContainer)`
  width: 20%;
  margin-top: 10px;

  @media ${props => props.theme.media.laptopAndLower} {
    width: 60%;
  }
`;

export const WidgetsItem = styled.li`
  position: relative;
  transition: .4s ease;

  & svg {
    width: 22px;
    height: 22px;
  }
  
  @media ${props => props.theme.media.desktop} {
    &:hover {
      color: ${props => props.color};
      cursor: pointer;
    }
  }
`;

export const WidgetCounter = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  text-align: center;
  bottom: 5px;
  right: -10px;
  border-radius: 50%;
  background-color: ${props => props.bgColor};
  color: #fff;
`;

export const TotalPrice = styled.span`
  width: 50%;
  font-weight: 600;
  font-size: 1.6em;
`;
