import React from "react";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Header from "../Header/Header";
import {themeSettings} from "../../constants";


const Home = () => {
    return (
        <>
            <Header color={themeSettings.HOME_PAGE_COLOR}/>
            <Banner/>
            <Products/>
        </>
    )
}

export default Home;