import React, { useState } from "react";
import { FlexContainer } from "../../../GlobalContainers";
import styled from "styled-components";

const GalleryContainer = styled.div`
  position: relative;
  @media ${props => props.theme.media.laptopAndLower} {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const MainImage = styled.div`
  background-image: url(${({image}) => image});
  margin: auto;
  width: 600px;
  height: 600px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media ${props => props.theme.media.tablet} {
    width: 400px;
    height: 400px;
  }
  @media ${props => props.theme.media.phone} {
    width: 300px;
    height: 300px;
  }
`;

const NewItemLabel = styled.span`
  position: absolute;
  top: 10px;
  right: 0;
  border-radius: 5px;
  background-color: #10a341;
  color: white;
  font-weight: 700;
  padding: 2px 4px 0;
`;

const GalleryItemsContainer = styled.div`
  width: 100%;
  display: grid;
    grid-template-columns: repeat(3, 150px);
  grid-gap: 20px;
`;

const GalleryItem = styled.div`
  background-image: url(${({image}) => image});
  width: 150px;
  height: 150px;
  margin-top: 20px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border: 2px solid white;
  border-radius: 5px;
  &.active {
    border: 2px solid #10a341;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }

  @media ${props => props.theme.media.desktop} {
    &:hover {
      border: 2px solid #10a341;
    }
  }
`;

const Gallery = ({isNew, images}) => {
    const [activeImage, setImage] = useState(0);//index

    const changeImage = newImage => {
        setImage(newImage);
    }

    return (
        <GalleryContainer>
            {isNew && <NewItemLabel>New</NewItemLabel>}
            <MainImage image={images[activeImage]}/>
            {/* Small gallery container */}
            <GalleryItemsContainer>
                {images.map((image, index) => {
                    return (
                        <GalleryItem key={index} className={index === activeImage && 'active'} image={image}
                                     onClick={() => changeImage(index)}/>
                    )
                })}
            </GalleryItemsContainer>
        </GalleryContainer>
    )
}

export default Gallery;