import logo from '../../assets/imgs/logo.jpg';
import Svg from "../Svg/Svg";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { showWishList } from "../../redux/cartReducer";
import styled from "styled-components";
import { ButtonContainer, FlexContainer, InputContainer } from "../../GlobalContainers";

const StyledHeader = styled.div`
  display: grid;
  margin: 20px 0;
  grid-row-gap: 10px;

  @media ${props => props.theme.media.desktop} {
    grid-template-columns: 1fr 7fr 2fr;
    grid-template-areas: "logo search widgets";
    grid-column-gap: 100px;
    align-items: center;
  }

  @media ${props => props.theme.media.laptop} {
    grid-template-columns: 1fr 7fr 5fr;
    grid-template-areas: "logo search widgets";
    grid-column-gap: 50px;
  }
  @media ${props => props.theme.media.tablet} {
    grid-template-areas: "logo widgets"
                         "search search";
  }

  @media ${props => props.theme.media.phone} {
    justify-items: center;
    grid-template-areas: "logo" "widgets" "search";
  }
`;

const Logo = styled.div`
  grid-area: logo;
`;

const SearchContainer = styled(FlexContainer)`
  position: relative;
  grid-area: search;

`;

const SearchInput = styled(InputContainer).attrs(() => ({
    placeholder: 'Enter your search key...'
}))`
  width: 100%;
  border: 2px solid #eee;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const SearchButton = styled(ButtonContainer)`
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


const WidgetsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  align-items: center;
  grid-column-gap: 10px;
  grid-area: widgets;
`;

const WidgetsItem = styled(FlexContainer)`
  justify-content: center;
  align-items: center;
  position: relative;
  transition: .4s ease;
  text-align: center;

  &:last-child {
    padding-top: 5px;
    font-weight: bold;
    font-size: 1.2em;
  }

  & svg {
    width: 25px;
    height: 25px;
  }

  @media ${props => props.theme.media.desktop} {
    &:hover {
      color: ${({color}) => color};
      cursor: pointer;
    }
  }
`;

const WidgetCounter = styled.span`
   margin-top: 20px;
  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 50%;
  background-color: ${({bgColor}) => bgColor};
  color: #fff;
`;

const Header = ({color}) => {
    const {totalPrice, countFavorites} = useSelector(({cart}) => ({
        totalPrice: cart.totalPrice,
        countFavorites: cart.favorites.length,
    }));

    const dispatch = useDispatch();

    const activateWishlist = () => {
        document.body.style.overflow = 'hidden';
        dispatch(showWishList());
    }

    return (
        <StyledHeader>
            <Logo>
                <NavLink to='/junno/'>
                    <img src={logo} alt="logo"/>
                </NavLink>
            </Logo>
            <SearchContainer>
                <SearchInput padding='10px'/>
                <SearchButton color='#fff' bgColor={color}>
                    <Svg type='search'/>
                </SearchButton>
            </SearchContainer>
            <WidgetsList as='ul'>
                <WidgetsItem as='li' color={color} justify='center' align='center'>
                    <Svg type='shuffle'/>
                    {/*<WidgetCounter bgColor={color}>1</WidgetCounter>*/}
                </WidgetsItem>
                <WidgetsItem as='li' justify='center' align='center' color={color} onClick={activateWishlist}>
                    <Svg type='heart'/>
                    {countFavorites ? <WidgetCounter bgColor={color}>{countFavorites}</WidgetCounter> : null}
                </WidgetsItem>
                <WidgetsItem as='li' justify='center' align='center'>{totalPrice} ₽</WidgetsItem>
            </WidgetsList>
        </StyledHeader>
    )
}

export default Header;