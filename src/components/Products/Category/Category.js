import React from "react";
import './Category.css';
import {changeCategory, fetchCategoryCards,/* fetchCategoryCards*/} from "../../../redux/shoesReducer";
import {useDispatch} from "react-redux";

const Category = ({name, active, setCategory, index}) => {
    const dispatch = useDispatch();

    function toggleCategory() {

        dispatch(fetchCategoryCards(name));
        setCategory(changeCategory(index));
    }

    return (
        <div className={`category category__${active}`} onClick={toggleCategory}>{name} shoes</div>
    )
}

export default Category;