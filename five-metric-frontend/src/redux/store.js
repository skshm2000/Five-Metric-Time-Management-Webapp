import { userDataReducer } from "./User Data/userDataReducer";
import thunk from "redux-thunk";
import { combineReducers,compose } from "redux";
import { authReducer } from "./auth/authReducer";
import {legacy_createStore, applyMiddleware} from "redux"

const rootReducer = combineReducers({
    auth:authReducer,
    userDataReducer:userDataReducer
})
const createComposer  = window.____REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)))

export {store}
