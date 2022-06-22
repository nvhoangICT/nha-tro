import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import axios from 'axios'
import { loginUser } from '../../redux/apiRequest'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Auth = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [fullname, setFullname] = useState("");
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

    function handleSignup(email, password, fullname) {
        return axios.post("/api/signup", {
            email: email,
            password: password,
            fullname: fullname
        }).then(response => {
            localStorage.setItem("token", response.data.token);
            onLogin();
        }
        ).catch(error => {
            console.log(error);
        }
        );
    }

    return (
        <>
            <div className="section" style={{ backgroundImage: `url(images/bg_3.jpg)` }}>
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label htmlFor="reg-log"></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">Log In</h4>
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            name="email"
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
                                                            name="password"
                                                            className="form-style"
                                                            placeholder="Your Password"
                                                            id="password"
                                                            autoComplete="off"
                                                            value={loginPassword}
                                                            onChange={(e) => setLoginPassword(e.target.value)}
                                                        />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <button type="submit" className="btn mt-4" onClick={(e) => { handleLogin(e) }}>submit</button>
                                                    <p className="mb-0 mt-4 text-center">
                                                        <Link to="#" className="link">Forgot your password?</Link>
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="pb-3">Sign Up</h4>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            className="form-style"
                                                            placeholder="Your Full Name"
                                                            id="name"
                                                            autoComplete="off"
                                                            value={fullname}
                                                            onChange={(e) => setFullname(e.target.value)}
                                                        />
                                                        <i className="input-icon uil uil-user"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            className="form-style"
                                                            placeholder="Your Email"
                                                            autoComplete="off"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                        <i className="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input
                                                            type="password"
                                                            name="password"
                                                            className="form-style"
                                                            placeholder="Your Password"
                                                            id="password"
                                                            autoComplete="off"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                        />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    {/* <div className="form-group mt-2">
                                                            <input
                                                                type="password"
                                                                name="password_confirmation"
                                                                className="form-style"
                                                                placeholder="Your Password"
                                                                id="password_confirmation"
                                                                autoComplete="off"
                                                                value={passwordConfirmation}
                                                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                                            />
                                                            <i className="input-icon uil uil-lock-alt"></i>
                                                        </div> */}
                                                    <button type="submit" className="btn mt-4" onClick={() => { handleSignup() }}>submit</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth