import { createAction } from 'redux-actions';

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";

export const logIn = () => ({
  type: LOG_IN,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});

export const getCardDataStart = createAction("GET_CARD_DATA_START");
export const getCardData = createAction("GET_CARD_DATA");
export const setCardData = createAction("SET_CARD_DATA");
export const getCardDataError = createAction("GET_CARD_DATA_ERROR");

export const registerCardStart = createAction("REGISTER_CARD_START");
export const registerCard = createAction("REGISTER_CARD");
export const registerCardError = createAction("REGISTER_CARD_ERROR");