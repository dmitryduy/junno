import React from "react";
import './Banner.css';
import banner1 from '../../assets/imgs/banner-1.jpg';
import banner2 from '../../assets/imgs/banner-2.jpg';
import banner3 from '../../assets/imgs/banner-3.jpg';

const Banner = () => {
    return (
        <div className='banners'>
            <div>
                <img src={banner1} alt="banner 1"/>
            </div>
            <div>
                <img src={banner2} alt="banner 2"/>
            </div>
            <div>
                <img src={banner3} alt="banner 3"/>
            </div>


        </div>
    )
}

export default Banner;