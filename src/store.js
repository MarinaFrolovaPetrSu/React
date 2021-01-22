import { createStore } from "redux";
import rootReducer from "./reducers";
import { applyMiddleware } from "redux";
import { authMiddleware } from "./authMiddleware";

export const store = createStore(rootReducer, applyMiddleware(authMiddleware));