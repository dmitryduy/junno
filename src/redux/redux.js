import {combineReducers, createStore} from "redux";
import {topHeaderReducer} from "./topHeaderReducer";


const rootReducer = combineReducers({
    countriesAndCurrencies: topHeaderReducer
})

let store = createStore(rootReducer);

export default store;