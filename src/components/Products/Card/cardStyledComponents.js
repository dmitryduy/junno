import styled from "styled-components";
import {FlexContainer} from "../../../GlobalContainers";

export const CardContainer = styled(FlexContainer)`
  width: 250px;
  overflow: hidden;
  transition: .2s linear;
  margin-bottom: 20px;
  margin-left: 20px;
  &:hover {
    box-shadow: 4px 2px 19px 3px rgba(34, 60, 80, 0.2);
    transform: translateY(-5px);
  }
  
`;

export const Promotions = styled(FlexContainer)`
  position: absolute;
  width: 100%;
  top: 0;
`;

export const PromotionsItem = styled.span`
  border-radius: 5px;
  height: 20px;
  padding: 0 10px;
  color: white;
  letter-spacing: -1px;
  font-weight: 600;
  &:first-child {
    background-color: #10a341;
  }
  &:last-child {
    background-color: #f33535;
  }
`;

export const CardWidgetsContainer = styled(FlexContainer)`
  position: absolute;
  width: 100%;
  bottom: 20px ;
`;

export const CardWidget = styled.div`
  width: 40px;
  height: 40px;
  color: #8f8f8f;
  padding: 10px;
  border-radius: 50%;
  background-color: #f6f6f6;
  transition: .6s ease;
  &:hover {
    background-color: #f33535;
    color: white;
    cursor: pointer;
  }
`;

export const CardTitle = styled.span`
  color: #707070;
  transition: .5s ease;
  height: 50px;
  &:hover {
    color: #f33535;
    cursor: pointer;
  }
`;

export const CardPriceContainer = styled(FlexContainer)`
  width: 100%;
  & span {
    font-weight: bold;
    font-size: 1.3em;
  }
  & div {
    width: 40px;
    height: 40px;
    padding: 10px;
    border-radius: 50%;
    transition: .5s ease;
    position: relative;
    top: -2px;
    color: black;
    &:hover {
      cursor: pointer;
      background-color: #f33535;
      color: white;
    }
  }
`;