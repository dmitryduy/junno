import React from "react";
import './Rating.css';
import Svg from "../Svg/Svg";


const Rating = ({rating}) => {
    return <div className='rating'>
        {Array(rating).fill(0).map((_, index) => <Svg key={index} type='star'/>)}
    </div>

}

export default Rating;