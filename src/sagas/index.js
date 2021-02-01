import { takeEvery, all } from 'redux-saga/effects';
import { authenticateSaga } from './authSaga';
import { logIn, registerCard } from '../actions';
import {registerCardSaga} from './paymentSaga';

export function* authSaga() {
	yield all([takeEvery(logIn.toString(), authenticateSaga)]);
}

export function* paymentSaga() {
	yield all([takeEvery(registerCard.toString(),registerCardSaga)]);
}