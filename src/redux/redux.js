import {shoesReducer} from "./shoesReducer";
import {applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import {cartReducer} from "./cartReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    shoes: shoesReducer,
    cart: cartReducer
});

const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(thunk)));

export default store;