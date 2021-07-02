import React from "react";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Header from "../Header/Header";
import {themeSettings} from "../../constants";
import CommonBanner from "../CommonBanner/CommonBanner";
import Advantage from "../Advantage/Advantage";


const Home = () => {
    return (
        <>
            <Header color={themeSettings.HOME_PAGE_COLOR}/>
            <Banner/>
            <Products/>
            <CommonBanner/>
            <Advantage/>
        </>
    )
}

export default Home;