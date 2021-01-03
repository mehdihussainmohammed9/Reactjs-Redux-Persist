import { act } from "react-dom/test-utils";
import { actionTypes } from "../store/types";

export const initial = {
  userName: null,
};

const userReducer = (state = initial, action) => {
  switch (action.type) {
    case actionTypes.SET_USERNAME:
      return Object.assign({}, state, {
        userName: action.payload,
      });

    case actionTypes.CLEAR_DATA:
      return Object.assign({}, state, {
        userName: null,
      });
    default:
      return Object.assign({}, state);
  }
};

export default userReducer;
