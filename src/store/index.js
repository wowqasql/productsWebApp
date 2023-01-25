import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { isAuthReducer } from "../reducers/auth";
import { productReducer } from "../reducers/product";
import { typeReducer } from "../reducers/type";

const rootReducers = combineReducers({
  auth: isAuthReducer,
  product: productReducer,
  type: typeReducer
})


export const store = createStore(rootReducers, applyMiddleware(thunk))