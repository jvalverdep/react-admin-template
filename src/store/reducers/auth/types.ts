import { IUser } from "../../../common/entities";
import { IObjectState } from "../../../common/interfaces/reducer-state";

export const authActionTypes = {
  LOGIN_USER_REQUESTED: "@@auth/LOGIN_USER_REQUESTED",
  LOGIN_USER_SUCCESS: "@@auth/LOGIN_USER_SUCCESS",
  LOGIN_USER_ERROR: "@@auth/LOGIN_USER_ERROR",
};

export interface IState {
  authenticated?: boolean;
  loggedInUser: IObjectState<IUser>;
}
