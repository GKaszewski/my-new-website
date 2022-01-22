import axios from "axios";
import { BASE_URL } from "../../../utils/ApiData";
import { UserData } from "../../../utils/UserData";
import {
  signInError,
  signInPending,
  signInSuccess,
} from "../../actions/authActions";

import Cookies from "universal-cookie";

const login = (user: UserData) => {
  return (dispatch) => {
    dispatch(signInPending());
    axios
      .post(`${BASE_URL}/auth/`, user)
      .then((res) => {
        dispatch(signInSuccess(res.data.token));
        const cookies = new Cookies();
        cookies.set("token", res.data.token);
        return res.data;
      })
      .catch((error) => dispatch(signInError(error)));
  };
};

export default login;
