import { userDataReducer } from "./User Data/userDataReducer";
import thunk from "redux-thunk"
import {legacy_createStore, applyMiddleware} from "redux"

const store = legacy_createStore(userDataReducer, applyMiddleware(thunk))

export {store}
