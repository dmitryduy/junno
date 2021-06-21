import React from "react";
import './TopHeader.css';
import RightNavbar from "../RightNavbar/RightNavbar";

const TopHeader = (props) => {
    return (
        <div className='d-flex top-header p-l-50 p-r-50 p-b-15 p-t-15 justify-content-between'>
            <div>Join our showroom and get <mark>50 % off </mark>! Coupon code : <mark>Junno50</mark></div>
            <RightNavbar/>
        </div>
    );
}

export default TopHeader;