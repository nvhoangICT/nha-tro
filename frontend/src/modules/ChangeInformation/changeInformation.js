import { useState } from 'react';
import '../ChangeInformation/style.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/apiRequest'

const ChangeInformation = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChangeInfo = (e) => {
        e.preventDefault();
        const changeInformation = {
            name: name,
            dob: dob,
            address: address,
            email: email,
            phone: phone,
            password: password
        };
        // changeInformation(newUser, dispatch, navigate);
    }
    return (
        <>
            <div className="section" style={{ backgroundImage: `url(images/bg_3.jpg)` }}>
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front" style={{ height: '120%', marginTop: '-20%', width: '120%' }}>
                                            <div className="image">
                                                <div className="center-wrap " >
                                                    <div className="section text-center" >
                                                        <h4 className="pb-3">Thay đổi thông tin người dùng</h4>
                                                        <div className="form-group" >
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                className="form-style"
                                                                placeholder="Họ tên"
                                                                autoComplete="off"
                                                                value={name}
                                                                onChange={(e) => setName(e.target.value)}
                                                            />
                                                            <i className="input-icon uil uil-user"></i>
                                                        </div>
                                                        <div className='form-group mt-2'>
                                                            <input
                                                                type="dob"
                                                                name="dob"
                                                                className="form-style"
                                                                placeholder="Ngày sinh : DD/MM/YYYY"
                                                                autoComplete="off"
                                                                value={dob}
                                                                onChange={(e) => setDob(e.target.value)}
                                                            />
                                                            <i className="input-icon uil uil-calendar-alt"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input
                                                                type="address"
                                                                name="address"
                                                                className="form-style"
                                                                placeholder="Địa chỉ"
                                                                autoComplete="off"
                                                                value={address}
                                                                onChange={(e) => setAddress(e.target.value)}
                                                            />
                                                            <i className="input-icon uil-map-marker"></i>

                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                className="form-style"
                                                                placeholder="example@email.com"
                                                                autoComplete="off"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                            <i className="input-icon uil uil-at"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input
                                                                type="phone"
                                                                name="phone"
                                                                className="form-style"
                                                                placeholder="Phone Number"
                                                                autoComplete="off"
                                                                value={phone}
                                                                onChange={(e) => setPhone(e.target.value)}
                                                            />
                                                            <i className="input-icon uil uil-phone"></i>
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
                                                        <button type="submit" className="btn mt-4" onClick={(e) => { handleChangeInfo(e) }}>submit</button>
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
            </div>
        </>
    )
}

export default ChangeInformation