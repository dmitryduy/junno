import React, {useEffect} from "react";
import './Products.css';
import {useDispatch, useSelector} from "react-redux";
import Category from "./Category/Category";
import Card from "./Card/Card";
import {fetchCards} from "../../redux/shoesReducer";

const Products = () => {

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(fetchCards());
    },[]);

    const {categories, activeCategoryIndex, cards} = useSelector(({shoes}) => ({
        categories: shoes.categories,
        activeCategoryIndex: shoes.activeCategory,
        cards: shoes.cards
    }));

    const favorites = useSelector(({cart}) => cart.favorites);

    const setCategory = useDispatch();

    return (
        <div className='products'>
            <h2 className='products__header'>
                Our Products
            </h2>
            <p className='products__description'>
                Add our products to weekly line up
            </p>
            <div className="products__categories">
                {categories.map((category, index) => <Category index={index} setCategory={setCategory} key={index}
                                                               name={category}
                                                               active={activeCategoryIndex === index && 'active'}/>)}
            </div>
            <div className="cards">
                {cards.map(card => <Card favorite={favorites.includes(card.id)} key={card.id} {...card}/>)}

            </div>
        </div>
    )
}

export default Products;