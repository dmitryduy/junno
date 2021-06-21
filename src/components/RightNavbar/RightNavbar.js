import React, {useRef, useState} from "react";
import './RightNavbar.css';


import Svg from "../Svg/Svg";
import HiddenList from "../HiddenList/HiddenList";
import {useSelector} from "react-redux";


const RightNavbar = () => {
    const [visibility, setVisible] = useState({'0': true, '1': true, '2': true});
    const firstItem = useRef();
    const secondItem = useRef();
    const thirdItem = useRef();
    const {currencies, countries, currentCurrency, currentCountry} = useSelector(({countriesAndCurrencies}) => {
        console.log(countriesAndCurrencies)
        return {
            currencies: countriesAndCurrencies.currencies,
            countries: countriesAndCurrencies.countries,
            currentCurrency: countriesAndCurrencies.currentCurrency,
            currentCountry: countriesAndCurrencies.currentCountry

        }
    })

    function toggleVisibility(e) {
        if (e.target === firstItem.current) {
            setVisible(prev => ({...prev, '0': false}))
        }
        if (e.target === secondItem.current) {
            setVisible(prev => ({...prev, '1': false}))
        }
        if (e.target === thirdItem.current) {
            setVisible(prev => ({...prev, '2': false}))
        }
    }

    function hideList(e) {
        setVisible({'0': true, '1': true, '2': true});
    }

    return (
        <ul className='right-navbar d-flex justify-content-between'>
            <li tabIndex='-1' onClick={toggleVisibility}
                onBlur={hideList}>
                <div ref={firstItem}>
                   Settings
                    <Svg type='arrow'/>
                </div>
                <HiddenList items={['My Account', 'Checkout', 'Sign out']} visible={visibility['0']}/>
            </li>
            <li tabIndex='-1' onClick={toggleVisibility}
                onBlur={hideList}>
                <div ref={secondItem}>
                    {currentCurrency}
                    <Svg type='arrow'/>
                </div>
                <HiddenList items={currencies} visible={visibility['1']}/>
            </li>
            <li tabIndex='-1' onClick={toggleVisibility}
                onBlur={hideList}>
                <div ref={thirdItem}>
                    {currentCountry}
                    <Svg type='arrow'/>
                </div>
                <HiddenList items={countries} visible={visibility['2']}/>
            </li>

        </ul>
    )
}

export default RightNavbar;