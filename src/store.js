import { createStore } from "redux";
import rootReducer from "./reducers";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { authSaga } from "./authSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(authSaga);
