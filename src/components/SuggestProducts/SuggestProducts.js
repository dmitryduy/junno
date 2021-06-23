import React from "react";
import './SuggestProducts.css';
import Card from "../Products/Card/Card";
import {useSelector} from "react-redux";


const SuggestProducts = ({id}) => {

    const similarCards = useSelector(({shoes}) => shoes.cards.filter(item => item.similar.includes(+id)));


    return (
        <div className='suggest'>
            <span className="suggest__title">You Must Also Like</span>
            <p className='suggest__subtitle'>Add Related products to weekly line up</p>
            <div className="suggest__slider">
                {similarCards.map(item => <Card key={item.id} {...item}/>)}
            </div>
        </div>
    )
}

export default  SuggestProducts;