import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/apiRequest'
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'

const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    top: '30%',
    left: '42%',
    transfrom: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: '#f5f5f5',
    border: '1px solid #000',
    p: 4
}

const Login = () => {
    const [email, setEmail] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        var reGexEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
        var email = loginEmail;
        if (email === '' || email === null) {
            alert("Email không được để trống!");
        }else if(!reGexEmail.test(email)){
            alert("Email không hợp lệ!");
            email = '';
        }else{
            setLoginEmail(email);

            const newUser = {
                email: loginEmail,
                password: loginPassword
            };
            loginUser(newUser, dispatch, navigate);
        }
        
    }

    return (
        <>
            <div className="card-front" style={{ height: '80%', marginTop: '40px' }}>
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
                            <button class="link" onClick={handleOpen} style={{ border: 0, background: "inherit" }}>Forgot your password?</button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Quên mật khẩu
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                                        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
                                    </Typography>
                                    <Button
                                        endIcon={<SendIcon />}
                                        variant="contained"
                                        sx={{ mt: 2 }}
                                        href="#outlined-buttons"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    > Gửi</Button>
                                </Box>
                            </Modal>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login