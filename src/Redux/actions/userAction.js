import { actionTypes } from "../store/types";

export const storeUserData = (data) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_USERNAME,
    payload: data,
  });
};

export const clearData = () => (dispatch) => {
  dispatch({
    type: actionTypes.CLEAR_DATA,
  });
};
