import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./authReducer";
import { DataReducer } from "./dataReducer";
const rootReducer = combineReducers({
	AuthReducer,
	DataReducer
})


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))