import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/apiRequest';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSignup = (e) => {
        e.preventDefault();

        var reGexEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
        var regemail = email;
        if (regemail === '' || regemail === null) {
            alert("Email không được để trống!");
        }else if(!reGexEmail.test(regemail)){
            alert("Email không hợp lệ!");
            regemail = '';
        }else{
            setEmail(regemail);

        const newUser = {
            name: fullname,
            email: email,
            password: password
        };
        registerUser(newUser, dispatch, navigate);
    }
    }

    return (
        <>
            <div className="card-back" style={{height:'80%', marginTop:'40px'}}>
                <div className="center-wrap">
                    <div className="section text-center">
                        <h4 className="pb-3">Đăng ký</h4>
                        <div className="form-group">
                            <input
                                type="text"
                                name="fullname"
                                className="form-style"
                                placeholder="Your Full Name"
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
                                autoComplete="off"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <i className="input-icon uil uil-lock-alt"></i> 
                        </div>
                        <button type="submit" className="btn mt-4" onClick={(e) => { handleSignup(e) }}>submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register