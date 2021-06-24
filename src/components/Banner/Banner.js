import React from "react";
import banner1 from '../../assets/imgs/banner-1.jpg';
import banner2 from '../../assets/imgs/banner-2.jpg';
import banner3 from '../../assets/imgs/banner-3.jpg';
import {BannerContainer, BannerImage, BannerItem} from "./bannerStyledComponents";

const Banner = () => {
    return (
        <BannerContainer justify='space-between' margin='40px 0 0' wrap>
            <BannerItem>
                <BannerImage className='main-banner' src={banner1} alt="banner 1"/>
            </BannerItem>
            <BannerItem>
                <BannerImage src={banner2} alt="banner 2"/>
            </BannerItem>
            <BannerItem>
                <BannerImage src={banner3} alt="banner 3"/>
            </BannerItem>
        </BannerContainer>
    )
}

export default Banner;