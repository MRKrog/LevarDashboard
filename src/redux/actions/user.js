import { UPDATE_USER } from "../types/user";

export const updateUser = user => dispatch => {
  dispatch({
    type: UPDATE_USER,
    payload: user
  });
};
