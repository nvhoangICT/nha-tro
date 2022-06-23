import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/apiRequest'

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const newUser = {
            email: loginEmail,
            password: loginPassword
        };
        loginUser(newUser, dispatch, navigate);
    }

    return (
        <>
            <div className="card-front">
                <div className="center-wrap">
                    <div className="section text-center">
                        <h4 className="mb-4 pb-3">Log In</h4>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-style"
                                placeholder="Your Email"
                                autoComplete="off"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                            />
                            <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                            <input
                                type="password"
                                className="form-style"
                                placeholder="Your Password"
                                autoComplete="off"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <button type="submit" className="btn mt-4" onClick={(e) => { handleLogin(e) }}>submit</button>
                        <p className="mb-0 mt-4 text-center">
                            <Link to="/" className="link">Forgot your password?</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login