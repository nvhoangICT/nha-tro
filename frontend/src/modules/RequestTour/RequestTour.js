import { useState } from 'react';
import '../ChangeInformation/style.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/apiRequest'
import Header from '../../components/HomeComponent/Header';

const ChangeInformation = (props) => {
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
            <Header />
            <div className="section" style={{ backgroundImage: `url(images/bg_3.jpg)` }}>
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front" style={{ height: '100%', marginTop: '-20%', width: '120%' }}>
                                            <div className="image">
                                                <div className="center-wrap " >
                                                    <div className="section text-center" >
                                                        <h4 className="pb-3">Liên hệ xem nhà</h4>
                                                        <div className="form-group" >
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                className="form-style"
                                                                placeholder="Họ tên"
                                                                autoComplete="off"
                                                                value={props.name}
                                                                onChange={(e) => setName(e.target.value)}
                                                            />
                                                            <i className="input-icon uil uil-user"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                className="form-style"
                                                                placeholder="example@email.com"
                                                                autoComplete="off"
                                                                value={props.email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                            <i className="input-icon uil uil-at"></i>
                                                        </div>
                                                        <div className='form-group mt-2'>
                                                            <input
                                                                type="dob"
                                                                name="dob"
                                                                className="form-style"
                                                                placeholder="Ngày hẹn: DD/MM/YYYY"
                                                                autoComplete="off"
                                                                value={dob}
                                                                onChange={(e) => setDob(e.target.value)}
                                                            />
                                                            <i className="input-icon uil uil-calendar-alt"></i>
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