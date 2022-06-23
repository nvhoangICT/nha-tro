
import axios from 'axios';
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from './authSlice'

export const loginUser = async (user, dispatch, navigate) => {
    console.log(user)
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:8081/api/login", user);
        dispatch(loginSuccess(res.data));
        console.log(res.data)
        navigate("/");
    } catch (e) {
        dispatch(loginFailed());
    }
}

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        const res = await axios.post("http://localhost:8081/api/register", user, { headers: { "Content-Type": "application/json" } });
        dispatch(registerSuccess());
        console.log(res.response.data);
        navigate("/");
    } catch (e) {
        navigate("/");
        console.error(e.response.data)
        dispatch(registerFailed());
    }
}