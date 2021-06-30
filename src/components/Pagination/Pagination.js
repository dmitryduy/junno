import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../../redux/shoesReducer";
import {FlexContainer} from "../../GlobalContainers";
import styled from "styled-components";
import {useRef} from "react";

const PaginationItem = styled.span`
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 1.1em;
  color: #fff;
  transition: .3s linear;

  &.ordinary {
    background-color: #9b9b9b;
  }

  &.active {
    background-color: #f33535;
  }

  @media ${props => props.theme.media.desktop} {
    &:hover {
      background-color: #f33535;
      cursor: pointer;
    }
  }

  &:not(:first-child) {
    margin-left: 10px;
  }
`;

const Pagination = ({activeIndex}) => {
    const {countInPage, totalProducts} = useSelector(({shoes}) => ({
        countInPage: shoes.countInPage,
        totalProducts: shoes.cards.length
    }))
    const countPages = Math.floor(totalProducts / countInPage) + 1;

    const dispatch = useDispatch();
    const changeShownProducts = (index) => {
        dispatch(setCurrentPage(index));
        window.scrollTo(0, 500);
    }

    return (
        /* Pagination Container*/
        <FlexContainer justify='space-between' margin='50px 0'>
            {Array(countPages).fill(0).map((_, index) => <PaginationItem
                className={activeIndex === index ? 'active' : 'ordinary'}
                key={index}
                onClick={() => changeShownProducts(index)}>{index + 1}</PaginationItem>)}
        </FlexContainer>
    )
}

export default Pagination;