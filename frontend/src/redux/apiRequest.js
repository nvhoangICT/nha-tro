
import axios from 'axios';
import { loginFailed, loginStart, loginSuccess } from './authSlice'

export const loginUser = async (user, dispatch, navigate) => {
    console.log(user)
    dispatch(loginStart());
    try {
        const res = await axios.post("/api/login", user);
        dispatch(loginSuccess(res.data));
        navigate("/");
    } catch (e) {
        dispatch(loginFailed());
    }
}