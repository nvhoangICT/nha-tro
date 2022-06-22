import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
// import axios from 'axios'
// import { loginUser } from '../../redux/apiRequest'
// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom';

const AddProperty = ({ onLogin }) => {
    const [address, setAddress] = useState("")
    const [description, setDescription] = useState("")
    const [beds, setBeds] = useState(0)
    const [baths, setBaths] = useState(0)

    const HandleAddProperty = (e) => {
        e.preventDefault();
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
                                        <div className="card-front">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">Đăng phòng trọ</h4>
                                                    <div className="form-group">
                                                        <input
                                                            type="address"
                                                            name="address"
                                                            className="form-style"
                                                            placeholder="Địa chỉ"
                                                            autoComplete="off"
                                                            value={address}
                                                            onChange={(e) => setAddress(e.target.value)}
                                                        />
                                                        <i className="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input
                                                            type="description"
                                                            name="description"
                                                            className="form-style"
                                                            placeholder="Mô tả"
                                                            autoComplete="off"
                                                        />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <select className="form-style" value={beds} onChange={setBeds}>
                                                            <option className="form-style" value="">--Phòng ngủ--</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                        </select>
                                                        <i className="input-icon uil uil-users-alt"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <select className="form-style" value={baths} onChange={setBaths}>
                                                            <option className="form-style" value="">--Phòng tắm--</option>
                                                            <option value="0.5">0.5</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="2">3</option>
                                                        </select>
                                                        <i className="input-icon uil uil-users-alt"></i>
                                                    </div>
                                                    <button type="submit" className="btn mt-4" onClick={(e) => { HandleAddProperty(e) }}>submit</button>
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

export default AddProperty