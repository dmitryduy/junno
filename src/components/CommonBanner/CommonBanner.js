import React from "react";
import styled from "styled-components";
import banner1 from "../../assets/imgs/banner-4.jpg";
import banner2 from "../../assets/imgs/banner-5.jpg";
import banner3 from "../../assets/imgs/banner-6.jpg";
import banner4 from "../../assets/imgs/banner-7.jpg";
import {ButtonContainer} from "../../GlobalContainers";

const BannerContainer = styled.div`
  display: grid;
  gap: 20px;
  margin: 20px 0;
  @media ${props => props.theme.media.desktop} {
    grid-template-areas: "first second third" "first second fourth"
  }

  @media ${props => props.theme.media.laptopAndLower} {
    grid-template-areas: "first second" "third third" "fourth fourth"
  }

  @media ${props => props.theme.media.phone} {
    grid-template-areas: "first" "second" "third" "fourth"
  }
`;

const BannerItem = styled.div`
  position: relative;

  & img {
    width: 100%;
    height: 100%;
  }

  @media ${props => props.theme.media.desktop} {
    overflow: hidden;
    img {
      transition: .3s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }

  &.item-1 {
    grid-area: first;

  }

  &.item-2 {
    grid-area: second;
  }

  &.item-3 {
    grid-area: third;
  }

  &.item-4 {
    grid-area: fourth;
  }
`;

const SelectButton = styled(ButtonContainer)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%);
  padding: 5px 20px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 5px;
  transition: .3s ease;
  @media ${props => props.theme.media.desktop} {
    &:hover {
      background-color: #f33535;
      color: #fff;
    }
  }
`;


const CommonBanner = () => {

    return (
        <BannerContainer>
            <BannerItem className="item-1">
                <img src={banner1} alt=""/>
                <SelectButton>men's</SelectButton>
            </BannerItem>
            <BannerItem className="item-2">
                <img src={banner2} alt=""/>
                <SelectButton>women's</SelectButton>
            </BannerItem>
            <BannerItem className="item-3">
                <img src={banner3} alt=""/>
                <SelectButton>running</SelectButton>
            </BannerItem>
            <BannerItem className="item-4">
                <img src={banner4} alt=""/>
                <SelectButton>accessories</SelectButton>
            </BannerItem>
        </BannerContainer>
    )
}

export default CommonBanner;