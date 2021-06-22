import React from "react";
import './Category.css';
import {changeCategory, fetchCategoryCards, setCards} from "../../../redux/shoesReducer";
import {useDispatch} from "react-redux";

const Category = ({name, active, setCategory, index}) => {
    const dispatch = useDispatch();

    function toggleCategory() {

        dispatch(fetchCategoryCards(name));
        setCategory(changeCategory(index));
    }

    return (
        <div className={`category ${active}`} onClick={toggleCategory}>{name} shoes</div>
    )
}

export default Category;