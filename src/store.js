import { createStore } from "redux";
import rootReducer from "./reducers";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { authSaga, paymentSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(authSaga);
sagaMiddleware.run(paymentSaga);