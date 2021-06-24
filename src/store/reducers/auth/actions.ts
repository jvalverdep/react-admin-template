import { IUser } from "../../../common/entities";
import { authActionTypes } from "./types";

export const loginSuccess = (user: IUser) => ({
  type: authActionTypes.LOGIN_USER_SUCCESS,
  payload: user,
});

export const loginError = (error: string) => ({
  type: authActionTypes.LOGIN_USER_ERROR,
  payload: error,
});
