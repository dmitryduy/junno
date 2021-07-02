import React from "react";
import styled from "styled-components";
import {FlexContainer, ImageContainer} from "../../GlobalContainers";
import image1 from "../../assets/imgs/andantage-1.png";
import image2 from "../../assets/imgs/andantage-2.png";
import image3 from "../../assets/imgs/andantage-3.png";
import image4 from "../../assets/imgs/andantage-4.png";

const advantageItem = [
    {image: image1, title: 'Free Shipping', description: 'On all orders over $75.00'},
    {image: image2, title: 'Free Returns', description: 'Returns are free within 9 days'},
    {image: image3, title: '100% Payment Secure', description: 'Your payment are safe with us.'},
    {image: image4, title: 'Support 24/7', description: 'Contact us 24 hours a day'},
]

const AdvantageContainer = styled.div`
  display: grid;
  align-items: center;
  padding: 50px 20px;
  background-color: #f33535;
  border-radius: 5px;
  color: white;
  row-gap: 20px;

  @media ${props => props.theme.media.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${props => props.theme.media.laptop} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media ${props => props.theme.media.tablet} {
    grid-template-rows: repeat(4, 1fr);
    padding: 20px 20px;
  }
`;

const AdvantageItem = styled.div`
  display: grid;
  height: 25%;
  grid-template-columns: 55px 2fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "image title" "image description";
  column-gap: 10px;
  align-items: center;
  font-size: .9em;
  
`;

const Image = styled(ImageContainer)`
grid-area: image;
  justify-self: start;
`;

const Title = styled.h3`
grid-area: title;
`;

const Description = styled.p`
grid-area: description;
`;

const Advantage = () => {

    return (
        <AdvantageContainer>
            {advantageItem.map((item, index) =>
                <AdvantageItem>
                    <Image src={item.image}/>
                    <Title>{item.title}</Title>
                    <Description>{item.description}</Description>
                </AdvantageItem>)}
        </AdvantageContainer>
    )
}

export default Advantage;