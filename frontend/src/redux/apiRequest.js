import axios from "../api/axios";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  logOutFailed,
  logOutStart,
  logOutSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
} from "./authSlice";

export const loginUser = async (user, dispatch, navigate) => {
  console.log(user);
  dispatch(loginStart());
  try {
    const res = await axios.post("/api/login", JSON.stringify(user), {
      headers: {"Content-Type": "application/json"},
      withCredentials: true,
    });
    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("refreshToken", res.data.refreshToken);
    dispatch(loginSuccess(res.data));
    // console.log(res.data)
    navigate("/");
  } catch (e) {
    dispatch(loginFailed());
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("/api/register", user, {
      headers: {"Content-Type": "application/json"},
    });
    dispatch(registerSuccess());
    alert("Đăng ký thành công. Xin mời đăng nhập");
    console.log(res.response.data);
    navigate("/");
  } catch (e) {
    navigate("/");
    console.error(e.response.data);
    dispatch(registerFailed());
  }
};

export const logOut = async (dispatch, id, navigate, accessToken, axiosJWT) => {
  dispatch(logOutStart());
  try {
    await axiosJWT.post("/logout", id, {
      headers: {token: `Bearer ${accessToken}`},
    });
    dispatch(logOutSuccess());
    navigate("/");
  } catch (err) {
    dispatch(logOutFailed());
  }
};
