import { all, call, takeEvery } from "redux-saga/effects";
import { authService } from "../../../services";
import { loginSuccess, loginError } from "./actions";
import { authActionTypes } from "./types";

export function* login(): Generator<any, any, any> {
  try {
    const response = yield call(authService.login);
    yield loginSuccess(response);
  } catch (error) {
    yield loginError(error);
  }
}

function* watchLogin() {
  yield takeEvery(authActionTypes.LOGIN_USER_REQUESTED, login);
}

export default function* rootAuth() {
  yield all([watchLogin()]);
}
