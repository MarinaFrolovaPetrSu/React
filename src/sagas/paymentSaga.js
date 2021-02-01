import { put, call } from "redux-saga/effects";
import {
  registerCardStart,
  setCardData,
  registerCardError,
  getCardDataStart,
  getCardDataError,
} from "../actions";
import { serverRegisterCard, getCardData} from "../api";

export function* registerCardSaga(action) {
  yield put(registerCardStart())
  const token = yield localStorage.getItem("token");

  const { cardNumber, expiryDate, cardName, cvc} = action.payload;
  try {
    const response = yield call (
      serverRegisterCard,
      cardNumber,
      expiryDate,
      cardName,
      cvc,
      token
    );

    if (response.success) {
      yield put(setCardData({cardNumber, expiryDate, cardName, cvc}));
    } else {
      yield put(registerCardError({error: response.error}));
    }
  } catch(e) {
    yield put(registerCardError({error: "Не удалось сохранить данные карты!"}));
  }
}