import {shoesReducer} from "./shoesReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {cartReducer} from "./cartReducer";


const rootReducer = combineReducers({
    shoes: shoesReducer,
    cart: cartReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;