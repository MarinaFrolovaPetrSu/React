import { logIn } from "./actions";
import {serverLogIn} from './api';
import { AUTHENTICATE } from "./actions";

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const {email, password} = action.payload;
    const success = await serverLogIn(email, password)
    if(success){
      store.dispatch(logIn())
    }
  } else {
    next(action);
  }
};
