import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import { cartReducer } from "./reducer/cartReducer";
import { getOrderReducer, placeOrderReducer } from "./reducer/orderReducer";
import { getAllPizzaReducer } from "./reducer/pizzaReducer";
import { loginUserReducer, registerUserReducer } from "./reducer/userReducer";


const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
    loginUserReducer :{
    currentUser:currentUser,
    
    },
    cartReducer :{
        cartItems: cartItems
    }
};

const rootReducer = combineReducers({
    getAllPizzaReducer: getAllPizzaReducer,
    registerUserReducer: registerUserReducer,
    cartReducer: cartReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer,
    getOrderReducer: getOrderReducer
});
const middleware = [thunk];
const store = configureStore({
    reducer : rootReducer,
    preloadedState: initialState,
middleware:middleware
});
export default store;