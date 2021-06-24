import { IAction } from "../../../common/interfaces";
import { authActionTypes, IState } from "./types";

const initialState: IState = {
  authenticated: undefined,
  loggedInUser: { value: undefined, loading: false, error: undefined },
};

const authReducer = (state = initialState, action: IAction): IState => {
  switch (action.type) {
    case authActionTypes.LOGIN_USER_REQUESTED:
      return {
        authenticated: false,
        loggedInUser: {
          value: undefined,
          loading: true,
          error: undefined,
        },
      };
    case authActionTypes.LOGIN_USER_SUCCESS:
      return {
        authenticated: true,
        loggedInUser: {
          value: action.payload,
          loading: false,
          error: undefined,
        },
      };
    case authActionTypes.LOGIN_USER_ERROR:
      return {
        authenticated: undefined,
        loggedInUser: {
          value: undefined,
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
