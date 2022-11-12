import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { PriceReducer } from "./redux/price/price.reducer";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
    price:PriceReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
export const store = legacy_createStore(rootReducers,createComposer(applyMiddleware(thunk))) 